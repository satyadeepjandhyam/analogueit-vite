import React from 'react'
import Nav from '../components/navbar/nav'
import abtUsBackground from '../assets/New folder/hero-bg.jpg'
import blueLogo from '../assets/Analogue IT Solutions Logo.png'

import aboutImg from '../assets/New folder/image 47.png'
import { bannerImages } from '../data/data'
import { useInView } from 'react-intersection-observer';
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'
//css imports
// import "../css/style.css"
import "../css/about.css"
// swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function About() {
    const { ref: aboutHeadding, inView: isAboutHeaddingRevealed } = useInView();
    return (
        <>
            <Nav />
            <section ref={aboutHeadding} className="about">
                <div className={isAboutHeaddingRevealed ? "about_headding" : ""} >

                    <h1>About</h1> <img src={blueLogo} alt="blueLogo" />

                </div>
                <div className="aboutbody">
                    <img className={isAboutHeaddingRevealed ? "img1" : ""} src={aboutImg} alt="aboutImg" />
                    <div className={isAboutHeaddingRevealed ? "aboucontent" : ""}>
                        <h1>What We Do?</h1>
                        <p>Analogue IT solutions is an exceptional Web Development Service Provider company in Hyderabad. We provide Web Designing Services, Mobile Application Development Services, and Digital Marketing services in Hyderabad. We keep up the promise and according to which we provide the best software quality assurance with a great maintenance support team.</p>
                        <p>Analogue IT solutions provide creative and dynamic Services of Web Development and Digital Marketing. We have gained rich expertise in building business-critical mobile and web products. We make complex art of Web development in a very simple, efficient and attractive manner.
                        </p>
                    </div>
                </div>
            </section>
            <section className='container skills '>
                <div className=" container skill-head flex-column d-flex align-items-center justify-content-center">
                    <h1 className='text-white'>Our Skills</h1>
                    <p className='w-50 text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsam dolores voluptates eligendi ex qui consectetur! Magni, consequatur incidunt. Quaerat, fugit voluptatibus. Optio ab perferendis error alias obcaecati, natus odit!</p>
                </div>
                <div className="skill-body">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {bannerImages.map((items, i) => {
                            return <SwiperSlide className='swiperSlide' key={i} >
                                <img  src={items.image} alt="swaperImages" />
                                <h3>{items.imgName}</h3>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </section>
            <Contact />

            <Footer />

        </>
    )
}

export default About
