import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Php() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                            HOW PHP IS IMPORTANT FOR WEB DEVELOPING
                         </h1>
                         <p>In this developing generation, most of the new and important changes have been taken place. Most of the changes have been done in the field of computer languages and websites. Even this time, new changes have also been taken place where initiatives have taken place for the web developments and the computer languages used general-purpose scripting languages. Even many of the PHP companies are there which are providing with better PHP service itself in their companies with better and upgraded versions are also used in so that no one faces any trouble in future</p>
                        </div>
                </div>
                
            </div>
       </div>
       <div className="container">
        <h1>MongoDB</h1>
        <p>If we talk about the PHP’s history, then this has begun from the year 1994. It was created by a Danish Canadian who is the programmer of Rasmus Lerdorf in the same respective year when it was introduced. PHP was popularly known as Personal Home Page at its introduction, but now the name has been changed and kept as PHP; Hypertext Pre-processor. The code of PHP usually starts processing on the webserver by the interpreter of PHP, which has been implemented as been a module, a daemon, or as Common Gateway Interference (CGI).</p>
       </div>
       <div className="container">
        <h1>IMPLEMENTATION PROCESS OF PHP</h1>
        <p>Sometimes it is always not the same. Many of them do face different problems while implementing the PHP. But the fact is not correct. PHP is mostly used in a wide range which the engine of Zend has powered. The Zend engine helps the source of code so that it can easily work into an internal format that can also be executed, and it can work as an interpreter. Conclusion: there are so many products that have been developed that can help them improve the performance of PHP to speed up</p>
        <p>The scripts of PHP can even be deployed inside the engine that too with the internal format just by using an opcode cache as it also works by compiling the code and also by parsing overhead so that it can avoid the shared memory. There are other programs which have been developed like Hip-Hop Virtual Machine, Parrot- a virtual machine for design so that dynamic languages can run in a proper, efficient way, Peach Pie- which is also a second-generation compiler for the Common Intermediate Languages, Quercus, Hip Hop, Phalanger and many more, so that the program runs efficiently</p>
       </div>
       <div className="container">
        <h1>ADVANTAGES OF PHP</h1>
        <p>Most of you might think that what are the exact advantages we will be able to get or the best benefits they are going to get benefited with. Even most people might not get stagnant and the best service for the web development so that the languages for web development can easily work in a proper and best way. Most of the people there who do have a proper idea for this can get to know some of the advantages of PHP and future web development.</p>
        <ul>
            <li>People might think that PHP is not such an easy language to learn, but the fact is that it is one of the easiest scripting languages which has been considered.</li>
            <li>People do not have to think about its flexibility as it is highly flexible in the language for scripting purposes

It is one of the easiest and easiest and even compatible for most operating systems.</li>
            <li>Even though it depends on the web developer for the codding, PHP has an amazing potential to make any language efficient.</li>
        </ul>
       </div>
       <div className="container">
        <h1>CONCLUSION</h1>
        <p>After getting to know so many unknown facts about how it can be easily concluded that PHP is also known for developing several languages for web programming, even PHP service also provides better facilities and quick response from their own PHP company itself. The service of PHP is making a great contribution for languages so that web development does not face any sort of technical errors or any sort of technical issues while working with these, and this even includes different elements1</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Php
