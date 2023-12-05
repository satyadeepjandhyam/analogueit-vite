import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Gcp() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                                            
                        BEST WEB APPLICATION FOR DESIGN -GCP
                        </h1>
                        <p>In the same way that Amazon Web Services (AWS) and Microsoft Azure are public cloud vendors, Google Cloud Platform (GCP) is as well. Customers can utilize GCP and other cloud suppliers to use computer resources located in Google's data centres worldwide for free or on a pay-per-use basis, depending on their needs.</p>
                         </div>
                </div>
                <div className="row">
                    <p>Cloud computing services from Google include cloud cost management to data management, web and video delivery via the Internet, and artificial intelligence (AI) and machine learning capabilities</p>
                    <p>Google Cloud is a collection of services accessible over the Internet and may assist enterprises in their digital transformation. It is important to note that Google Cloud Platform (which provides public cloud infrastructure for hosting web-based applications and is the subject of this blog post) is a subset of the larger Google Cloud.</p>
                     </div>
            </div>
       </div>
       <div className="container">
        <h1>Services includeGoogle cloud</h1>
        <h2>Compute</h2>
        <ul>
            <li>Virtual Machines, Disks, and the Network: Compute Engine is an IaaS service that uses Google's infrastructure to host virtual machines (VMs).</li>
            <li>
            Google's App Engine [Managed Application Platform]. Container instances preloaded with many different runtimes, each of which includes a set of standard App Engine libraries, are used to develop web apps and mobile backends.
            </li>
        </ul>
        </div>
       <div className="container">
        <h1>Storage and Databases</h1>
        <ul>
            <li>Cloud Storage [Object & File Storage and Serving] is a data storage and retrieval service provided through the Internet. The service provides a single object storage platform with various storage choices, including geo-redundant storage (low-latency, high QPS content serving users distributed across geographic regions). Cloud SQL [Managed MySQL] is a service that allows you to run SQL queries in the cloud. A MySQL database service that is fully managed and can host relational MySQL databases on Google's infrastructure.</li>
            <li>
            HBase-compatible NoSQL with a large table A high-performance NoSQL Big Data database service designed to handle extremely massive workloads while maintaining consistently low latency and high throughput rates.
            </li>
        </ul>
        </div>
       <div className="container">
        <h2>Machine Learning</h2>
        <ul>
            <li>
            Machine Learning in the Cloud [TensorFlow Machine Learning] A managed service for creating TensorFlow-based machine learning models.
            </li>
            <li>
            Images may be recognized and categorized using the Cloud Vision API. The ability to categorize photographs via a REST API, identify distinct objects and faces in images, as well as search for and read written text in pictures
            </li>
            <li>API for Cloud Speech (Speech to Text Conversion) Audio to text conversion is now possible through a REST API. The API supports over 80 languages and dialects.</li>
        </ul>
        </div>
      
      <div className="container">
        <h3>Networking</h3>
        <ul>
            <li>Software-defined network for the Google Cloud Routes, firewalls, and a Virtual Private Network are all part of this collection of Google-managed networking features (VPN)</li>
            <li>
            Multi-regional Load Distribution in the Cloud Cloud computing services in a single or several locations may be load-balanced and auto-scaled using a single anycast IP
            </li>
        </ul>
        <p>
        1. The work of Figma is different from any other software. This is a web-based application or software which works on Windows, Mac, Linux Operating systems, and Chromebooks.
        </p>
        <p>2. Sometimes, it is not very easy to work in various applications or various tools, especially for the team of designers. Members of the team cannot work or do the work accordingly as many technical issues arrive. But with Figma, it has become very easy for the designers to make an edit, share, and even leave notes in real-time.</p>
        <p>3. Figma even is a helpful tool to work, especially for the design team members, as in many situations, all members of the teams are not available at a single physical location. This software will make all members of the designing team feel that all the members are part of the respective teams.</p>
      </div>
      <div className="container">
        <h1>DIFFERENT WAY TO USE FIGMA</h1>
        <p>Not only in developing sectors, even in many sectors like gaming and dancing spots, but Figma plays a crucial role. Apart from making work easy and smooth for the team of designing of developing graphics sector other sectors are even coming up. All sectors of gaming are coming up.</p>
        <ul>
            <li>The tea in which Figma is working has a great capacity to organise a huge range of information in a very short time. This method is usually can be created by an affinity diagram. Even the multiplayer will help to throw ideas into the file in tandem.</li>
            <li>
            Figma has an option to choose and vote for the concepts which are different in real-time. This is because of the best and latest version which Figma is having with. The entire choice of making a logo or designing always keeps the capacity of catching the attention.
            </li>
            <li>
            Sometimes, it is not easy to make the line of the design to make the line or design divide and even conquer those designs by an assembly line. Even the members can do this work by just making splitting up on very large tasks.
            </li>
        </ul>
      </div>
      <div className="container">
        <h1>USES OF FIGMA FOR DEVELOPING GRAPHICS</h1>
        <ul>
            <li>Figma can be worked on any platform based on or run by web applications or browsers. Many platforms are there like macs, Windows PCs, machines of Linux, and Chromebooks which can be even come into use with Figma.</li>
            <li> As the Figma is based on the browser, the teams can easily collaborate as they will be presented as the Docs of Google. With the help of this software, a design can be checked to see whether the designs are in real-time or not. It can be checked by just opening a shared file
             </li>
             <li>
             Sometimes the communication among the team members are not taken place due to various reasons. This leads to a huge loss. To avoid such losses, Figma uses Slack which is meant for communication purposes. Whenever the channel of Figma is created, the designs can be sacked by the team.
             </li>
        </ul>
      </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Gcp
