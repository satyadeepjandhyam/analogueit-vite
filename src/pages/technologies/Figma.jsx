import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Figma() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        BEST WEB APPLICATION FOR DESIGN -FIGMA
                        </h1>
                        <p>To design various vector graphics and even for designing, it is essential to have a tool that can help to work with proper order and perfectness. To make sure that every design work goes well, it is very important to help with any tools. Due to this, many tools are even discovered by many experts.</p>
                         </div>
                </div>
                <div className="row">
                    <p>Figma is software for editing vector graphics and even a tool of prototyping that is web-based primarily. Not only this, but even it has some of the additional features that make the desktop application enable for Mac OS and Windows. Both of the apps are discovered for Android and IOS for viewing the prototypes in real-time on mobile devices.</p>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>ADVANTAGES OF USING FIGMA</h1>
        <p>
        Figma is a tool that is discovered for designing and developing the different works of graphics. This web-based application is very useful in different fields. Apart from using web application-based software, there are many other advantages of making use of this software.
        </p>
        <ul>
            <li>
             The work of Figma is different from any other software. This is a web-based application or software which works on Windows, Mac, Linux Operating systems, and Chromebooks.
            </li>
            <li>
             Sometimes, it is not very easy to work in various applications or various tools, especially for the team of designers. Members of the team cannot work or do the work accordingly as many technical issues arrive. But with Figma, it has become very easy for the designers to make an edit, share, and even leave notes in real-time.
            </li>
            <li>
            Figma even is a helpful tool to work, especially for the design team members, as in many situations, all members of the teams are not available at a single physical location. This software will make all members of the designing team feel that all the members are part of the respective teams.
            </li>
        </ul>
       </div>
       <div className="container">
        <h1>DIFFERENT WAY TO USE FIGMA</h1>
        <p>
        Not only in developing sectors, even in many sectors like gaming and dancing spots, but Figma plays a crucial role. Apart from making work easy and smooth for the team of designing of developing graphics sector other sectors are even coming up. All sectors of gaming are coming up.
        </p>
        <ul>
            <li>The tea in which Figma is working has a great capacity to organise a huge range of information in a very short time. This method is usually can be created by an affinity diagram. Even the multiplayer will help to throw ideas into the file in tandem.</li>
        <li>
        Figma has an option to choose and vote for the concepts which are different in real-time. This is because of the best and latest version which Figma is having with. The entire choice of making a logo or designing always keeps the capacity of catching the attention.
        </li>
        <li>
        Sometimes, it is not easy to make the line of the design to make the line or design divide and even conquer those designs by an assembly line. Even the members can do this work by just making splitting up on very large tasks.x
        </li>
        </ul>
       </div>
       <div className="container">
        <h1>USES OF FIGMA FOR DEVELOPING GRAPHICS</h1>
        <ul>
            <li>Figma can be worked on any platform based on or run by web applications or browsers. Many platforms are there like macs, Windows PCs, machines of Linux, and Chromebooks which can be even come into use with Figma.</li>
            <li>
            As the Figma is based on the browser, the teams can easily collaborate as they will be presented as the Docs of Google. With the help of this software, a design can be checked to see whether the designs are in real-time or not. It can be checked by just opening a shared file
            </li>
            <li>
            Sometimes the communication among the team members are not taken place due to various reasons. This leads to a huge loss. To avoid such losses, Figma uses Slack which is meant for communication purposes. Whenever the channel of Figma is created, the designs can be sacked by the team.
            </li>
        </ul>
       </div>
       <Contact/>
       <Footer/></>
    )
}

export default Figma
