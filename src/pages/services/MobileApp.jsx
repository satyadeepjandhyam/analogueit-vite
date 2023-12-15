import React from 'react'
import img1 from "../../assets/technologies/banner1.png"
import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
function MobileApp() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
                <div className="container">
                    <div className="row">
                        <div className='col-4'><img className='img-fluid' src={img1} alt="img" /></div>
                        <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                            <h1>
                                MOBILE APP DEVELOPMENT  
                            </h1>
                            <p>According to the latest market research, the Android platform holds the majority of shares in the smartphone market. Because of its huge user base, Android became the most important and popular application development platform. There is a lot of demand for Android app development in India as every business owner looking to build their solid presence on this platform.</p>
                        </div>
                    </div>
                
                    
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <h1>Benefits Of Using Android App Development</h1>
                    <p>According to the latest market research, the Android platform holds the majority of shares in the smartphone market. Because of its huge user base, Android became the most important and popular application development platform. There is a lot of demand for Android app development in India as every business owner looking to build their solid presence on this platform.</p>
                    <p>Android Platform has a 70% share of the mobile market worldwide and is progressing by leaps and bounds. By using this platform, a lot of businesses have increased their revenues considerably and resulted in tremendous business growth.</p>
                </div>
               
            </div>
            <div className="container">
            <div className="row">
                    <ul>
                        <li>Open-source</li>
                        <li>Customizable UI</li>
                        <li>Easy Integration</li>
                        <li>Secured Platform</li>
                        <li>Low Investment & High ROI</li>
                        <li>Easy To Adopt</li>
                        <li>Multiple Network Distribution</li>
                        <li>Community Support</li>
                        <li>Hardware Compatible</li>
                    </ul>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </>
    )
}

export default MobileApp
