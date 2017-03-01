/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class NavLink extends Component{
    render(){
        return(
            <Link {...this.props} activeClassName="active"></Link>
        )
    }
}
