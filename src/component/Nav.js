/**
 * Created by zhaochenchen on 2017/2/27.
 */
import React,{Component} from 'react'
import NavLink from './NavLink'

export default class Nav extends Component{
    render(){
        return(
            <div>
                <div className="Nav">
                    <ul>
                        <li>
                            <NavLink to="/" onlyActiveOnIndex={true}>
                                <i  className="iconfont icon-4"></i>
                                <span>发现音乐</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <i  className="iconfont icon-wodeyinle"></i>
                                <span>我的音乐</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <i  className="iconfont icon-pengyou"></i>
                                <span>朋友</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <i  className="iconfont icon-wode"></i>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>

                </div>
                {this.props.children}
            </div>
        )
    }
}