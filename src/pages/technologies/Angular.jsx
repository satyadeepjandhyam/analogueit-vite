import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Angular() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
                <div className="container">
                    <div className="row">
                        <div className='col-4'><img className='img-fluid' src={img1} alt="img" /></div>
                        <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                            <h1>
                            ANGULAR APPS DEVELOPMENT
                            </h1>
                            <p>
                            Anlogue IT corporate Angular developers have had the knowledge and experience needed to help clients produce mission-critical apps quickly.   
                            </p>
                            <p>
                            Being a notable Angular technology company in India, the United States, the United Kingdom, Australia, Canada, and the United Arab Emirates (UAE) by truly understanding the full stack of JavaScript technology solutions and providing dependable Angular development services, and building unparalleled apps for small, medium, and large-scale businesses. Angular is a single-page app development framework and platform for constructing efficient and powerful apps. It's one method of creating apps] and then reusing the code and skills to create apps for any distribution destination.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <p>
                        Anlogue IT offers web applications, native mobile, as well as native desktop apps for all sorts of industries. Currently, to achieve the highest potential speed on the Web Platform and go even faster with Web Workers & server-side rendering, you need expert professionals by your side. You can have control over scalability with Angular. Develop data models using RxJS, Immutable.js, or the other push model to meet large data demands.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
            <div className="container">
            <p>
                        As their most trustworthy angular JS solution provider, we have significantly revolutionized a number of enterprises. Our experienced offshore angular developer team has supplied them with the most engaging bespoke Angularjs software development services for their companies
                        </p>
            </div>
            <div className="container">
                <h1>Angularjs development services we offer:-</h1>
                <div className="col-12">
                <h3>
                Custom AngularJS Development
                </h3>
                <p>End-to-end creation of AngularJS apps that are strong, scalable, UI rich, and mobile-friendly, according to client project criteria.</p>
                
                </div>
                <div className="col-12">
                    <h3>AngularJS API Development</h3>
                    <p>We created APIs to reduce the number of redundant processes and increase efficiency.</p>
                </div>
                <div className="col-12">
                    <h3>AngularJS Maintenance and Support</h3>
                    <p>We provide cost-effective post-launch maintenance, as well as monthly quality inspections to address defects and development difficulties.</p>
                </div>
                <div className="col-12">
                    <h3>AngularJS Application Development</h3>
                    <p>Hire a professional AngularJS developer to create effective and user-friendly apps that are fast, elegant, and current.</p>    
                 </div>
                 <div className="col-12">
                    <h3>Custom Widgets Development</h3>
                    <p>Created simple, functional widgets that can be reused across different partials to speed up application development.</p>    
                 </div>
                 <div className="col-12">
                    <h3>ChatBot Application Development</h3>
                    <p>Developed chatbots using AngularJS from scratch that can be launched to a variety of platforms such as Slack, Facebook Messenger, and others.</p>    
                 </div>
                 <div className="col-12">
                    <h3>Real-Time Solutions and Data Streaming Apps</h3>
                    <p>We give you our best-in-class Data Streaming Apps that help you boost your business. Distributed processing over data streams will be provided by these apps. They'll be linked to a number of open-source data processing ecosystems as well as the top custom Angularjs development business means ensuring one-upmanship in the services we provide to all those that outsource angular js web development to us.</p>    
                 </div>
            </div>
            <div className="container">
                <h1>Here's How Your Angularjs development fulfills every needs of our clients- :</h1>
                <div>
                    <h3>Solid Technology Capabilities</h3>
                    <p>Our finest practices and technological knowledge is our greatest assets. We can give the best app development services utilizing the AngularJS framework because of our strong and strategic process capabilities.</p>
                </div>
                <div>
                    <h3>Transparent Collaboration</h3>
                    <p>We are able to build long-term connections with our clients because of our transparency. To obtain the finest results, our devoted developers and managers detailed tracking collaboration through excellent communication throughout our clients.</p>
                </div>
                <div>
                    <h3>Unparalleled Angular Expertise</h3>
                    <p>Anlogue IT not only has the highest proportion of Google Developer Experts (GDEs) in Angular, but we also work closely with numerous members of the Angular core team that writes and/or manages the framework. Whenever uncommon technological issues develop, they are immediately and efficiently rectified without the need to wait for answers from unidentified online sources.</p>
                </div>
                <div>
                    <h3>Agile Project Management</h3>
                    <p>Our work culture is founded on an agile methodology that allows us to deliver products quickly. Our agile initiatives promote accurate product scoping, higher quality, and faster delivery. Anlogue IT, as an Angular development firm, offers end-to-end services that enable our clients to reap the rewards of a framework that is quick, efficient, scalable, and enhances user experience. For improved business outcomes, we also assist our clients with migrating to the latest version of Angular, as well as designing custom widgets, Angular framework plugins, and APIs.</p>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Angular
