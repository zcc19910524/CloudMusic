/**
 * Created by zhaochenchen on 2017/3/7.
 */
import {connect} from 'react-redux'

import MyList from './../component/MyLists'

const mapStateToProps=(state)=>{
    return state.MyLists
}

const MyLists=connect(
    mapStateToProps
)(MyList)
export default MyLists