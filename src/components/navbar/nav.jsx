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
<header id="header" className='fixed-top Headder bg-primary m-0 p-0'>
  <div className="container-fluid d-flex align-items-center justify-content-evenly  gap-5 p-0 m-0">
  <div className="logo">
      
    <a className='w-10 h-10' href="index.html"><img className='img-fluid' src={logo1} alt='home' /></a>
  
  </div>
  <nav id="navbar" className="navbar navbar-expand-lg">
    <ul className='navbar-nav gap-4'>
      <li className="nav-item p-1 "><NavLink activeStyle="active" className=' nav-link d-flex flex-column align-items-center justify-content-center text-white' to={"/"}><BiSolidHome className='icon_i h3'/>Home</NavLink></li>
      <li className="nav-item p-1"><NavLink className=' nav-link d-flex flex-column align-items-center justify-content-center text-white' to="/about" ><BiSolidInfoCircle className='icon_i h3'/> About</NavLink></li>
      <li  className="dropdown nav-item p-1" >
        <a href="#" className='nav-link d-flex flex-column align-items-center justify-content-center text-white'><BiSolidCog className='icon_i h3'/> <span>Services</span> </a>
        <ul className="showDiv1">
          <li><NavLink to="/Uiuxdevelopment" >UX/UI Development</NavLink></li>
          <li><NavLink to="/Webdevelopment">Web Development</NavLink></li>
         
          <li><NavLink to="/MobileAppdevelopment">Mobile Development</NavLink></li>
          <li><NavLink to="/digitalmarketing">Digital Development</NavLink></li>
        </ul>
      </li>
      <li className="nav-item p-1 dropdown">
        <a href="#" className='nav-link d-flex flex-column align-items-center justify-content-center text-white'><BsGlobe className='icon_i h3'/> <span>Technologies</span> </a>
        <ul className="showDiv2">
          <div >
          <li><NavLink to={"/adobexd"}>Adobe XD</NavLink></li>
          <li><NavLink to="/angulardev">Angular Development</NavLink></li>
          <li><NavLink to="/aws">AWS</NavLink></li>
          <li><NavLink to="/photoshop">PHOTOSHOP</NavLink></li>
          <li><NavLink to="/python">PYTHON</NavLink></li>
          <li><NavLink to="/java">JAVA</NavLink></li>
          <li><NavLink to="/figma">FIGMA</NavLink></li>
          <li><NavLink to="/gcp">GCP</NavLink></li>
          <li><NavLink to="/microsoftazure">Microsoft Azure</NavLink></li>
          </div>
          <div>
          <li><NavLink to="/nextjs">NextJs</NavLink></li>
          <li><NavLink to="/nodejs">NodeJs</NavLink></li>
          <li><NavLink to="/reactnative">React Native </NavLink></li>
          <li><NavLink to="/nosql">NoSQL (MongoDB)</NavLink></li>
          <li><NavLink to="/php">PHP</NavLink></li>
          <li><NavLink to="/ql">Oracle, MySql, SqlServer</NavLink></li>
          <li><NavLink to="/viewjs">Vue JS</NavLink></li>
          <li><NavLink to="/webframework">Web Framework</NavLink></li>
          </div>
        </ul>
      </li>
      <li className="dropdown nav-item p-1">
        <a className='nav-link d-flex flex-column align-items-center justify-content-center text-white' href="#"><BiSolidLayer className='icon_i h3'/> <span>Our Products</span> </a>
        <ul className="showDiv2">
          <div>
          <li><NavLink to="/Ecommerce">E-Commerce Apps</NavLink></li>
          <li><NavLink to="/Entertainment">Entertainment App</NavLink></li>
          <li><NavLink to="/FlowerDelivery">Flower Delivery App</NavLink></li>
          <li><NavLink to="/FoodDelivery">Food Delivery App</NavLink></li>
          <li><NavLink to="/Fundrasing">Fundraising App</NavLink></li>
          <li><NavLink to="/game">Game App</NavLink></li>
          <li><NavLink to="/Grocery">Grocery Delivery App</NavLink></li>
          <li><NavLink to="/handyman">Handyman App</NavLink></li>
          <li><NavLink to="/HotelBooking">Hotel Booking App</NavLink></li>
          <li><NavLink to="/Jobs">Job Apps</NavLink></li>
          <li><NavLink to="/Laundry">Laundry App</NavLink></li>
          <li><NavLink to="/Logistics">Logistic App</NavLink></li>
          <li><NavLink to="/MarketingService">Marketing Service App</NavLink></li>
          </div>
         <div> <li><NavLink to="/MassageTherapist">Massage Therapist App</NavLink></li>
          <li><NavLink to="/Mechanics">Mechanics App</NavLink></li>
          <li><NavLink to="/Movers">Moviers App</NavLink></li>
          <li><NavLink to="/Pharmacy">Pharmacy App</NavLink></li>
          <li><NavLink to="/Plumbers">Plumbers Booking App</NavLink></li>
          <li><NavLink to="/RealEstate">Real Estate App</NavLink></li>
          <li><NavLink to="/Rental">Rental App</NavLink></li>
          <li><NavLink to="/SocialMedia">Social Media App</NavLink></li>
          <li><NavLink to="/Taxi">Taxi Booking App</NavLink></li>
          <li><NavLink to="/TowTruck">Tow Truck Apps</NavLink></li>
          <li><NavLink to="/Transportation">Transportation App</NavLink></li>
          <li><NavLink to="/Tution">Tution App</NavLink></li></div>
        </ul>
      </li>
      <li className='nav-item p-1'><a className='nav-link d-flex flex-column align-items-center justify-content-center text-white' href="portfolio.html"><FaComputer className='icon_i h3'/> Portfolio</a></li>
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
      <li className='nav-item p-1'><NavLink className='nav-link d-flex flex-column align-items-center justify-content-center text-white' to="/contactUs"><BiMobileAlt className='icon_i h3'/>Contact Us</NavLink></li>
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
