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
                    <div className="swiper-slide">slide1</div>
                    <div className="swiper-slide">slide2</div>
                    <div className="swiper-slide">slide3</div>
                </div>
            </div>
        )
    }
}