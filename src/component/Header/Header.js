import React, {Component} from 'react';
import Logo from "../../assets/logo/logo.png"
import './Header.scss'

class Headers extends Component {
    render() {
        return (
            <div className="navigation">
                <ul className="navigation_list">
                    <a href=''></a> <img src={Logo} style={{height: 20}} className="logo"/>
                    <li className="navigation_i"> |</li>
                    <li className="navigation_title"> 社招官网</li>
                    <li className="navigation_label" style={{color: "#F37327"}}> 首&nbsp;&nbsp; 页</li>
                    <a href='https://job.alibaba.com/zhaopin/positionList.htm'>
                        <li className="navigation_label">社会招聘</li>
                    </a>
                    <a href='https://campus.alibaba.com'>
                        <li className="navigation_label">校园招聘</li>
                    </a>
                    <a href='https://job.alibaba.com/zhaopin/about.htm'>
                        <li className="navigation_label">了解阿里</li>
                    </a>
                    <a href='https://job.alibaba.com/zhaopin/apply.htm'>
                        <li className="navigation_label">个人中心</li>
                    </a>
                    <div className="navigation_ing">
                        <ul className="navigation_list_right">
                            <li>欢迎来到阿里巴巴集团招聘！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </li>
                            <li>
                                <a href="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm">登录</a>
                            </li>
                            <li> &nbsp;|&nbsp;</li>
                            <li><a href="http://member1.taobao.com/member/newbie.htm">注册</a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Headers;