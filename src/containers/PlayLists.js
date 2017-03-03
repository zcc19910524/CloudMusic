/**
 * Created by zhaochenchen on 2017/3/2.
 */
import {connect} from 'react-redux'
import PlayList from './../component/PlayList'
const mapStateToProps=(state)=>{
    return state.PlayLists
}

const PlayLists=connect(
    mapStateToProps
)(PlayList)

export default PlayLists