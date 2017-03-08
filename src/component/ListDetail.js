/**
 * Created by zhaochenchen on 2017/3/7.
 */
import React, {Component} from 'react'

export default class ListDetail extends Component{
    render(){
        return(
            <div className="listDetail">
                <div className="header">
                    <i className="iconfont icon-jiantouzuo"></i>
                    <span>音乐</span>
                    <span>
                         <i className="iconfont icon-bianji"></i>
                         <i className="iconfont icon-p7zhengzaibofangzhong"></i>
                    </span>
                </div>
                <div className="">
                    <img src="http://p4.music.126.net/Ohm58HJ1VxiGgcPGxMabaQ==/3430476279894539.jpg?param=200y200" alt=""/>
                </div>
            </div>
        )
    }
}