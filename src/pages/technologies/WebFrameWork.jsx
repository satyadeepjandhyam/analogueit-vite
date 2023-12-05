import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function WebFrameWork() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        The most important tools of the Web framework
                        </h1>
                        <p>On average, in a single day, almost 20 kinds of software are getting introduced on the internet. Different types of a web framework are present over windows which helps to run specific special applications. Every person wants the software that has the best features and can do tons of customizations. The most important thing is that people wish to use cheap software and have every essential component. This is the main reason that why the PHP (coordinator, laravel) services are used in very high numbers.</p>
                          </div>
                </div>
               
            </div>
       </div>
       <div className="container">
        <h1>What is the use of a coordinator?</h1>
        <p>The most important thing is web designers very much use PHP coordinators throughout the world. The reason behind this is, every web developer use this kind of software is that helps to make the website and web page very much advanced. The main reason is web designers, and web developers use this application is that it makes the user interface significantly advanced. The coordinator is elementary; many people love to visit the website and web applications with an advanced user interface. This software not only develops the user interface but also make it very much user friendly. Many people find the web page and application easier to use the more they will use the site or visit it.</p>
       </div>
       <div className="container">
        <h1>How laravel is taking the lead </h1>
        <p>Taking specific about the present market condition, then coordinator sold in the least number. The main reason behind that is the lack of many essential features that most other software offers to their users. Even the application developers of the coordinator cannot add some of the most necessary features that the rivals are having at a significantly lower price. In this case, the best alternative which the users have is laravel. PHP (coordinator, laravel) companies are the best web frameworks you can get on the internet. According to the current technological changes, most users prefer software with the latest amount of features.</p>
        <p>Laravel is one of the best software in framework designing and the most downloaded software in the current generation. The main reason behind this file's highest amount of downloads is that it has an enormous amount of features. These features are beneficial for web developers for a web page or any web application. People get attracted to the web page or the web application with the best features, so having larvae is very helpful for the web developers throughout the time. PHP (coordinator, laravel) companies are very much focused on delivering tools with tons of features, which helps the web developers and even the users get a speedy amount of features with an enormous amount of user-friendly interface.</p>

       </div>
       <div className="container">
        <h1>Conclusion</h1>
        <p>PHP (coordinator, laravel) services are in the current trend. The users are demanding the software's with the best features to get a user-friendly interface at a fair price—the best application at an affordable rate which will help in work.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default WebFrameWork
