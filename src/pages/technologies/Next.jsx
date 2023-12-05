import React from 'react'
import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"
function Nextjs() {
    return (
        <>
        <Nav/>
         <div className="tech-container d-flex align-content-center justify-content-end">
            <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>
                        Get more detail about next.js and its usage!
                        </h1>
                       <p>Next.js is an open-source software framework built atop of Node.js that enables server-side renderer and static website creation in Act in response web apps. It is mentioned in the React Next.js manual under “Suggested Tool Threads” and is advised as a solution when “Building an HTTP webpage with Node.js.”</p>
                       <p>Next.js is a Respond framework for the front development. It allows us to use functions such as static website creation and HTTP rendering of Act in response web apps.</p>
                        </div>
                </div>
                
            </div>
       </div>
       <div className="container">
        <h1>Pre rendering in Next.js!</h1>
        <p>Next.js services provide two types of pre-rendering: server-side rendering and static generation. A generation that is static if a page uses static generation, the HTML for that page is produced at the time of the founding, which means the HTML is repurposed on every browser invitation. Preference will be given to static formation, in which the HTML page produced could be buffered by the CDN (Content Delivery Network).</p>
        <ul>
            <li>If there are single HTML pages without data, they will be produced at the time of creation. In the particular instance of data-filled pages, Next.js provides two functions that can be used together or individually depending on the person.</li>
            <li>getStaticProps and getStaticPaths. If the material of your page is dependent on external information, we call the Next.js function getStaticProps, retrieve the data, and throw it as props to our page. On another page, this function is called. Suppose your page route is reliant on external data. In that case, we use getStaticPaths, which is called from the same page that uses dynamic routing and can thus visualize data for that particular page based on the path we served time.</li>
        </ul>
        <p>Next.js services render on the server; if the page employs server-side rendering, an HTML page will be generated with each request. We use getServerSideProps, called by the domain controller on each invitation, to fetch and pass data to the page. It enables you to quickly keep updating and only update elements that have been altered and reintroduce that element. CSS support is also built into Next.js. StylesSheets can be applied globally by importing the styles.css file into pages/ app.js. Styles.css will now be applied to all project components. Next.js means allowing us to import node module stylesheets which can be used wherever in your implementation.</p>
        <p>Image optimization is also available with Next.js company. This is lazy picture loading, which means that pictures have been loaded based on the viewport. The images are loaded based on what we see first on the depicted page, and then they are loaded as we scroll down. Our construction time is not counted against us. It also gives us access to an incorporated TypeScript experience. In additament to ES6 features, Next.js allows you to use the most recent JavaScript features. It also enables us to create an API by utilizing API paths. Any file within Pages/API will be treated as an API endpoint rather than a carrier and served as server-side packages.</p>
        
       </div>
       <div className="container">
        <h1>Conclusion</h1>
        <p>Next.js company is a React framework extension that allows quick, server-side rendering of data-heavy products. While many conventional React applications utilize customer rendering, Next.js defies convention by utilizing server-side rendering to create a superior product. This blog is set up as Next.js 101 to quickly see what, why, and how. It is a preliminary thread for many forthcoming blogs and can assist the developer community in using Next.js to complete a project more quickly. If you get stuck, you can always attain out to a companion, such as ZealousWeb, and that we can help you finish this project in the shortest amount of time possible.</p>
       </div>
       <Contact/>
       <Footer/>
        </>
    )
}

export default Nextjs
