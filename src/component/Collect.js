/**
 * Created by zhaochenchen on 2017/3/6.
 */
import React, {Component} from 'react'

export default class Collect extends Component{
    render(){
        return(
            <div className="collect">
                <div className="list-group">
                    <i className="iconfont icon-ordinarydownload"></i>
                    <div>
                        <span>下载音乐</span>
                        <span>
                            2
                            <i className="iconfont icon-jiantouyou"></i>
                        </span>
                    </div>
                </div>
                <div className="list-group">
                    <i className="iconfont icon-zuijinbofang"></i>
                    <div>
                        <span>最近播放</span>
                        <span>
                            100
                            <i className="iconfont icon-jiantouyou"></i>
                        </span>
                    </div>
                </div>
                <div className="list-group">
                    <i className="iconfont icon-geshou"></i>
                    <div>
                        <span>我的歌手</span>
                        <span>
                            2
                            <i className="iconfont icon-jiantouyou"></i>
                        </span>
                    </div>
                </div>
                <div className="list-group">
                    <i className="iconfont icon-mv"></i>
                    <div>
                        <span>我的MV</span>
                        <span>
                            1
                            <i className="iconfont icon-jiantouyou"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}