import React from 'react'
import { BiSolidHome,BiMobileAlt,BiSolidCog,BiSolidLayer,BiSolidInfoCircle } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import logo1 from "../../assets/logo_our1.png"
// import "../../css/style.css"
import "../../css/bootstrapstyles.css"
import {NavLink} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
function Nav() {
    return (
        <>
<header id="header" className='Headder bg-primary m-0 '>
  <div className="container-fluid d-flex align-items-center justify-content-between ">
  <div className="logo">
      
      <a className='w-10 h-10' href="index.html"><img className='img-fluid' src={logo1} alt='home' /></a>
  
  </div>
  <nav id="navbar" className="navbar navbar-expand-lg">
    <ul className='navbar-nav'>
      <li className="nav-item p-1"><NavLink className='nav-link d-flex flex-column align-items-center justify-content-center text-white' to={"/"}><BiSolidHome className='icon_i'/>Home</NavLink></li>
      <li className="nav-item p-1"><NavLink className='nav-link d-flex flex-column align-items-center justify-content-center text-white' to="/about" ><BiSolidInfoCircle className='icon_i'/> About</NavLink></li>
      <li  className="dropdown nav-item p-1" >
        <a href="#" className='nav-link d-flex flex-column align-items-center justify-content-center text-white'><BiSolidCog className='icon_i'/> <span>Services</span> </a>
        {/* <ul>
          <li><a href="uxuidevelopment.html">UX/UI Development</a></li>
          <li><a href="webdevelopment.html">Web Development</a></li>
         
          <li><a href="mobiledevelopment.html">Mobile Development</a></li>
          <li><a href="digitalmarketing.html">Digital Development</a></li>
        </ul> */}
      </li>
      <li className="nav-item p-1 dropdown">
        <a href="#" className='nav-link d-flex flex-column align-items-center justify-content-center text-white'><BsGlobe className='icon_i'/> <span>Technologies</span> </a>
        {/* <ul className="showDiv1">
          <li><a href="adobexd.html">Adobe XD</a></li>
          <li><a href="angulardev.html">Angular Development</a></li>
          <li><a href="aws.html">AWS</a></li>
          <li><a href="photoshop.html">PHOTOSHOP</a></li>
          <li><a href="python.html">PYTHON</a></li>
          <li><a href="java.html">JAVA</a></li>
          <li><a href="figma.html">FIGMA</a></li>
          <li><a href="gcp.html">GCP</a></li>
          <li><a href="microsoftazure.html">Microsoft Azure</a></li>
          <li><a href="nextjs.html">NextJs</a></li>
          <li><a href="nodejs.html">NodeJs</a></li>
          <li><a href="reactnative.html">React Native </a></li>
          <li><a href="nosql.html">NoSQL (MongoDB)</a></li>
          <li><a href="php.html">PHP</a></li>
          <li><a href="ql.html">Oracle, MySql, SqlServer</a></li>
          <li><a href="Vuejs.html">Vue JS</a></li>
          <li><a href="webframework.html">Web Framework</a></li>
        </ul> */}
      </li>
      <li className="dropdown nav-item p-1">
        <a className='nav-link d-flex flex-column align-items-center justify-content-center text-white' href="#"><BiSolidLayer className='icon_i'/> <span>Our Products</span> </a>
        {/* <ul className="showDiv">
          <li><a href="Ecommerce.html">E-Commerce Apps</a></li>
          <li><a href="Entertainment.html">Entertainment App</a></li>
          <li><a href="FlowerDelivery.html">Flower Delivery App</a></li>
          <li><a href="FoodDelivery.html">Food Delivery App</a></li>
          <li><a href="Fundrasing.html">Fundraising App</a></li>
          <li><a href="game.html">Game App</a></li>
          <li><a href="Grocery.html">Grocery Delivery App</a></li>
          <li><a href="handyman.html">Handyman App</a></li>
          <li><a href="HotelBooking.html">Hotel Booking App</a></li>
          <li><a href="Jobs.html">Job Apps</a></li>
          <li><a href="Laundry.html">Laundry App</a></li>
          <li><a href="Logistics.html">Logistic App</a></li>
          <li><a href="MarketingService.html">Marketing Service App</a></li>
          <li><a href="MassageTherapist.html">Massage Therapist App</a></li>
          <li><a href="Mechanics.html">Mechanics App</a></li>
          <li><a href="Movers.html">Moviers App</a></li>
          <li><a href="Pharmacy.html">Pharmacy App</a></li>
          <li><a href="Plumbers.html">Plumbers Booking App</a></li>
          <li><a href="RealEstate.html">Real Estate App</a></li>
          <li><a href="Rental.html">Rental App</a></li>
          <li><a href="SocialMedia.html">Social Media App</a></li>
          <li><a href="Taxi.html">Taxi Booking App</a></li>
          <li><a href="TowTruck.html">Tow Truck Apps</a></li>
          <li><a href="Transportation.html">Transportation App</a></li>
          <li><a href="Tution.html">Tution App</a></li>
        </ul> */}
      </li>
      <li className='nav-item p-1'><a className='nav-link d-flex flex-column align-items-center justify-content-center text-white' href="portfolio.html"><FaComputer className='icon_i'/> Portfolio</a></li>
      {/* <li><a href="team.html">Team</a></li> */}
      {/* <li><a href="blog.html">Blog</a></li> */}
      {/* <ul>
        <li><a href="#">UX/UI Development</a></li>
        <li><a href="#">Web Development</a></li>
        <li class="dropdown">
          <a href="#"
            ><span>Deep Drop Down</span>
            <i class="bi bi-chevron-right"></i
          ></a>
          <ul>
            <li><a href="#">Deep Drop Down 1</a></li>
            <li><a href="#">Deep Drop Down 2</a></li>
            <li><a href="#">Deep Drop Down 3</a></li>
            <li><a href="#">Deep Drop Down 4</a></li>
            <li><a href="#">Deep Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#">Mobile Development</a></li>
        <li><a href="#">Digital Development</a></li>
      </ul> */}
      <li className='nav-item p-1'><a className='nav-link d-flex flex-column align-items-center justify-content-center text-white' href="contact.html"><BiMobileAlt className='icon_i'/>Contact Us</a></li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle" />
  </nav>
  {/* .navbar */}
  </div>

   

</header>

        </>
    )
}

export default Nav
