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
import Radio from './Radio'
import Ranking from './Ranking'
import ListDetail from './ListDetail'
import Playing from './../containers/Playings'
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
                        <Route path="/FindMusic/Radio" component={Radio}/>
                        <Route path="/FindMusic/Ranking" component={Ranking}/>
                    </Route>
                    <Route path="/MyMusic" component={MyMusic}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/Mine" component={Mine}/>
                    <Route path="/listDetail/:id" component={ListDetail}/>
                </Route>
                <Route path="/playing/:songId" component={Playing}/>
            </Router>
        )
    }
}
export default Routes