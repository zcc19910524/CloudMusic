/**
 * Created by zhaochenchen on 2017/3/2.
 */
import React,{Component} from 'react'

export default class Recommend extends Component{
    render(){
        return(
            <div className="recommend">
                <ul>
                    <li>
                        <a>
                            <span><i className="iconfont icon-cndoubanfm"></i></span>
                            私人FM
                        </a>
                    </li>
                    <li>
                        <a>
                            <span><i>2</i></span>
                            每日歌曲推荐
                        </a>
                    </li>
                    <li>
                        <a>
                            <span><i className="iconfont icon-paixingbang"></i></span>
                            云音乐热歌榜
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}