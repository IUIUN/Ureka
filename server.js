const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const LRUCache = require('lru-cache')
const proxy = require('koa-proxy')
var staticCache = require('koa-static-cache')
var path = require('path')



const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

const devProxy={
  host:  'http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080', // proxy to 192.168.1.5:80...
    match: /^\/api\//        // ...just the /api routes
}

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  // Set up the proxy.
  if ( devProxy) {
    server.use(proxy(devProxy))
  }
  server.use(staticCache(path.join(__dirname, 'static'), {
    maxAge: 365 * 24 * 60 * 60
  }))


  router.get('/', async ctx => renderAndCache(ctx, '/index'))
  router.get('/sample/post/:id', ctx => renderAndCache(ctx, '/sample/post', 'noCache'))

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  //todo fix
  // router.get('*', async ctx => renderAndCache(ctx))

  // server.use(cookieParser());
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes()).use(router.allowedMethods())

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(ctx) {
  return ctx.url
}

function renderAndCache(ctx, pagePath, noCache, queryParams = null) {
  if (ctx.req.url === '/favicon.ico'
    || ctx.req.url.startsWith('/_')
    || ctx.req.url.startsWith('/static')) {
    return handle(ctx.req, ctx.res);
  }
  if (dev) ssrCache.reset()
  if (!pagePath){
    pagePath=getCacheKey(ctx);
  }
  if (noCache === 'noCache') {
    return app
      .renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
      .then(html => {
        // Let's cache this page
        console.info('no cache')
        ctx.body = html
      })
      .catch(err => {
        console.info('ERRR', err)
        return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
      })
  }

  const key = getCacheKey(ctx.req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.info(`CACHE HIT: ${key}`)
    ctx.body = ssrCache.get(key)
    return Promise.resolve()
  }

  // If not let's render the page into HTML
  return app
    .renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.info(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)
      ctx.body = html
    })
    .catch(err => {
      console.info('ERRR', err)
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
    })
}
