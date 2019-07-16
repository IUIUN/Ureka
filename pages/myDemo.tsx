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
import axios from 'axios'

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
export default class myDemo extends React.Component<IProps, IState> {

    // 异步获取 JS 普通对象，并绑定在props上当服务渲染时, 我是最先执行的声明周期函数  first
    static async getInitialProps() {
        return {};
    }

    // 构造函数， 我是 second
    constructor(props) {
        super(props);
        // 定义state数据
        this.state = {
            dataArr: []
        };
    }

    // 页面加载完了，设置body的背景色    我是 Third
    componentDidMount () {
        const that = this;
        axios.post('http://121.43.162.222:8081/bi/allShopList', {})
            .then(function (res) {
                 var dataArr = res.data.data.list;
                 debugger
                 console.log(dataArr);
                 that.setState({
                     dataArr: dataArr
                 });
            })
            .catch(function (err) {
                console.log(err);
            });
    }


    render() {
        // let dataArr = this.state.dataArr;
        let {dataArr} = this.state;
        return (
            <div className={styles['userinfo-page']}>
                {JSON.stringify(dataArr)}
            </div>
        );
    }
}
