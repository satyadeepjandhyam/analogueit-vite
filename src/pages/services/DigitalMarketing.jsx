import React from 'react'
import Nav from '../../components/navbar/nav'

import img1 from "../../assets/technologies/banner1.png"
function DigitalMarketing() {
    return (
        <>
        <Nav/>
        <div className="tech-container d-flex align-content-center justify-content-end">
                <div className="container">
                    <div className="row">
                        <div className='col-4'><img className='img-fluid' src={img1} alt="img" /></div>
                        <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                            <h1>
                            UX/UI DESIGN AND DEVELOPMENT
                            </h1>
                            <p>
                            At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle.
                             </p>
                        </div>
                    </div>
                    <div className="row">
                        <p>At Analogue IT Solutions, we transform your ideas into meaningful user stories with our creative UI/UX development. Our expert UI/UX designers mainly focus on user expectations and incorporate the UX design practice in every stage of the app development cycle. We create interfaces that are aesthetically appealing, easy to navigate, and truly user-friendly. We build creative and impressive designs with our deep knowledge of web designing and implementing the latest technology trends in your business.</p>
                        <p>Being one of the top UI/UX Design Company, we build creative and impressive designs by implementing the latest trends. We provide the best UI/UX design services by delivering hassle-free and cost-effective development of your application. With our web and mobile application design services, we deliver design solutions that are creative, empowering and brand-centric.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DigitalMarketing
