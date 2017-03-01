/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React,{Component} from 'react'


export default class Tab extends Component{
    render(){
        return(
            <div>
                <ul className="tab">
                    <li>
                        <a href="javascript:;">个性推荐</a>
                        <span></span>
                    </li>
                    <li>
                        <a href="javascript:;">歌单</a>
                    </li>
                    <li>
                        <a href="javascript:;">主播电台</a>
                    </li>
                    <li>
                        <a href="javascript:;">排行榜</a>
                    </li>
                </ul>
            </div>
        )
    }
}