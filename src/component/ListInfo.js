/**
 * Created by zhaochenchen on 2017/3/8.
 */
import React, {Component} from 'react'
import NavLink from './NavLink'

export default class ListInfo extends Component{
    render(){
        const {ListDetails}=this.props
        const {id}=this.props.params
        const list=ListDetails[id]
        return(
            <div className="listInfo">
                <div className="cover">
                    <img src={list.url} alt=""/>
                    <span>{list.title}</span>
                </div>
                <div>
                    {
                        list.lists.map((item,index)=>{
                            return(
                                <NavLink to={`/Playing/${item.songId}`} key={index}>
                                    <div className="list-group" key={index}>
                                        <span>{index+1}</span>
                                        <div>
                                            {item.title}
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