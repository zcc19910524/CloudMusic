/**
 * Created by zhaochenchen on 2017/3/2.
 */
import {combineReducers} from 'redux'
import Banners from './Banners'
import PlayLists from './PlayLists'
import NewAlbums from './NewAlbums'
import Tabs from './Tabs'
import AllLists from './AllLists'
import MyLists from './MyLists'

const reducers=combineReducers({
    Banners,
    PlayLists,
    NewAlbums,
    Tabs,
    AllLists,
    MyLists
})

export default reducers