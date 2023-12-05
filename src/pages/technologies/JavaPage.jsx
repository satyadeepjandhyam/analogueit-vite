import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function JavaPage() {
    return (
        <>
             <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                      
BEST PROGRAMMING LANGUAGE-JAVA
                        </h1>
                        <p>Java has been one of the oldest programming languages used by a vast range of users from the beginning of the language. Many Java company has been set up which are giving a fantastic Java service to their users. Java refers to that high-level language based on class and has an object-oriented programming language designed so that it can have as little implementation dependence as possible. The general purpose behind this programming language is to get intended to let programmers write once, run anywhere, which means that it has been compiled with Java code. Java codes can run on every platform which supports it even without the need for recompilation.</p>
                        
                         </div>
                </div>
                <div className="row">
                    <p>
                    The applications of Java have a typical compiled to the bytecode that would run on any Java Virtual Machine called JVM shortly. Even the syntax of the Java program is also similar to C and C++ programs of a high-level language. In the year 2007, in May, it was compliance with some specifications of the program of Java community process as Sun has re-licensed almost every technology of Java under the only license of GPL-2.0 only. Even oracle do offer their hot-spot for Java virtual machines.
                    </p>      
                </div>
            </div>
       </div>
       <div className="container">
        <h1>IMPLEMENTATION OF JAVA</h1>
        <p>
        The implementation done by oracle is packed in the different distribution known as The Java Runtime Environment, which is shortly known as JRE. This contains all the essential parts of the Java SE platform required to run the programs of Java. Even though it has been intended for all users, the Java Development Kit, which is shortly known as JDK, is designed for software developers. Even it includes the development tools like as Java compiler, Java doc.
        </p>
        <p>
        Java’s goal is to make every implementation of Java more compatible in a better way. Even Sun’s trademark license, which was created for the usage of the Java brand, insists that every implementation can be more and more compatible for all users using the program Java. This has resulted in a legal dispute with Microsoft after Sun claimed that the commission had not supported RMI or the JNI. Java has been added to the platform, which would be providing specific features which will help programmers.
        </p>
       </div>
       <div className="container">
        <h1>BENEFITS OF USING JAVA</h1>
        <p>Java has a very vital role in the world of the high-level language of programming. Apart from having upgraded Java service that too inside the Java company is considered one of the significant benefits given to the users. But there are other benefits also, which are tremendous practical help from which users can benefit. Here are some of those benefits which is helpful for every user of Java.</p>
        <ul>
            <li> Java is straightforward to learn. Anyone can learn Java without facing any significant problems as it has been designed in such an easy way that everyone can understand them very quickly.</li>
            <li>Java is wholly based on objected-oriented as it allows the users to create modular programs and gives permission for code reusable for the betterment of users.</li>
            <li> The platform of Java is fully independent, and this is one of the most significant benefits of Java as it can quickly move from one computer system to another.</li>
        </ul>
       </div>
       <div className="container">
        <h1>CONCLUSION</h1>
        <p>
        After getting to know so many facts about Java that were not known by many people now, it can be concluded that Java is one of the oldest and well-known programming languages used and has also been studied by many students for so long. In fact, in today’s time of programming companies, many are not providing such services to their customers. Still, in Java company, they provide their customers with the best Java services themselves in their company which are best.
        </p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default JavaPage
