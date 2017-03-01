/**
 * Created by zhaochenchen on 2017/2/27.
 */
import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'

export default class Nav extends Component{
    render(){
        return(
            <div className="Nav">
                <ul>
                    <li>
                        <IndexLink>
                            <span  className="iconfont icon-4">发现音乐</span>
                        </IndexLink>
                    </li>
                    <li><Link><span>我的音乐</span></Link></li>
                    <li><Link><span>朋友</span></Link></li>
                    <li><Link><span>我的</span></Link></li>
                </ul>
            </div>
        )
    }
}