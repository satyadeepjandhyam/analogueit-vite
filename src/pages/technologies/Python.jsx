import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Python() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                       BEST LANGUAGE FOR PROGRAMMINGPYTHON
                        </h1>
                        <p>Python is a high-level language program with a different dynamic way that has a fantastic potential to collect garbage from the web. There are many Python companies with excellent and upgraded Java services they are providing to their customers. It is the support system of multiple types of programming, and the exciting fact is that it includes the structure, oriented which is objected and lastly about the functional programs.</p>
                         </div>
                </div>
                <div className="row">
                    <p>These elements are well known for their batteries, and they are also included inside it due to the language, which has been the standard library. The language has been constructed along with the object-oriented approach as it aims to help other programmers who are having problems writing clear code or languages, any logical code for any projects that are small and large scale. Guido Van Rossum was the person who is the father of Python in the year 1980 and the successor to the entire ABC programming languages, which was worked on and later was released in 1991.</p>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>APPLICATIONS OF PYTHON IN DIFFERENT SECTORS</h1>
        <p>Python is the language not only used for the operational purpose of users, but other than this, Python also has various types of uses in different sectors or fields. All these sectors or areas are giving outstanding contributions towards the up-gradation of the Python programming language even. Some essential applicants are here, which are necessary for all users of python languages used for so long.</p>
        <ul>
            <li>Python is essential for both web development and internet purpose as it is essential to have the latest version so that users can be beneficial from this and will be able to get all sorts of information.</li>
            <li>
            It is even used for scientific purposes. In some scientific theories, it is essential to use for any proof, and numerical purposes as Python will make the problem easier to solve without facing any issues.
            </li>
            <li>
            Python plays a vital role in the education sector. Many of the education fields are introducing Python as their subject for students. Even most of the students are taking up the issue of Python and seeking their career in Python language development or programming field.
            </li>
        </ul>
       </div>
       <div className="container">
        <h1>ADVANTAGES OF PYTHON</h1>
        <p>Apart from having advantages like Python company giving an upgraded version of Python service and the service is provided by the company itself. But there are many more other advantages. It is essential to know about some of the other crucial benefits of Python, which is present here, and it is necessary to understand the other advantages.</p>
        <ul>
            <li>Python would be providing all their users with quality versions of their websites or web pages</li>
            
            <li>All users who are using the high-level language of Python can get a high level of changes in their web pages.</li>
            <li> Python platform has a complete massive range of open-source platforms and accessible sources for all users using Python.</li>
            <li>With the help of Python, it is now possible to get a vast range of supportive libraries as before without Python was not so easy to get the library, but now it is possible. Python helps to work in the programming language, and it is convenient as well.</li>
        </ul>
       </div>
       <div className="container">
        <h1>CONCLUSION</h1>
        <p>After getting to know so many facts about which are unknown to so many people now, it can be concluded that Python is one of the most popular and well-known languages for programming used. You will be able to see that so many Python companies have been developed and give so many benefits to their customers who are coming to their company to get Java service that too in an expanded and upgraded version</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Python
