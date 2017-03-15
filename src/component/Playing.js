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
                <div className="player">

                </div>
                <div className="controller">
                    <i className="iconfont icon-danquxunhuan"></i>
                    <i className="iconfont icon-previous"></i>
                    <i className="iconfont icon-pause"></i>
                    <i className="iconfont icon-xiayiqu"></i>
                    <i className="iconfont icon-2"></i>
                </div>
            </div>
        )
    }
}