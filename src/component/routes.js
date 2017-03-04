/**
 * Created by zhaochenchen on 2017/2/27.
 */
import React,{Component} from 'react'
import Nav from './Nav'
import Home from './Home'
import MyMusic from './MyMusic'
import Friends from './Friends'
import Mine from './Mine'
import Content from './Content'
import List from './Lists'
import {Router,Route,browserHistory,IndexRoute,IndexRedirect} from 'react-router'

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Nav}>
                    <IndexRedirect to="/FindMusic/Recommend"/>
                    <Route path="/FindMusic" component={Home}>
                        <Route path="/FindMusic/Recommend" component={Content}/>
                        <Route path="/FindMusic/List" component={List}/>
                    </Route>
                    <Route path="/MyMusic" component={MyMusic}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/Mine" component={Mine}/>
                </Route>
            </Router>
        )
    }
}
export default Routes