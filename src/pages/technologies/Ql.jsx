import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Ql() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                       
Learn more about Oracle, MySql, SqlServer
                        </h1>
                        <p>Oracle is a relational database management system developed by the Oracle Corporation and distributed by Oracle Corporation. Oracle's relational database management system (RDBMS) supports a wide range of data models. It comes in various product editions, including Standard Edition, Enterprise Edition, Express Edition, and Personal Edition. The user can select the database system that best suits their needs.</p>
                         </div>
                </div>
                
            </div>
       </div>
       <div className="container">
        <h1>MongoDB</h1>
        <p>Compared to other databases currently available on the market, Oracle systems are scalable, secure, and have excellent performance capabilities. Its database is also referred to as Oracle or just Oracle. Enterprise Grid Computing and Data Warehousing are two of the primary applications for which it is developed. It is a multi-model relational database management system. </p>
        <p>In terms of cost-effective applications and data management solutions, it is one of the first choices for businesses looking for cost-effective options. It allows you to communicate with the database using SQL as a query language, which is supported.</p>
       </div>
       <div className="container">
        <h1>Features of Oracle</h1>
        <p>Scalability and Performance: Real Application Clustering and Portability, among other features, allow an Oracle database to be scaled to meet the user's needs. Data consistency and concurrency management are necessary for a multiuser database, and these are features that Oracle provides.</p>
        <p>The scripts of PHP can even be deployed inside the engine that too with the internal format just by using an opcode cache as it also works by compiling the code and also by parsing overhead so that it can avoid the shared memory. There are other programs which have been developed like Hip-Hop Virtual Machine, Parrot- a virtual machine for design so that dynamic languages can run in a proper, efficient way, Peach Pie- which is also a second-generation compiler for the Common Intermediate Languages, Quercus, Hip Hop, Phalanger and many more, so that the program runs efficiently</p>
       </div>
       <div className="container">
        <h1>Availability:</h1>
        <p>Real-time applications need a high level of data accessibility. To ensure continuous data availability, high-performance computing environments are set up in this manner. While outages and failures are scheduled or unexpected, data is available throughout this period.</p>
       </div>
       <div className="container">
        <h1>Backup and Recovery:</h1>
        <p>Its structure has comprehensive data recovery capabilities that enable it to recover data from virtually any type of failure. In the event of a failure, the database must be restored as soon as possible to maintain high availability</p>
       </div>
       <div className="container">
        <h1>Security:</h1>
        <p>Oracle offers a variety of controls for limiting who may see and use your data. The actions of users can be authorised and changed, which can prevent unwanted access while also allowing them to have different access permissions.</p>
       </div>
       <div className="container">
        <h1>MySql :</h1>
        <p>Relational database management system MySQL uses the SQL query language to perform queries. Data warehousing, e-commerce, and log applications are just a few of the many uses for the programme.</p>
        <p>MySQL, on the other hand, is most commonly used to power an online database. Everything from a single piece of information to a complete product catalogue may be stored in it.</p>
       </div>
       <div className="container">
        <ul>
            <li>User-friendly: Because SQL language is supported, users don't require a technical background to access the database. SQL expertise and previous relational database familiarity are all that is required to use it.

</li>
<li>As an open-source tool, software developers have the freedom to alter the source code and use it in their applications. Access to the program's source code is available to the public. GPL, i.e., GNU General Public License, defines the software's do's and don'ts.</li>
<li>Several well-known online apps rely on this database because of its high level of security and reliability. Protecting user data from outsiders is made easier by technologies like firewalls, Encryption, and User Authentication</li>
<li>It supports the multi-engine storage capability, which allows database administrators to balance the workload in a way that is best for the database. Because of this, the database is completely error-free in terms of speed.</li>
        </ul>
       </div>
       <div className="container">
        <h1>SqlServer:</h1>
        <p>Microsoft has created and sold SQL Server, a relational database management system (RDBMS). SQL Server's primary role is to store and retrieve data that other programmes may utilise as a database server. The purpose of the system is to store and manage data. The system supports business intelligence, analytics, and transaction processing.</p>
        <p>MySQL, on the other hand, is most commonly used to power an online database. Everything from a single piece of information to a complete product catalogue may be stored in it.</p>
       </div>
       <div className="container">
        <h1>Benefits of certifying an employee in SQL:</h1>
        <p>To receive certification, an individual must complete all needed training and practice sessions. Because of this, they are capable of performing all of the duties delegated to them.</p>
        <p>There are worldwide standards in the SQL Certification curriculum. As a result, the individual will be able to work anywhere globally and ensure that their work will match industry requirements.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Ql
