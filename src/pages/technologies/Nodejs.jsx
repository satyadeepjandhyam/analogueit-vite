import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Nodejs() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>              
                        NODE JS (EXPRESS JS) and its usage!
                        </h1>
                        <p>Node js is an open-source, cross-platform run time environment that develops web applications that run across different platform.node.js is built on Google Chrome's V8 JavaScript engine. It is used for server-side programming and deployed for non-blocking, event-driven servers, such as traditional websites and back-end API services. And node js is not a framework or library as conventional application software, but it's a run time environment</p>
                          </div>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>Pre rendering in Next.js!</h1>
        <p>The JavaScript engine parses that code, making it flexible and easy to handle and making the errorless application. The fact that node js is open-source means it is free to use and the global community of developers constantly working on it. Node js is a Javascript runtime environment and can run on various platforms such as Windows, Linux, Unix, Mac OS X, etc.) Express Js is a web application framework for node js. It is open-source software under the MIT licence.</p>
       </div>
       <div className="container">
        <h1>Where to use Node Js</h1>
        <p>Here are some areas where node js seems to be a perfect technology partner, and those are</p>
       <ul>
        <li>
        Single page application
        </li>
        <li>
        Data streaming application
        </li>
        <li>Data-intensive real-time applications</li>
        <li>APIs based application</li>
       </ul>
       <p>Node Js is software development technology used by every business, big or small, starting from a small business. Like Netflix also uses node Js to build high-quality applications. Not only this, there are many such big names such as Amazon, Netflix, eBay, Reddit, and Paypal. All are using it to develop their application because it's flexible, simple, easy, and powerful. With node Js, the development of applications becomes easy, so everyone adopts node Js. It may be not suitable for every project, but most businesses are adopting this for any project.</p>
       </div>
       <div className="container">
        <h1>Features of the Node Js</h1>
        <h2>Very Fast</h2>
        <p>Node node.js is built on Google Chrome's V8 JavaScript Engine, so it is considered fast software, and the Node.js library is also very fast in code execution. It constantly works without creating any problem.</p>
       </div>
       <div className="container">
        <h2>License</h2>
        <p>Node js came under MIT licence, which makes it uses confidant and with the licence node js (express js) gave different service to different big companies.

</p>
       </div>
       <div className="container">
        <h2>Highly scalable</h2>
        <p>Node js use a Single-threaded model with looping, but it's highly scalable; node js helps build your server with a non-blocking base. Node jr is used primarily for traditional server development, and node jr used limited treaded for handling requests.</p>

       </div>
       <div className="container">
        <h2>No Buffering</h2>
        <p>Node js applications are never buffered any data. Node js give service on single-threaded, so it's simply high scalable and with non-blocking based cushioning is not there with node js server. While working with Node Js, programmers learn advanced and essential.</p>
       </div>
       <div className="container">
        <h2>Real-time chats</h2>
        <p>Node. Js used across social media apps and commercial sites because node. Js gave all essential functions for building real-time chats, such as the live transformation of text, video and audio messages from one sender to another sender. And now many node js(express js) company are there who provide such service to the person who wants, and node js is helpful on instant messaging and other real-time applications.</p>
       </div>
       <div className="container">
        <h2>Conclusion</h2>
        <p>Node js (express js) is a server-side platform written under JavaScript, created in 2009 by Ryan Dahl. And Node.js is used single-threaded processing. For traditional website development. And node. Js is powerful and flexible and used for full-stack, front-end and back-end development and simplifies real-time communication between server and client. And now node. Js is also adopted by many big market players such as Netflix, PayPal, and Amazon to develop their applications. And for that, there are node. Js company who are giving this services to big companies</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Nodejs
