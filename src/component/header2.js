/**
 * Created by zhaochenchen on 2017/3/4.
 */
import React, {Component} from 'react'

export default class Header2 extends Component{
    render(){
        return(
            <div className="header">
                <div className="search">
                    <i className="iconfont icon-fangdajing"></i>
                    <input type="text" placeholder="搜索音乐、歌词、电台"/>
                </div>
                <i className="iconfont icon-p7zhengzaibofangzhong"></i>
            </div>
        )
    }
}