import * as React from 'react';
import {
    Icon,
    Button,
    Input,
    Form,
} from 'antd';
import styles from './userinfo.less';
import logo from '/static/logo.svg';
import Connection from '@/store';
import Router from 'next/router';
import moment from 'moment';
import axios from 'axios';

interface IProps {
    "username"?: string,
    "Identity"?: string,
    "Bio"?: string,
    "Position"?: string,
    "Website"?: string,
    "Institution"?: string,
    "messageList"?: any
}
interface IState {
    "username"?: string,
    "Identity"?: string,
    "Bio"?: string,
    "Position"?: string,
    "Website"?: string,
    "Institution"?: string,
    isEdit?: boolean,
    "messageList?": any
}


// @ts-ignore
@Connection(({albums, loading}) => ({
    albums: albums,
    loading: loading.effects['_user/login'],
}))
export default class UserInfo extends React.Component<IProps, IState> {

    // 异步获取 JS 普通对象，并绑定在props上当服务渲染时, 我是最先执行的声明周期函数  first
    static async getInitialProps(props) {

        // let serverData = await new Promise(function(resolve, reject){
        //     setTimeout(function(){
        //         var tempServerData = {
        //             username: 'Yijun Liu',
        //             Identity: 'USA. University of San Francisco',
        //             Bio: 'Computer Scientis',
        //             email: 'zhangsan@163.com',
        //             "messageList": [
        //                 {
        //                     id: 1,
        //                     email: 'Yijun Liu@163.com',
        //                     message: 'Just setting up my Twitter.111111',
        //                     date: '2019-5-18 11:33:56'
        //                 },
        //                 {
        //                     id: 2,
        //                     email: 'Yijun Liu@163.com',
        //                     message: 'Just setting up my Twitter.222222',
        //                     date: '2019-5-18 11:33:56'
        //                 },
        //                 {
        //                     id: 3,
        //                     email: 'Yijun Liu@163.com',
        //                     message: 'Just setting up my Twitter.333333',
        //                     date: '2019-5-18 11:33:56'
        //                 }
        //             ]
        //         };
        //         resolve(tempServerData);
        //     }, 4000)
        // })
        // var res = await axios.get('http://localhost:50000/getUserinfo')
        // console.log(res)
        // console.log(res.data)
        // var serverData = res.data;

        // let serverData = await new Promise(function(resolve, reject){
        //     setTimeout(function(){
        //         var tempServerData =  {
        //             username: 'Yijun Liu',
        //             Identity: 'I am a/an Engineer',
        //             Bio: 'This is Bio',
        //             Position: 'I am a/an Student',
        //             Institution: 'University of California, Irvine',
        //             Website: 'www.Ureka.com',
        //             // "messageList": [
        //             //     {
        //             //         id: 1,
        //             //         title: 'title',
        //             //         message: 'Just setting up my Twitter.111111',
        //             //         date: '2019-5-18 11:33:56'
        //             //     }
        //             // ]
        //         };
        //         resolve(tempServerData);
        //     }, 2000)
        // })
        // return serverData;
    }

    // 构造函数， 我是 second
    constructor(props) {
        super(props);
        const {username} = this.props;
        // 定义state数据
        this.state = {
            isEdit: false
        }
        console.log('huangbiao', username)
    }

    // 页面加载完了，设置body的背景色    我是 Third
    componentDidMount () {
        document.getElementsByTagName('body')[0].style.background = '#E7ECEF';
        let {username, Identity, Bio, Position, Institution, Website, messageList} = this.props;
        console.log('huangbiao', username)
        var userinfoStr = window.localStorage.getItem("userinfo");
        var userInfo = JSON.parse(userinfoStr);

        this.setState({
            "username": userInfo.fullName,
            "Identity": userInfo.occupation,
            "Bio": userInfo.bio,
            "Position": userInfo.profession,
            "Institution": userInfo.institution,
            "Website":userInfo.personalWebsite,
        });
        this.getMesageList();
    }

    getMesageList () {
        const that = this;
        var userInfoStr = window.localStorage.getItem("userinfo");
        var userInfo = JSON.parse(userInfoStr);
        var tokenStr = userInfo.token;
        var userId = userInfo.userId;

        var opts = {
            method:"GET"
        }
        fetch("http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/post?offset=0&limit=10&userIds="+userId+"&statuses=Draft&subscribedOnly=false", {
            method:"GET",
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+tokenStr
            }
        })
            .then((response) => {
                return response.json();  //返回一个带有文本的对象
            })
            .then((res) => {
                var messageArr = res;
                var result = [];
                for (var i = 0; i < messageArr.length; i++) {
                    var currentObj = messageArr[i];
                    var showObj = {
                        id: currentObj.post.id,
                        title: currentObj.post.title,
                        message: currentObj.post.text,
                        date: moment(new Date(currentObj.post.lastModififedDate)).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.push(showObj);
                }
                that.setState({
                    "messageList": result
                })
            })
            .catch((error) => {
                alert(error)
            })

    }


    // 离开页面处理的逻辑  我是 Last
    componentWillUnmount () {
    }

    // 点击编辑按钮，将 isEdit 改为true，即 编辑状态
    editAction () {
        this.setState({
            isEdit: true
        })
    }

    // 点击取消按钮，将 isEdit 改为false，即 非编辑状态
    cancelInputAction () {
        this.setState({
            isEdit: false
        })
    }
    // saveUserInfoAction () {
    //     this.setState({
    //         isEdit: false
    //     })
    // }

    // 输入表单，触发的onchange事件，改变input的值
    userInputChange(type, eventObj){
        let newValue = eventObj.target.value;
        if (type === 'username') {
            // this.setState({
            //     username: newValue
            // });
        } else if (type === 'Identity') {
            this.setState({
                Identity: newValue
            });
        } else if (type === 'Bio') {
            this.setState({
                Bio: newValue
            });
        }else if (type === 'Website') {
            this.setState({
                Website: newValue
                });
        } else if (type === 'Position') {
            this.setState({
                Position: newValue
            });
        }else if (type === 'Institution') {
            this.setState({
                Institution: newValue
                  });
        }
    }

    // 点击头像，触发点击上传文件的表单
    changeImageAction () {
        this.refs.inputfile.click();
    }

    // 根据 state.isEdit 的值，显示不同的内容
    getUserInfoHtml () {
        let {isEdit, username, Identity, Bio, Position, Institution, Website} = this.state;
        if (isEdit) {
            return (
                <Form className={styles['edit-form']} style={{marginTop:'7px'}}>
                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={username}
                        value={username}
                        onChange={this.userInputChange.bind(this, 'username')}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={Bio}
                        value={Bio}
                        onChange={this.userInputChange.bind(this, 'Bio')}
                        prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Bio"
                        />
                    </Form.Item>
                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={Identity}
                        value={Identity}
                        onChange={this.userInputChange.bind(this, 'Identity')}
                        prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Identity"
                        />
                    </Form.Item>
                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={Position}
                        value={Position}
                        onChange={this.userInputChange.bind(this, 'Position')}
                        prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Position"
                        />
                    </Form.Item>

                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={Institution}
                        value={Institution}
                        onChange={this.userInputChange.bind(this, 'Institution')}
                        prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Institution"
                        />
                    </Form.Item>
                    <Form.Item className={styles['form-input']}>
                        <Input
                        defaultValue={Website}
                        value={Website}
                        onChange={this.userInputChange.bind(this, 'Website')}
                        prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Website"
                        />
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center'}}>
                        <div className={styles['edit-btn-container']}>
                            <Button type="primary" className={styles['edit-btn']} onClick={this.cancelInputAction.bind(this)}>Cancel</Button>
                        </div>
                        <div className={styles['edit-btn-container']}>
                            <Button type="primary" className={styles['edit-btn']} onClick={this.saveUserInfoAction.bind(this)}>Save</Button>
                        </div>
                    </Form.Item>
                </Form>
            )
        } else {
            return (
                <>
                    <div className={styles.username}>
                        {username}
                    </div>
                    <div className={styles.info}>
                        {Bio}
                    </div>
                    <div className={styles.info}>
                        {Identity}
                    </div>
                    <div className={styles.info}>
                        {Position}
                    </div>
                    <div className={styles.info}>
                        {Institution}
                    </div>
                    <div className={styles.info}>
                        {Website}
                    </div>
                </>
            )
        }

    }

    saveUserInfoAction () {

        let {username, Position, Institution,Bio,Identity,Website,isEdit} = this.state;
        isEdit = false;
        var userInfoStr = window.localStorage.getItem("userinfo");
        var userInfo = JSON.parse(userInfoStr);
        userInfo.profession = Position;
        userInfo.userName = username;
        userInfo.institution = Institution;
        userInfo.bio = Bio;
        userInfo.occupation = Identity;
        userInfo.personalWebsite= Website;
        var tokenStr = userInfo.token;
        axios.post("http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/users/editprofile?userName="+username+"&Identity="+Identity+"&Bio="+Bio+"&Position="+Position+"&Institution="+Institution+"&Website="+Website,{},{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+tokenStr
            }
        })
        .then(function(res) {
            console.log(res);
            var userInfoStr = JSON.stringify(userInfo)
            window.localStorage.setItem("userinfo", userInfoStr);
            // debugger
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    // 页面跳转到首页
    goHomePage () {
        Router.push('/profile');
    }

    // 收藏
    collectAction (messageObj, eventObj) {
        let { messageList } = this.state;
		// 循环遍历 state中的 数组对象
        let newListData = messageList.map(function(item, idx){
            if (item.id === messageObj.id) {
				// 改变值
                return {
                    ...item,
                    isCollect:  !messageObj.isCollect
                }
            } else {
                return item;
            }
        });
		// 变化之后的 JSON数组，重新赋值
        this.setState({
            messageList: newListData
        })
    }

    // 点赞
    complimentAction(messageObj, index, eventObj) {
        let { messageList } = this.state;
        messageList[index]['isCompliment'] = !messageList[index]['isCompliment'];
        // let newListData = JSON.parse(JSON.stringify(messageList));
        let newListData = messageList;
        this.setState({
            messageList: newListData
        })
    }

    // 获取用户的评论列表
    getMessageListHtml () {
        const that = this;
        let { messageList } = this.state;
        // 因为 messageList 是异步加载进来的，所以最开始，是undefined
        if (!messageList) {
            messageList = [];
        }
        return messageList.map(function(messageObj, index){
            return (
                <div className={styles['message-container']} key={messageObj.id}>
                    <div className={styles.portrait}>
                        <img src='../static/logo.png' className={styles.image} />
                    </div>
                    <div className={styles['info-container']}>
                        <div className={styles.author}>
                            {messageObj.title}
                        </div>
                        <div className={styles.theme}>
                            {messageObj.message}
                        </div>
                        <div className={styles.time}>
                            {messageObj.date}
                            <div className={styles['tool-bar']}>
                                <div className={styles['bar-btn']}>
                                    {/* 点赞 */}
                                    {
                                        messageObj.isCompliment ?
                                        <i className="mdi mdi-heart"  onClick={that.complimentAction.bind(that, messageObj, index)}  />
                                        : <i className="mdi mdi-heart-outline" onClick={that.complimentAction.bind(that, messageObj, index)}/>
                                    }
                                </div>
                                <div className={styles['bar-btn']}>
                                    <i className="mdi mdi-comment-outline" onClick={that.collectAction.bind(that, messageObj)}/>
                                </div>
                                <div className={styles['bar-btn']}>
                                    {/* 收藏 */}
                                    {
                                        messageObj.isCollect ?
                                        <i className="mdi mdi-bookmark" onClick={that.collectAction.bind(that, messageObj)} style={{color: '#FEC603'}} />
                                        : <i className="mdi mdi-bookmark-outline" onClick={that.collectAction.bind(that, messageObj)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        // 得到的是用户的信息 HTML
        let userInfoHtml = this.getUserInfoHtml();
        let messageListHtml = this.getMessageListHtml();
        return (
          <div className={styles['userinfo-page']}>
              {/* <UHeader /> */}
              <div className={styles.header}>
                  <div className={styles['top-placement']}>
                      <img alt='logo' className={styles.logo} src={logo} onClick={this.goHomePage.bind(this)}/>
                  </div>
                  <div className={styles['list-info']}>
                      <div className={styles['item-info']}>1 post</div>
                      <div className={styles['item-info']}>1 Following</div>
                      <div className={styles['item-info']}>1 Followers</div>
                      <div className={styles['item-info']}>1 Views</div>
                      <div style={{'clear': 'both'}}></div>
                      <img src='../static/logo.png' className={styles.image} onClick={this.changeImageAction.bind(this)}/>
                      <input type='file' ref='inputfile' style={{display: 'none'}} />
                  </div>
              </div>
              <div className={styles['main-container']}>
                  <div className={styles['main-left']}>
                      {userInfoHtml}
                  </div>
                  <div className={styles['main-center']}>
                      {messageListHtml}
                  </div>
                  <div className={styles['main-right']}>
                      <Button type="primary" className={styles['edit-btn']} onClick={this.editAction.bind(this)}>Edit profile</Button>
                  </div>
              </div>
          </div>
        );
    }
}
