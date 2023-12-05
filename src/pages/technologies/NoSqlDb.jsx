import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function NoSqlDb() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        Proprietary NoSQL with MongoDB and DynamoDB database
                        </h1>
                        <p>An open-source document database, MongoDB is the most popular NoSQL database. C++ is the programming language of choice for MongoDB. This lesson is a wonderful place to start for those interested in building a high-performance database—people who want to learn MongoDB clearly and straightforwardly.</p>
                         </div>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>MongoDB</h1>
        <p>MongoDB ideas will be explained in this lesson, and you'll be able to progress to a higher degree of competence after finishing it. If you need to support quick iterative development, MongoDB is a good solution. Allow for a huge number of teams to work together. Read and write traffic should be able to withstand high levels of demand.</p>
        <p>Your data repository should be able to handle huge amounts of data. As the business evolves, so should the type of deployment. Search and save data in many formats, including text, geographical, and time series. It is because of these traits that MongoDB has flourished as a business.</p>
       </div>
       <div className="container">
        <h1>Why Use MongoDB?</h1>
        <p>With MongoDB, developers can build scalable applications with dynamic data schemas since it is designed on a scale-out architecture.</p>
        <p>With MongoDB, developers may store structured and unstructured data in the same database. It stores documents in a JSON-like manner. This format is a no-brainer for developers because it is mapped directly to the native objects when it comes to current programming languages. Additionally, MongoDB can manage massive volumes of data and can be scaled both vertically and horizontally.</p>
        <p>MongoDB was designed for developers of web and enterprise applications who want a database that can grow and change gracefully as their applications do. MongoDB is used by businesses of all sizes for several reasons.</p>
       </div>
       <div className="container">
        <h1>DynamoDB</h1>
        <h2>Very Fast</h2>
        <p>DynamoDB, for particular, was created to handle a massive increase of data. When it comes to Amazon Web Services (AWS) database systems, DynamoDB is one of the most popular options. Using DynamoDB, customers may benefit from auto-scaling, in-memory caching, and backup and restore options for their internet-scale applications.</p>
        <p>To maintain track of expired data, developers can use this feature. This is due to the fact that DynamoDB streams give a time-ordered history of changes made to the data in the last 24 hours. Streams</p>
       </div>
       <div className="container">
        <h2>Benefits of DynamoDB for Operations</h2>
        <p>Those who have worked in the information technology business are aware that growing databases can be both challenging and dangerous. DynamoDB has the ability to auto-scale by keeping track of how close your consumption is to the top boundaries of the available resources. This can allow your system to react in response to the quantity of data flow, allowing you to prevent performance difficulties while also lowering your expenditures.</p>
       </div>
       <div className='container'>
        <h1>Access to control rules</h1>
        <p>It becomes increasingly necessary to maintain effective access control as information grows more particular and personal. You want to be able to apply access control to the appropriate persons without generating bottlenecks in the workflow of other users. By using DynamoDB's fine-grained access control, the table owner may acquire a greater level of control over the data contained within the database.</p>
       </div>
       <div className="container">
        <h1> Persistence of event stream data </h1>
        <p>DynamoDB streams enable developers to receive and update item-level data before and after changes to that data have occurred in the database. Users may easily utilise the API to update a full-text search data store such as Elasticsearch, push incremental backups to Amazon S3, or maintain an up-to-date read-cache by simply using the appropriate functions</p>
       </div>
       
       <div className="container">
        <h1>Time To Live  </h1>
        <p>Setting timestamps for deleting old data from your tables is a feature known as TTL or Time-to-Live. Expiring data is removed from the table as soon as a timestamp has expired. In addition to lowering storage space and minimising the expenses of manual data erasure, this approach also helps.</p>
       </div>
       <div className="container">
        <h1> Storage of inconsistent schema items </h1>
        <p>DynamoDB can handle inconsistent schema storage for your data objects. Because it is a NoSQL database, DynamoDB is better able to deal with query volumes and delivers high speed queries for item storage in inconsistent schemas because of its ability to handle less structured data more effectively than a relational database.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default NoSqlDb
