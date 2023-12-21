import React, { useState } from 'react'
import "../../../css/desktopcarsole.css"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation,EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-fade'


import { IoArrowForwardCircleSharp,IoArrowBackCircleSharp } from "react-icons/io5";


import desktopImg0 from "../../../assets/desktopApps/w-0.png";
import desktopImg1 from "../../../assets/desktopApps/w-1.png";
import desktopImg2 from "../../../assets/desktopApps/w-2.png";
import desktopImg3 from "../../../assets/desktopApps/w-2.png";
import desktopImg4 from "../../../assets/desktopApps/w-4.png";
import desktopImg5 from "../../../assets/desktopApps/w-5.png";
import desktopImg6 from "../../../assets/desktopApps/w-6.png";
import desktopImg7 from "../../../assets/desktopApps/w-7.png";
import desktopImg8 from "../../../assets/desktopApps/w-8.png";
import desktopImg9 from "../../../assets/desktopApps/w-9.png";
import desktopImg10 from "../../../assets/desktopApps/w-10.png";
import desktopImg11 from "../../../assets/desktopApps/w-11.png";


function Desktopcarsole() {
    const [items, setItems] = useState(
        [
            {
                image: desktopImg0
            },
            {
                image: desktopImg1
            },
            {
                image: desktopImg2
            },
            {
                image: desktopImg3
            },
            {
                image: desktopImg4
            },
            {
                image: desktopImg5
            },
            {
                image: desktopImg6
            },
            {
                image: desktopImg7
            },
            {
                image: desktopImg8
            },
            {
                image: desktopImg9
            },
            {
                image: desktopImg10
            },
            {
                image: desktopImg11
            },

        ]
    );


    const getClassForCarosel = (index) => {
        if (index == current || index === current - 1 || index === current + 1 && index != 0) {
            return "caroselSlide";
        }
        else if(index== current+2 || index== current-2){
            return "caroselSlide";
        }
        else return "carosel-slide-none";
    }
    const [current, setCurrent] = useState(Math.ceil(items.length / 2));


    const nextSlide = () => {
        setCurrent(current === items.length - 1 ? Math.ceil(items.length / 2) : current + 1)

    }
    const prevSlide = () => {
        setCurrent(current === 0 ? items.length - 1 : current - 1)
    }

    return (
        <>
            <div className="desktop-carsole">
                <div className="carsole-head m-0 w-100  d-flex flex-column align-items-center justify-content-center">
                    <h1>Our Web Applications</h1>
                    <p>We are ready to help with these services</p>

                </div>
                <div className="carosel-desktop-body m-0 p-0">
                   <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    // grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: ['-125%', 0, -800],
                          rotate: [0, 0, -90],
                        },
                        next: {
                          shadow: true,
                          translate: ['125%', 0, -800],
                          rotate: [0, 0, 90],
                        },
                      }}
                      loop={true}
                    modules={[Pagination,EffectCreative]}
                    className="carosel-mobile-swiper"
                   >
                   {items.map((item, index) => {
                            //    return <div className='caroselSlide'>{ index == current ? <div key={index} className="caroseldiv"><img src={item.image} alt="caroselImg" /></div> : "" }</div>
                            return <SwiperSlide className='carosel-mobile-slide'><img className={current == index ? "desktop-carosel-active-image" : "desktop-carosel-image"} src={item.image} alt="caroselImg" /></SwiperSlide>
                        })}
                   </Swiper>
                    {/* <div className="carosel-container-desktop">
                        {items.map((item, index) => {
                            //    return <div className='caroselSlide'>{ index == current ? <div key={index} className="caroseldiv"><img src={item.image} alt="caroselImg" /></div> : "" }</div>
                            return <div key={index} className={getClassForCarosel(index)}><img className={current == index ? "desktop-carosel-active-image" : "desktop-carosel-image"} src={item.image} alt="caroselImg" /></div>
                        })}
                    </div> */}
                    

                </div>
            </div>
            {/* <div className="desktop-carsole d-flex flex-column align-items-center justify-content-center">
                <div className="carsole-head m-0 w-100  d-flex flex-column align-items-center justify-content-center">
                    <h1>Our desktop Apps</h1>
                    <p>We are ready to help with these services</p>
                </div>
                
                <div className="carosel-body m-0 p-0">
                <IoArrowBackCircleSharp onClick={nextSlide} className='arrow-back'/>
                        <div className="carosel-container-desktop">
                        {items.map((item, index) => {
                        //    return <div className='caroselSlide'>{ index == current ? <div key={index} className="caroseldiv"><img src={item.image} alt="caroselImg" /></div> : "" }</div>
                        return <div key={index} className={getClassForCarosel(index)}><img className={current == index ? "desktop-carosel-active-image" : "desktop-carosel-image"} src={item.image} alt="caroselImg" /></div>
                    })}
                        </div>
                        <IoArrowForwardCircleSharp onClick={prevSlide} className='arrow-frount'/>

                </div> */}
                {/* <Swiper
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
                          return    <SwiperSlide >
                          <img src={item.image} />
                        </SwiperSlide>     
                        }
                       )}

        
      </Swiper> */}
            {/* </div> */}
        </>
    )
}

export default Desktopcarsole
