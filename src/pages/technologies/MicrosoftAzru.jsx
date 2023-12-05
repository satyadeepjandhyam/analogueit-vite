import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function MicrosoftAzru() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                       
Learn everything regarding Microsoft -Azure
                        </h1>
                        <p>Cloud computing services such as analytics and virtual computing, storage and networking may all be accessed through Microsoft Azure's Infrastructure as Service (IaaS), Platform as A Service (PaaS) and Software as a Service (SAAS) provided by the public cloud computing platform. Replace or enhance your on-premises servers using this service. A fast, versatile, and inexpensive platform, Azure is the greatest public cloud service on the market today because of its cost and features. Let's look at how you can put it to use.</p>
                         </div>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>Services Approvedby Azure</h1>
        <p>Enhance and Implement Backup and Disaster RecoveryFor backup and disaster recovery, Microsoft Azure is a dream come true. Why? We like it because of its adaptability and the fact that it's pre-integrated.</p>
        <p>Azure's inherent flexibility comes from being a cloud-based solution; it can back up your data in virtually any language, on virtually any OS, and from virtually any location. Additionally, you have control over the frequency and scope of user backups. Tape backup isn't the best option if you're looking for an all-in-one backup and disaster recovery solution. There are several benefits of using Azure site recovery to augment your tape backups, including free or low capital investment and low operational expenses, remote replication, and data retention of up to 99.99 per cent. There's no need to worry about data loss with Azure backup, which keeps three copies of your files on-site and three more in a faraway Azure data centre.</p>
       </div>
       <div className="container">
        <h1>Host and Develop Web and Mobile Apps</h1>
        <h3>Compute</h3>
        <ul>
            <li>With patch management, AutoScale, and integration for on-premise apps, Azure provides a platform for hosting, building, and managing online and mobile applications. Azure makes such applications independent and adaptable.</li>
            <li>With automatic patch management for your virtual machines, you can spend less time maintaining your infrastructure and more time focusing on enhancing your apps and their performance instead. Azure also has support for continuous deployment, which helps you speed the updating code over time.</li>
        </ul>
        <h3>Distribute and Supplement Active Directory</h3>
        <p>If you have an Active Directory, Azure can interact with it to enhance your identity and access management capabilities. This offers your DNS a global reach, centralised management, and solid security.</p>
       <p>With Azure, users may spread an Active Directory system that is directly connected enabled throughout the world. As far as I'm aware, no other cloud provider offers the ability to expand the scope of your domain controller while also consolidating AD management in the same way as Azure does.</p>
       <p>Because it will be the core tool for managing and preserving access to all of these tools whether users have numerous locations or use both on-premise and cloud applications such as Microsoft 365, Active Directory integration with Azure will be the most effective solution.</p>
       
       </div>
       <div className="container">
        <h3>Innovate with IoT Industry Solutions</h3>
        <p>Microsoft Azure is an excellent resource for businesses looking to implement Internet of Things solutions because of its scalability, flexibility, and security. By integrating cloud-based solutions into your existing infrastructure, you may begin gathering fresh information about your firm while connecting your devices to the cloud.</p>
        <p>As a member of the Azure IoT Hub, you can monitor and manage billions of devices and get insights that will help you make better business choices and enhance consumer experiences while also reducing complexity, lowering costs, and speeding up development.</p>
        <h3>What can Microsoft Azure software perform</h3>
        <p>Microsoft maintains an ever-expanding catalogue of Azure services, with new ones being added consistently. It is possible to establish a virtual network and provide services or applications to a worldwide audience since all of the required components are available, including:</p>
       </div>
       <div className="container">
        <h1>Virtual Machines</h1>
        <p>Use pre-built templates or upload your unique images to create Microsoft or Linux virtual machines (VMs) quickly. Virtual machines (VMs) in the cloud may serve as a virtual data centre for your applications and services.</p>
       </div>
       <div className="container">
        <h1>SQL databases</h1>
        <p>If you're looking to host an infinite number of SQL relational databases on Azure, you can. In this way, you may save money on gear, software, and the requirement for in-house experts.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default MicrosoftAzru
