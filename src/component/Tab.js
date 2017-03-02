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
                        <NavLink to="/" onlyActiveOnIndex={true}>个性推荐</NavLink>
                        <span></span>
                    </li>
                    <li>
                        <NavLink>歌单</NavLink>
                    </li>
                    <li>
                        <NavLink>主播电台</NavLink>
                    </li>
                    <li>
                        <NavLink>排行榜</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}