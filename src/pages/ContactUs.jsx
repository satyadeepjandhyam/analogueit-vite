import React from 'react'
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer"
import Nav from '../components/navbar/nav';
function ContactUs() {
    return (
        <>
        <Nav/>
            <Contact />
            <div className='container-fluid p-0 m-0 h-100 w-100'>
                <iframe className='h-100 w-100 p-0 m-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.26697531842!2d78.3843983!3d17.4445475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916ec5b747c3%3A0x30b57901255001ee!2sAnalogue%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1703570931409!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
