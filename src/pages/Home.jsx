import React from 'react'
import Nav from '../components/navbar/nav'
import bannerImg1 from '../assets/New folder/Mask group.png'
import logo1 from '../assets/logo_our1.png'
import Frame from '../assets/New folder/Frame 140.png'
import aboutImg from '../assets/New folder/image 47.png'
import blueLogo from '../assets/Analogue IT Solutions Logo.png'
import servicesBackGroundImg from '../assets/New folder/background_11 1.png'
import img1 from'../assets/New folder/service1.png'
import abtUsBackground from '../assets/New folder/hero-bg.jpg'
import projectImg from '../assets/New folder/2.png'
import awardImg from '../assets/New folder/image 63.png'
import award1 from '../assets/New folder/image 50.png'
import testi1 from '../assets/aiSandeepthi.jpeg'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'
import { useEffect,useState,useRef} from 'react'
import { useInView } from 'react-intersection-observer';
import AboutCarsoule from '../components/carsoule/aboutcarsole/aboutCarsoule'
// import Mobilecarsole from '../components/carsoule/mobilecarsole/mobilecarsole'
import Desktopcarsole from '../components/carsoule/desktopcarsole/desktopcarsole'
import { bannerImages } from '../data/data'
import Mobilecarsole from '../components/carsoule/mobilecarsole/mobilecarsole'
import "bootstrap/dist/css/bootstrap.css"
import "@fontsource/jost";
function Home() {
   const [revealUpToDown,setRevealUpToDown]=useState({
    "background-color" : "red"
   });
  const [cardstyle,setcards]=useState("card")
   const { ref: aboutHeadding, inView: isAboutHeaddingRevealed} = useInView();
   const { ref: services, inView: isServiceRevealed} = useInView();
   const getAppropriateCardStyle=(index)=>{
        if(index===0 || index===3 || index===6 || index===9 ){
            return "card-transform-left-to-right"
        }
        else if(index===2 || index===5 || index===8 || index===11 ){
            return "card-transform-right-to-left"
        }
        else if(index===1){
            return "card-transform-up-to-down"
        }
        else if(index===10){
            return "card-transform-down-to-up"
        }
        else if(index===4 ||index===7){
            return "card-transform-scale"
        }
   }

    const testimonialItems = [
        {
            image: testi1,
            userName: "Harish", 
            role: "deddimaag",
            coments: "Highly professional, dedicated, motivated tream!"
        },
        {
            image: testi1,
            userName: "Chandrika", 
            role: "Enterpenure",
            coments: "Effective Service. Seameless process from start to finish of  website design. Would recommend"
        },
        {
            image:testi1,
            userName: "Sandeepthi", 
            role: "Eudermiz",
            coments: "i thought building a website would be difficult. Not at all.the web sergery made the process  simple, understandable and effective. "
        },
        {
            image: testi1,
            userName: "Rakesh",
            role: "virtual jobs",
            coments: "you people are very crazy about to build applications with user requirements, Thanks a lot team, god bless you guyes "
        },

    ];
    // const bannerImages=[
    //     {
    //         image:require("../assets/animation/ajax.png")
    //     },
    //     {
    //         image:require("../assets/animation/android.png")
    //     },
    //     {
    //         image:require("../assets/animation/angular.png")
    //     },
    //     {
    //         image:require("../assets/animation/bootstrap.png")
    //     },
    //     {
    //         image:require("../assets/animation/css.png")
    //     },
    //     {
    //         image:require("../assets/animation/expressjs.png")
    //     },
    //     {
    //         image:require("../assets/animation/flutter.png")
    //     },
    //     {
    //         image:require("../assets/animation/html.png")
    //     },
    //     {
    //         image:require("../assets/animation/ionic.png")
    //     },
    //     {
    //         image:require("../assets/animation/ios.png")
    //     },
    //     {
    //         image:require("../assets/animation/javascript.png")
    //     },
    //     {
    //         image:require("../assets/animation/json.png")
    //     },
    //     {
    //         image:require("../assets/animation/kotlin.png")
    //     },
    //     {
    //         image:require("../assets/animation/mongodb.png")
    //     },
    //     {
    //         image:require("../assets/animation/mysql.png")
    //     },
    //     {
    //         image:require("../assets/animation/nodejs.png")
    //     },
    //     {
    //         image:require("../assets/animation/php.png")
    //     },
    //     {
    //         image:require("../assets/animation/python.png")
    //     },
    //     {
    //         image:require("../assets/animation/react.png")
    //     },
    //     {
    //         image:require("../assets/animation/reactnative.png")
    //     },
    //     {
    //         image:require("../assets/animation/sqlite.png")
    //     },
    //     {
    //         image:require("../assets/animation/tailwindcss.png")
    //     },
    //     {
    //         image:require("../assets/animation/vue.png")
    //     }
        

    // ];
    const serviceItems=[
        {
            image:img1,
            headding:"UI/UX Development",
            content:"We create sleek and elegantly appealing UI/UX designs that increase user interaction with applications."
        },
        {
            image:img1,
            headding:"web Development",
            content:"We create sleek and elegantly appealing UI/UX designs that increase user interaction with applications."
        },
        {
            image:img1,
            headding:"Mobile Development",
            content:"We create sleek and elegantly appealing UI/UX designs that increase user interaction with applications."
        },
        {
            image:img1,
            headding:"Digital Development",
            content:"We create sleek and elegantly appealing UI/UX designs that increase user interaction with applications."
        },
        {
            image:img1,
            headding:"Tech support",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"It staffing and recruitment",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"out Sourcing",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"It consulting",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"Cloud services",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"AI",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        {
            image:img1,
            headding:"ML",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },{
            image:img1,
            headding:"IOT",
            content:"We are one of the top digital marketing companies in India as we converge on the business growth of our clients"
        },
        
        
    ];

    return (
        <>
        <Nav/>
        <section className="banner p-0 container-fluid  m-0 ">
            <img className='b_img  p-0  m-0' src={bannerImg1} alt="bannerImg1" />
           <div className="banner-container">
               <div className="baner-sub-container">
               <h1 className='banner_welcome bold font-weight-bold'>WELCOME TO</h1>
                <img className='banner_logo' src={logo1} alt="logo" />
               </div>
                <button className='banner_btn'>KNOW MORE</button>
                <div className="exp">
                    <img className='banner_frame' src={Frame} alt="logo" />
                    
                </div>
                <div className='animation_page'>
            <div className="animationDiv">
                    {bannerImages.map((items,i)=>{return <img src={items.image} key={i} alt="htmlpng" />})}
                </div>
           </div>
           </div>
            
        </section>
            <section ref={aboutHeadding} className="about p-0 m-0">
                <div className={isAboutHeaddingRevealed? "about_headding":""} >

                    <h1>About</h1> <img  src={blueLogo} alt="blueLogo" />

                </div>
                <div className="aboutbody ">
                    <img className={isAboutHeaddingRevealed? "img1 ":""} src={aboutImg} alt="aboutImg" />
                    <div className={isAboutHeaddingRevealed? "aboucontent  ":""}>
                        <h1>What We Do?</h1>
                        <p>Analogue IT solutions is an exceptional Web Development Service Provider company in Hyderabad. We provide Web Designing Services, Mobile Application Development Services, and Digital Marketing services in Hyderabad. We keep up the promise and according to which we provide the best software quality assurance with a great maintenance support team.</p>
                        <p>Analogue IT solutions provide creative and dynamic Services of Web Development and Digital Marketing. We have gained rich expertise in building business-critical mobile and web products. We make complex art of Web development in a very simple, efficient and attractive manner.
                        </p>
                    </div>
                </div>
            </section>
            <section ref={services} className="services  container-fluid   p-0 mt-5 mb-5">
                <img src={servicesBackGroundImg} alt="" className="servicesBackground col-12 p-0 m-0 position-absolute " />
                <div className="cards container-fluid position-relative d-flex flex-column align-items-center justify-content-center">
                    <div className="p-4 m-5 text-white"><h1>Our servies</h1></div>
                    <div className="cardsBody container-fluid align-items-center justify-content-center row column-gap-5 row-gap-5">
                       {serviceItems.map((items,i)=>{
                            return  <div key={i} className={isServiceRevealed? getAppropriateCardStyle(i):"card"}>
                            <div className="cardHeadding "><a className='nav-link text-white d-flex align-items-center justify-content-center ' href="#">{items.headding}</a></div>
                            <div className="cardBody d-flex flex-column align-items-center justify-content-center h-75 row-gap-3">
                                <img src={items.image} alt="" />
                                <h1 className="text-center ">{items.headding}</h1>
                                <p className="text-center ">{items.content}</p>
                            </div>
                        </div>
                       })}
                    </div>
                </div>
            </section>
            {/* <AboutCarsoule/> */}
            <section className="projectSection ">
                <img src={abtUsBackground} alt="" className="project-section-backGround" />
                <div className="full_section ">
                    <div className="headsection">
                    <h1>Over 150+ projects completed</h1>
                    <p>With 99% on time project complition, agile project management methodology</p>
                    </div>
                    <div className="projectcard ">
                        <img src={projectImg} alt="projectimg" />
                        <div className="projectCardBody ">
                            <h1>Web Design</h1>
                            <h3>This is an example of prtfolio detail</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique eos consequatur error corporis temporibus dolorem magnam earum beatae, veritatis sint, assumenda dolores aliquam cumque illo neque molestias suscipit ab.</p>
                            <button className='project_btn'>View more</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Mobilecarsole/>
            <Desktopcarsole/> */}
            {/* <section className="awards">
                <img src={awardImg} alt="awardImg" className="aboutBackGround" />
                <div className="awardDiv">
                    <div className="awardivHead">
                        <img src={blueLogo} alt="blueLogo" />
                        <h4>We are reviewed on</h4>
                    </div>
                    <div className="awardBody">
                        <div className="awardleft">
                            <h1>Skip The Big Proises. Hire The Best Developers Backed By Developers Backed By Accolades.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores pariatur aliquid. Minus, odio? Eligendi repellendus, doloribus nesciunt nobis iusto molestiae fugiat est impedit nisi voluptatibus. Eos cupiditate iusto optio!</p>
                        </div>
                        <div className="awardright">
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        <div className="awardsdiv">
                            <div className='imgBack' ><img src={award1} alt="" /></div>
                            <p>clutch</p>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="testimonials ">
                <div className="testimonialHead">
                    <h1>Testimonials</h1>
                    <p>Good work Team, we'll connect again</p>
                </div>
                <div className="testimonialCards">
                    {testimonialItems.map(
                        (items,i)=>{
                                return  <div key={i} className="testimonialCard">
                                <div className="tcHead"><img src={items.image} alt="testi1" />
                                <h1>{items.userName}</h1>
                                </div>
                                <div className="testBody">
                                        <p>{items.role}</p>
                                        <p>{items.coments}</p>
                                </div>
        
                            </div>
                    }
                    )}

                </div>
            </section> */}
           <Contact/>
           {/* <section className="footer_section">
                 <Footer/>
           </section> */}
        </>
    )
}

export default Home
