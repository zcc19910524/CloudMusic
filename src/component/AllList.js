/**
 * Created by zhaochenchen on 2017/3/5.
 */
import React, {Component} from 'react'

export default class AllLists extends Component{
    render(){
        console.log(this.props)
        return(
            <ul className="AllLists">

                {
                    this.props.AllLists.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a style={{'backgroundImage':'url('+item.url+')'}}></a>
                                <p>{item.introduce}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}