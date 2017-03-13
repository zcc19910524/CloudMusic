/**
 * Created by zhaochenchen on 2017/3/9.
 */
import React, {Component} from 'react'

export default class Playing extends Component{
    render(){
        return(
            <div className="playing">
                <div className="header">
                    <i className="iconfont icon-jiantouzuo"></i>
                    <div><span></span></div>
                    <span>
                         <i className="iconfont icon-bianji"></i>
                    </span>
                </div>
            </div>
        )
    }
}