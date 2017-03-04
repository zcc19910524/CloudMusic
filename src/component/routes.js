/**
 * Created by zhaochenchen on 2017/2/27.
 */
import React,{Component} from 'react'
import Nav from './Nav'
import Home from './Home'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Nav}>
                    <IndexRoute to="/" component={Home}/>
                    <Route to="/myMusic"/>
                </Route>
            </Router>
        )
    }
}
export default Routes