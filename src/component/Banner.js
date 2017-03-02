/**
 * Created by zhaochenchen on 2017/3/1.
 */
import React ,{Component} from 'react'
export default class Banner extends Component{
    componentDidMount(){
        const mySwiper=new Swiper('.swiper-container',{
            direction:'horizontal',
            loop:true,
            autoplay:3000
        })
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.banners.map((item,index)=>{
                            return(
                                <div className="swiper-slide" key={index}>
                                    <a style={{'backgroundImage':'url('+item.url+')'}}></a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}