/**
 * Created by zhaochenchen on 2017/3/2.
 */
import React,{Component} from 'react'
import BannerList from './../containers/BannerList'
import Recommend from './Recommend'
import PlayLists from './../containers/PlayLists'
import NewAlbums from './../containers/NewAlbums'

export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <BannerList/>
                <Recommend/>
                <PlayLists/>
                <NewAlbums/>
            </div>
        )
    }
}