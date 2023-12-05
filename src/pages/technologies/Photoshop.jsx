import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Photoshop() {
    return (
        <>
         <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        BEST INDUSTRY FOR STANDARD INDUSTRY-PHOTOSHOP
                        </h1>
                        <p>Python is a high-level language program with a different dynamic way that has a fantastic potential to collect garbage from the web. There are many Python companies with excellent and upgraded Java services they are providing to their customers. It is the support system of multiple types of programming, and the exciting fact is that it includes the structure, oriented which is objected and lastly about the functional programs.</p>
                         </div>
                </div>
                <div className="row">
                    <p>Due to not having a good quality in the photo, anything presented in the picture will become less important. Sometimes, due to not having any good quality in a picture, every plan gets ruined and may even have to suffer from a loss. To avoid such a situation, it is very important to use Photoshop to make everything easy and more simple</p>
                    </div>
            </div>
       </div>
       <div className="container">
        <h1>ADVANTAGES OF PHOTOSHOP</h1>
        <p>Only for gaining popularity or only for gaining any profit is not the only thing. There are even many advantages of using Photoshop as it is a very powerful and very popular photo editing method. These methods of editing photos give life to a still image and make it more special.</p>
        <ul>
            <li> Organization- Sometimes, it is not easy to get the important image or any important photos as there will be a wide range of photos in the collection. With the help of Photoshop, it is very easy to import an important or necessary image from the collection.</li>
            <li>Quick And Time-saving- While doing photoshop or editing on any image, some edits are there, which are complicated as well as time taking processes. In editing some parts of the image, it takes up a lot of time. But with the help of photoshop, the work has become easy.</li>
            <li> Numerous Possibilities- Sometimes, while editing an image, it becomes difficult for experts to use the exact tool due to various existing reasons. In this case, it even has less possibility to make the image beautiful. But with the help of photoshop, the work has become very easy.</li>
        </ul>
       </div>
       <div className="container">
        <h1>DIFFERENT PURPOSE OF USING PHOTOSHOP</h1>
        <ul>
            <li>Photo Restoration- Photoshop is a method that can help with the problem usually or commonly faced during restoration. Some pictures or images are very old and even wanted those images to be restored as it becomes very important at some point in time. But with Photoshop, it is easy for restoring</li>
            <li> Cropping A Image- While editing, sometimes, it becomes necessary to crop an image. This step is taken while editing. One thing is kept in mind that only the important and main portion should be focused on. Photoshop will crop the unwanted part from the image to keep the important portion in a focused position.</li>
            <li>Animation- Photoshop is also a very important and powerful tool for the animation of graphics purposes. Photoshop will try to create a frame that will be in the form of layers, and after it is done animation panel will get activated from the timeline.</li>
        </ul>
       </div>
       <div className="container">
        <h1>ROLE OF PHOTOSHOP IN BUSINESS</h1>
        <p>Not only in the day-to-day life and animation sector, but Photoshop is also playing a very important and crucial role in the field of business. Before maybe photoshop was not in that position to maintain any business sector but in recent times, it is playing a great role for the business sector. When the pandemic hit, every sort of work got easy in online mode.</p>
        <ul>
            <li> Photoshop has helped many business sectors or business organizations make the marketing costs less. Many businesses were paying the outside agency for the service which they have taken. Due to all these business firm was paying a huge amount, but photoshop has helped every business organization from paying huge.</li>
            <li> Even most importantly, photoshop has helped social media marketing to get better and improved content. Photoshop has even helped many businesses get profit and reach out to customers worldwide and get more profit</li>
            <li>Sometimes, due to the product's bad or low image quality, the business organization does not get enough profit which was supposed to be earned. As photoshop has helped to get more attractive images for business</li>
        </ul>
       </div>
       <Contact/>
       <Footer/></>
    )
}

export default Photoshop
