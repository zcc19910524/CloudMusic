/**
 * Created by zhaochenchen on 2017/3/2.
 */
import {connect} from 'react-redux'
import NewAlbum from './../component/NewAlbum'
const mapStateToProps=(state)=>{
    return state.NewAlbums
}

const NewAlbums=connect(
    mapStateToProps
)(NewAlbum)

export default NewAlbums