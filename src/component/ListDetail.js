/**
 * Created by zhaochenchen on 2017/3/7.
 */
import React, {Component} from 'react'
import ListInfos from '../containers/ListInfos'

export default class ListDetail extends Component{
    render(){
        return(
            <div className="listDetail" >
                <div className="header">
                    <i className="iconfont icon-jiantouzuo"></i>
                    <span>音乐</span>
                    <span>
                         <i className="iconfont icon-bianji"></i>
                         <i className="iconfont icon-p7zhengzaibofangzhong"></i>
                    </span>
                </div>
                <ListInfos {...this.props}/>
            </div>
        )
    }
}