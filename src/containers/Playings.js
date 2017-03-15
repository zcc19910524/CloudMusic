/**
 * Created by zhaochenchen on 2017/3/15.
 */
import {connect} from 'react-redux'
import Playing from '../component/Playing'

const mapStateToProps=(state)=>{
    return state.Playing
}

const Playings=connect(
    mapStateToProps
)(Playing)
export default Playings