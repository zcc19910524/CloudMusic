/**
 * Created by zhaochenchen on 2017/2/27.
 */
import React,{Component} from 'react'
import Nav from './Nav'
import {Router,Route,browserHistory,IndexRouter} from 'react-router'

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Nav}/>
            </Router>
        )
    }
}
export default Routes