/**
 * Created by zhaochenchen on 2017/3/5.
 */
import {connect} from 'react-redux'
import AllList from '../component/AllList'

const mapStateToProps=(state)=>{
    return state.AllLists
}

const AllLists=connect(
    mapStateToProps
)(AllList)
export default AllLists