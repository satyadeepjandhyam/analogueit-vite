import React, { useState } from 'react'
import "../../../css/mobilecarsole.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { IoArrowForwardCircleSharp, IoArrowBackCircleSharp } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import mobileImg1 from "../../../assets/mobileApps/01copy.png"
import mobileImg2 from "../../../assets/mobileApps/02copy.png"
import mobileImg3 from "../../../assets/mobileApps/03copy.png"
import mobileImg4 from "../../../assets/mobileApps/04copy.png"
import mobileImg5 from "../../../assets/mobileApps/05copy.png"
import mobileImg6 from "../../../assets/mobileApps/06copy.png"
import mobileImg7 from "../../../assets/mobileApps/07copy.png"
import mobileImg8 from "../../../assets/mobileApps/08copy.png"
import mobileImg9 from "../../../assets/mobileApps/09copy.png"
import mobileImg10 from "../../../assets/mobileApps/10copy.png"
import mobileImg11 from "../../../assets/mobileApps/11copy.png"
import mobileImg12 from "../../../assets/mobileApps/12copy.png"
import mobileImg13 from "../../../assets/mobileApps/13copy.png"
import mobileImg14 from "../../../assets/mobileApps/14copy.png"
import mobileImg15 from "../../../assets/mobileApps/15copy.png"
import mobileImg16 from "../../../assets/mobileApps/16copy.png"
import mobileImg17 from "../../../assets/mobileApps/17copy.png"

function Mobilecarsole() {
    const [items, setItems] = useState([
        {
            image: mobileImg1,
            active: false
        },
        {
            image: mobileImg2,
            active: false
        },
        {
            image: mobileImg3,
            active: false
        },
        {
            image: mobileImg4,
            active: false
        },
        {
            image: mobileImg5,
            active: true
        },
        {
            image: mobileImg6,
            active: false
        },
        {
            image: mobileImg7,
            active: false
        },
        {
            image: mobileImg8,
            active: false
        },
        {
            image: mobileImg9,
            active: false
        },
        {
            image: mobileImg10,
            active: false
        },
        {
            image: mobileImg11,
            active: false
        },
        {
            image: mobileImg12,
            active: false
        },
        {
            image: mobileImg13,
            active: false
        },
        {
            image: mobileImg14,
            active: false
        },
        {
            image: mobileImg15,
            active: false
        },
        {
            image: mobileImg16,
            active: false
        },
        {
            image: mobileImg17,
            active: false
        },


    ]);

    const getCaroselImageCss = (index) => {
        if (index === current) {
            return "carosel-active-image"
        } else if (index === current - 1 || index === current + 1) {
            return "carosel-image"
        } else {
            return "carosel-image-two"
        }
    }

    const getClassForCarosel = (index) => {
        if (index === current || index === current - 1 || index === current + 1 && index != 0) {
            return "caroselSlide";
        }
        else if ((index === current + 2) || (index === current - 2)) {
            return "caroselSlide-two";
        }
        else return "carosel-slide-none";
    }
    const [current, setCurrent] = useState(Math.ceil(items.length / 2));


    const nextSlide = () => {
        setCurrent(current === items.length - 3 ? Math.ceil(items.length / 2) : current + 1)

    }
    const prevSlide = () => {
        setCurrent(current === 3 ? items.length - 3 : current - 1)
    }




    const carsoleTransformStyle = {
        transform: `translate3d(-${1 * 100}%)`
    }
    return (
        <>
            <section className="mobilecarsole ">
                <div className="carsole-head w-100 d-flex flex-column gap-0 align-items-center justify-content-center">
                    <h1>Our Mobile Apps</h1>
                    <p>We are ready to help with these services</p>
                </div>
                {/* <IoArrowBackCircleSharp onClick={nextSlide} className='arrow-back'/>
         <IoArrowForwardCircleSharp onClick={prevSlide} className='arrow-frount'/> */}
                <div className="carosel-body">
                    <IoArrowBackCircleSharp onClick={nextSlide} className='arrow-back' />

                    <div className="carosel-container">
                        {items.map((item, index) => {
                            //    return <div className='caroselSlide'>{ index == current ? <div key={index} className="caroseldiv"><img src={item.image} alt="caroselImg" /></div> : "" }</div>
                            return <div key={index} className={getClassForCarosel(index)}><img className={getCaroselImageCss(index)} src={item.image} alt="caroselImg" /></div>
                        })}
                    </div>
                    <IoArrowForwardCircleSharp onClick={prevSlide} className='arrow-frount' />

                </div>

            </section>
            {/* <div className="mobilecarsole">
        <div className="carsole-head">
                <h1>Our Mobile Apps</h1>
                <p>We are ready to help with these services</p>
            </div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
          fadeEffect:true,
          
        }}
       loop={true}
       navigation={true}
      
       pagination={{
         clickable: true,
       }}

        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
         {items.map(
                        (item,i)=>{
                          return    <SwiperSlide key={`mobile${i}`} >
                          <img src={item.image} />
                        </SwiperSlide>     
                        }
                       )}

        
      </Swiper>
        </div> */}
            {/* <div className="mobilecarsole">
            <div className="carsole-head">
                <h1>Our Mobile Apps</h1>
                <p>We are ready to help with these services</p>
            </div>
            <div className="carsole-body">
                <div className="slider-div">
                    <div className="img-div">
                    {items.map(
                        (item,i)=>{
                         
                            return <img key={i} className='img'  src={item.image} alt="slideImg" style={{ transform:`translatex(-${ (3) * 170}px)`}} />
                                         
                        }
                       )}
                    </div>
                       
                </div>

            </div>
        </div> */}


        </>
    )
}

export default Mobilecarsole
