/**
 * Created by zhaochenchen on 2017/3/8.
 */
import ListInfo from './../component/ListInfo'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>{
    return state.ListInfos
}

const ListInfos=connect(
    mapStateToProps
)(ListInfo)
export default  ListInfos
