/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React,{Component} from 'react'
import Header1 from './Header1'
import Tab from './../containers/Tabs'

export default class Home extends Component{
    render(){
        return(
            <div className="container">
                <Header1/>
                <Tab/>
                {this.props.children}
            </div>
        )
    }
}
