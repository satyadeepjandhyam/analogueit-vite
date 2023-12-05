import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Viewjs() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        Learn more about the unique framework of Vue.js!
                        </h1>
                       <p>Vue is a unique modern framework for making an interface design. Unlike many other single unified frameworks, Vue was designed from the ground up to be incrementally applicable. Vue.js services are quite amazing. The culture collection is only concerned with the session layer, and it is simple to pick up and incorporate with some other libraries or schemes of work. On the other hand, Vue can be associated with solitary application forms when combined with advanced equipment and sponsoring libraries.</p>
                       </div>
                </div>
            </div>
       </div>
       <div className="container">
        <h1>What's unique about the Vue.js company?</h1>
        <p>Vue.js company provides a JavaScript framework for creating web-based applications as well as single-page applications. Vue.js is used to create mobile and desktop applications that use the Electron framework and online applications. Vue's HTML extension and base JS have soon made it a favourite front-end tool, as demonstrated by its adoption by industry titans such as Alibaba, adobe, Xiaomi and Gitlab.</p>
       </div>
       <div className='container'>
        <h1>Advantages of Vue.js services!</h1>
        <p>Size: Tiny This point is as insignificant as Vue's: the zip code available for download with the framework weighs only 18KB. As an ultralight framework, the framework makes it easy to download the library and has a positive effect on SEO and UX.</p>
        <p>Rendering and performance of virtual DOM When viewing web pages, you will most likely come across the Document Object Model (DOM). The Document Object Model (DOM) illustrates HTML pages that include styles, aspects, and content as objects. When a page loads, a browser creates objects in the form of a tree structure.</p>
        <p>When a user can interact with a page, the objects' states alter, requiring the browser to refresh the data and display it on the screen. However, updating the whole DOM is time-consuming. Vue.js uses a virtual machine to improve performance: think of it as a copy of the original DOM that stipulates what elements must be updated without re-rendering the entire DOM. This method speeds up page rendition and enhances application performance.</p>
        <p>Bidirectional data binding that is interactive Another advantage of using DOM is the bidirectional data binding that Vue did inherit from Angular. Bidirectional data adhesion is a method of communicating between form data updates and a view (UI). It is simpler to update main components, track data, and make updates with the help of bidirectional data binding</p>
        <p>Vue.js services provide components of a single file and readability in Vue; every portion of your potential development is an element. Components are the elements that encapsulate your interface. Components in Vue.js can be written in HTML, CSS, and JavaScript without being separated into separate files.</p>
        <p>Vue.js company provides an ecosystem of Solid Tools Vue.js has amassed a solid toolset to work with over the course of its five-year existence. The forthcoming Vue CLI 3 version is a complete rewrite that will include a slew of new features. Vue CLI 3 will include out-of-the-box support for Babel and TypeScript, unit testing, detailed testing tools, and a plugin setup system. Vue does have its own browser debugging tools, server spectator, and state supervisor, as if that wasn't adequate.</p>

       </div>
       <div className="container">
        <h1>Conclusion</h1>
        <p>Vue is a lighter weight, simple, and enjoyable writing environment. Merging or migrating existing projects to Vue is quicker and sleeker due to its acquainted modular setup and component use. As a result, while Vue.js is ideal for startups, it can also be used for a wide range of applications. Vue has official bundles for server-side public administration, forwarding, and rendering, including up-to-date support and ensuring system synchronisation. Project setup and preparatory deployment work are incredibly fast to Vue CLI 3 and Vue UI. This, in turn, aids in the rapid and efficient development of the star players.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Viewjs
