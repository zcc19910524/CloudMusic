/**
 * Created by zhaochenchen on 2017/3/2.
 */
import {connect} from 'react-redux'
import Banner from './../component/Banner'

const mapStateToProps=(state,ownProps)=>{
    return state.Banners
}

const BannerList=connect(
    mapStateToProps,
)(Banner)
export default BannerList