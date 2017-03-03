/**
 * Created by zhaochenchen on 2017/3/2.
 */
import React, {Component} from 'react'

export default class PlayList extends Component{
    render(){
        return(
            <div className="playList">
                <div className="title">
                    <a className="title-left">
                        <i className="iconfont icon-duigouzhuanhuan"></i>
                        <span>推荐歌曲</span>
                    </a>
                    <a className="title-right">
                        <span>更多</span>
                        <i className="iconfont icon-jiantouyou"></i>
                    </a>
                </div>
                <div>
                    <ul>
                        {
                            this.props.playlists.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <div>
                                            <img src={item.url}/>
                                        </div>
                                        <p></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}