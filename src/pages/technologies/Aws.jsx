import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Aws() {
    return (
        <>
        <Nav/>
       {/* <div className='container h-50 pt-5'>
       <div className="container ">
            
            <div className='row pt-5'>
             <div className='col-5'><img src="#" alt="pic" /><div className='col-7'><h1>KNOW MORE ABOUT AWS</h1>
             <p>AWS (Amazon Web Services) is a comprehensive cloud computing platform supplied by Amazon that comprises a mixture of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) solutions. AWS is a trademark of Amazon Inc. Computing power, database storage, and content delivery services are just a few of AWS services' tools to a company.</p>
            </div></div>
            <p>Amazon Web Services (AWS) was founded in 2006 to extend the internal infrastructure that Amazon.com had developed to support its online retail activities. Among the first firms to establish a pay-per-use cloud computing model, Amazon Web Services (AWS) was the first to scale to give consumers as much computation, storage, or throughput as they require.</p>
             </div>
         </div>
       </div> */}
       <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        KNOW MORE ABOUT AWS
                        </h1>
                        <p>AWS (Amazon Web Services) is a comprehensive cloud computing platform supplied by Amazon that comprises a mixture of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) solutions. AWS is a trademark of Amazon Inc. Computing power, database storage, and content delivery services are just a few of AWS services' tools to a company.</p>
                    </div>
                </div>
                <div className="row">
                    <p>Amazon Web Services (AWS) was founded in 2006 to extend the internal infrastructure that Amazon.com had developed to support its online retail activities. Among the first firms to establish a pay-per-use cloud computing model, Amazon Web Services (AWS) was the first to scale to give consumers as much computation, storage, or throughput as they require.</p>
                </div>
            </div>
       </div>
        <div className="container">
            <h1>How this AWS service works</h1>
            <p>Depending on the user's requirements, AWS may be configured in various ways across its many services. An AWS service's configuration choices and server mappings should be visible to users. It gives programmers the tools to construct new websites, run such sites, update them, and make modifications of any type</p>
        </div>
        <div className="container">
            <h1>How this Availability?</h1>
            <p>With hundreds of data centres located across availability zones (AZs) in different countries worldwide, Amazon Web Services can deliver services to customers. An AZ is a physical location that contains several data centres in one area. A region is a group of AZs that are geographically close to one another and are connected by low-latency network links.</p>
            <p>A company's selection of one or more availability zones is based on a range of factors, including regulatory compliance and proximity to end consumers. For example, an AWS client may create virtual machines (VMs) and duplicate data across several availability zones (AZs) to create a highly dependable architecture resilient to the loss of individual servers or the failure of an entire data centre.</p>
            <p>Elastic Computing Cloud (EC2) is a service provided by Amazon that delivers virtual servers (also known as EC2 instances) to provide computing power. Instance types of varied capacities and sizes are available through the Amazon Web Services (EC2) service. Each is geared to certain workload kinds and applications, such as memory-intensive and accelerated-computing activities. Auto Scaling is another feature offered by AWS, which allows users to scale capacity to preserve instance health and performance automatically.</p>
        </div>
        <div className="container">
            <h1>Our Storage Process</h1>
            <p>Scalable object storage for data backup, gathering, and analytics is provided by Amazon Simple Storage Service (S3). S3 objects, which can store data and files up to 5 gigabytes (GB), are used by IT professionals to manage data and files. S3's Infrequent Access storage tier or Amazon Glacier's long-term cold storage can save company money.
             EC2 instances may use block-level storage volumes to store long-term data as part of the Amazon Elastic Block Store. Files may be stored in the cloud using Amazon Elastic File System (Amazon EFS).
             AWS Snowball and Snowmobile are storage transport devices that allow on-premises programmes to access cloud data. Another option is to utilise AWS Storage Gateway.</p>
        </div>
        <div className="container">
            <h1>The database management system of AWS</h1>
            <p>For AWS customers, the Amazon Relational Database Service offers a relational database management system that includes solutions for Oracle, SQL Server, PostgreSQL, MySQL, MariaDB, and a proprietary high-performance database called Amazon Aurora. Amazon DynamoDB is a NoSQL database service provided by AWS.</p>
            <p>The Amazon ElastiCache and DynamoDB Accelerator services are in-memory and real-time data caches that AWS customers may employ for their applications' data needs. Business intelligence (BI) processes may be performed more quickly and easily with Amazon Redshift's data warehouse</p>
        </div>
        <div className="container">
            <h1>Migration, hybrid cloud</h1>
            <p>AWS provides various tools and services to assist users in migrating their applications, databases, servers, and data to the AWS public cloud. Using the AWS Migration Hub, you can monitor and manage on-premises to cloud migrations. On-premises servers and AWS instances may be configured using EC2 Systems Manager once moved into the cloud environment.</p>
            <p>Additionally, Amazon has partnered with several technology companies that facilitate the adoption of hybrid cloud infrastructures. To bring software-defined data centres from VMware to AWS, we've created VMware Cloud on AWS. Thanks to a new agreement, one of Red Hat's operating systems, Red Hat Enterprise Linux, is now available on Amazon EC2.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Aws
