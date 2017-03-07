/**
 * Created by zhaochenchen on 2017/3/4.
 */
import React, {Component} from 'react'
import Header2 from './header2'
import Collect from './Collect'
import MyLists from './MyLists'

export default class MyMusic extends Component{
    render(){
        return(
            <div className="myMusic">
                <Header2/>
                <Collect/>
                <MyLists/>
            </div>
        )
    }
}