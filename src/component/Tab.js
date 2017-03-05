/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React,{Component} from 'react'
import NavLink from './NavLink'

// export default class Tab extends Component{
//     render(){
//         console.log(this.props)
//         const {style,onClick}=this.props
//         return(
//             <div>
//                 <ul className="tab">
//                     <li>
//                         <NavLink onClick={onClick.bind(this,'recommend')} to="/FindMusic/Recommend" onlyActiveOnIndex={true}>个性推荐</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={onClick.bind(this,'list')} to="/FindMusic/List">歌单</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={onClick.bind(this,'radio')} to="/FindMusic/Radio">主播电台</NavLink>
//                     </li>
//                     <li>
//                         <NavLink onClick={onClick.bind(this,'ranking')} to="/FindMusic/Ranking">排行榜</NavLink>
//                     </li>
//                     <div style={style}><span></span></div>
//                 </ul>
//             </div>
//         )
//     }
// }
const Tab=({style,onClick})=>{
    return(
        <div>
            <ul className="tab">
                <li>
                    <NavLink onClick={onClick.bind(this,'recommend')} to="/FindMusic/Recommend" onlyActiveOnIndex={true}>个性推荐</NavLink>
                </li>
                <li>
                    <NavLink onClick={onClick.bind(this,'list')} to="/FindMusic/List">歌单</NavLink>
                </li>
                <li>
                    <NavLink onClick={onClick.bind(this,'radio')} to="/FindMusic/Radio">主播电台</NavLink>
                </li>
                <li>
                    <NavLink onClick={onClick.bind(this,'ranking')} to="/FindMusic/Ranking">排行榜</NavLink>
                </li>
                <div style={style.outer}><span style={style.inner}></span></div>
            </ul>
        </div>
    )
}
export default Tab