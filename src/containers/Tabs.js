/**
 * Created by zhaochenchen on 2017/3/5.
 */
import {connect} from 'react-redux'
import Tab from './../component/Tab'

const mapStateToProps=(state)=>({
    style:state.Tabs.style
})

const mapDispatchToProps=(dispatch)=>({
    onClick:(type)=>{
        dispatch({type:type})
    }
})

const Tabs=connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)
export default Tabs