/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React,{Component} from 'react'
import NavLink from './NavLink'

export default class Tab extends Component{
    render(){
        return(
            <div>
                <ul className="tab">
                    <li>
                        <NavLink to="/FindMusic/Recommend" onlyActiveOnIndex={true}>个性推荐</NavLink>
                        <span></span>
                    </li>
                    <li>
                        <NavLink to="/FindMusic/List">歌单</NavLink>
                        <span></span>
                    </li>
                    <li>
                        <NavLink to="/FindMusic/Radio">主播电台</NavLink>
                        <span></span>
                    </li>
                    <li>
                        <NavLink to="/FindMusic/Ranking">排行榜</NavLink>
                        <span></span>
                    </li>
                </ul>
            </div>
        )
    }
}