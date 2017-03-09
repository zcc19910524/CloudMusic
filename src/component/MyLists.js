/**
 * Created by zhaochenchen on 2017/3/6.
 */
import React, {Component} from 'react'
import NavLink from './NavLink'

export default class MyLists extends Component{
    render(){
        const {MyLists}=this.props
        return(
            <div className="MyLists">
                <div className="title">
                    <i className="iconfont icon-xiajiantou1-copy"></i>
                    <span>我创建的歌单(5)</span>
                </div>
                <div className="mylists">
                    {
                        MyLists.map((item,index)=>{
                            return(
                                <NavLink to={`ListDetail/${item.id}`} key={index}>
                                    <div className="list-group">
                                        <img src={item.url}/>
                                        <div>
                                            <span>{item.title}<br/>{item.count}首</span>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}