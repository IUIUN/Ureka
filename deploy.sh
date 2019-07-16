#!/usr/bin/env bash
git pull
npm install
npm run build
docker rm ureka-app -f | true
docker rmi ureka | true
docker build -t ureka --cache-from ureka:latest .
docker run --rm -d --name ureka-app -p 3000:3000 ureka
