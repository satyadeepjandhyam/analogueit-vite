import React from 'react'
import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import foodDelevery from '../../assets/ourProducts/FoodDelivery.png'
function FoodDeleveryApp() {
    return (
        <>
        <Nav/>
        <div className="container d-flex align-content-center justify-content-center">
            <div className="row">
                <div className="col-4">
                    <img src={foodDelevery} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                    <h1>Bring Demanded Food Delivery App Like Zomato, Swiggy, Food Panda, etc.</h1>
                     <p>Get a better technical problem solver for yummylicious food. Your sales revenue on cravings are fulfilled by going with food delivery application development. Make people order tasty food online and get them delivered at their door steps with a simple food delivery application service. No need to worry hugely for food delivery application cost as everything is here available in a budget way.</p>
                </div>
            </div>
        </div>
        <div className="container">
        <p>Your business on food delivery service can be fulfilled with our food delivery app development company. App feature will provides you all the food menu that will be displayed on your smart phone easily by using preferred application. All online food delivery services are providing special features to satisfy their customers. Here you can track your food order through GPS location, get updated through mails, messages, push up notification regarding offers, special services etc. They will allow ratings & reviews of the customer which will help other customer to know before ordering.</p> 
        <p>Having any issue will be easily solved with their best customer service. Also this application reviews their performance up to date by monitoring number of deliveries, orders, delayed orders, etc. Every technical update will come with new feature to compete with market competitors. With one click you can go digital to bring tasty food from your favourite restaurant. Even in this pandemic don’t stop your cravings as all delivery agents are following hygiene measures for your safety.</p>
        <p>Before reaching food to you delivery agent will make sure to sanitize his hands, and his temperature is checked, and he will never forget to wear mask along with maintaining social distance. Even present situation made many employees to work from home by sitting longer time with hunger. For those hard workers this online food service is food app solutions. Any miss leading delivery of your favourite dishes will be paid back when you will show proper proof. Planning to earn profits with food delivery application for your hunger needs? Then, select any application from here to get started.</p>

         </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default FoodDeleveryApp
