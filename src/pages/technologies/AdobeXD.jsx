import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from "../../assets/technologies/banner1.png"
import img2 from "../../assets/technologies/ui-ux-1-300x300.png"
import img3 from "../../assets/technologies/UI-CONCEPT-300x300.png"
import img4 from "../../assets/technologies/UI-CONCEPT-300x300.png"
function AdobeXD() {
    return (
        <>
            <Nav />
            <div className="tech-container d-flex align-content-center justify-content-end">
                <div className="container">
                    <div className="row">
                        <div className='col-4'><img className='img-fluid' src={img1} alt="img" /></div>
                        <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                            <h1>
                                Adobe XD
                            </h1>
                            <p>
                                Adobe XD is developed from the opinion up amid performance of the top of mentality. Adobe XD helps in skill prototype which looks completely real. It looks like the true fixation. One can convey the design visualization and keep association across with your team efficiently. Adobe XD is potent and easy for using a vector-based skill design platform that provides the teams with various numbers of tools. They may need those provided tools to design one of the best experiences.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <p>What is Adobe XD and its features- Adobe XD is there available on Mac as well as Windows systems? Adobe XD helps in skill prototype which looks completely real. It looks like the true fixation. One can convey the design visualization and keep association across with your team efficiently.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="container">
                    <ul>
                        <li><p>Adobe XD has 3D transforms feature. One can move as well as rotate things in space. One can add the look of depth as well as show the work in outlook. The design, along with the tools, one can experience the speculate.</p></li>
                        <li>
                        <p>
                        By using Adobe XD one can get to the bottom of delightful design. Components work to press on changes in the designs as well as documents immediately. One would get to use up less time duplicate.
                        
                        </p>
                        </li>
                        <li>
                        <p>
                        Drag to turn a single element into the repeat number in grids
                        
                        </p>
                        </li>
                        <li>
                            <p>
                            One can build designs and layouts without much complexity. One can make adjustments with the help of neat controls and can get back to exploring.
                            </p>
                        </li>
                        </ul>
            </div>
            <div className="container">
                <h1>Advantages of Adobe XDStarting of Adobe XD is easy</h1>
                <p>When one open adobe XD it offers canvas sizes like the devices one intent to design. The interface is very clean. So if you are used to drawing Sketch, it would be very easy for you to work in Adobe XD. The method of filling UI with content is very simple and easy. You can bring down an image from anywhere, maybe from your folder or browser. And further, one can drop it over the object by using Adobe XD. After resizing the object, the image scales by design and adjusts to the shape change. The Repeat Grid feature is amazing. You don't need to copy and paste the objects every time. You can select a group and make adjustments to the grid where you want it to be done repeatedly. Prototyping is outstanding.</p>
                <p>Disadvantages of Adobe XD- Repeating objects doesn’t work as per your expectations. Animating UI is generally hard compared to Sketch. Sadly there is no way to extract CSS code from the design to make things easier for the work for the developer. Prototype live preview is good, but there is one problem. Previewing prototype by using your mobile phone works only with Mac.</p>
                <p>Benefits of using Adobe XD- Adobe XD is a potent as well as easy for the use of vector-based skill design platform which provides the teams with various numbers of the tools. They may need those provided tools to design one of the best experiences. One can build designs and layouts without much complexity. One can make adjustments with the help of neat controls and can get back to exploring. You don’t need to copy and paste the objects every time.</p>
                <p>You can select a group and make adjustments to the grid where you want it to be done repeatedly. Prototyping is outstanding. One can move as well as rotate things in space. One can add the look of depth as well as show the work in outlook. The design, along with the tools, one can experience the speculate. By using Adobe XD one can get to the bottom of delightful design. Components work to press on changes in the designs as well as documents immediately. One would get to use up less time duplicate</p>

            </div>
            <div className="container">
                <h1>our design process</h1>
                <p>We use an iterative process that meets user expectations and also differentiate you from your competitors in the market. In our design process, we repeatedly go through several stages by evaluating our designs with clients on each stage.</p>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className='col-8'>
                        <h1>Wireframes</h1>
                        <p>Wireframes play a vital role in visualizing data structures and representing UI features. It allows early testing of workflows, navigation, and overall data structure.</p>
                    </div>
                    <div className='col-4'><img className='img-fluid' src={img2} alt="" /></div>
                </div>
            </div>
            <div className='container'>
                <div className="row d-flex align-items-center">
                    <div className='col-4'><img className='img-fluid' src={img3} alt="" /></div>
                    <div className='col-8'>
                        <h1>UI Concept</h1>
                        <p>The visual appeal of your application has a huge impact on users. We apply user-centered design to produce a cohesive, predictable, and pleasing effect on the target audience. A UI concept includes color designs, layouts, typography, and the overall style of the product.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className='col-8'>
                        <h1>PROTOTYPE</h1>
                        <p>The goal of the prototype is to illustrate the performance of the product and show how it would work in the real world. Our detailed clickable and fully-interactive prototypes represent the underlying flow of the entire product even before it’s completely built.</p>
                    </div>
                    <div className='col-4'><img className='img-fluid' src={img4} alt="img4" /></div>
                </div>
            </div>
            <Contact />

            <Footer />


        </>
    )
}

export default AdobeXD
