import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Grocery.png'
import Footer from '../../components/footer/footer'
function GroceryDeliveryApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Innovative Technical Application For Online Grocery Service</h1>
                    <p>The present world is filled with busy and hard workers who are trying to build their careers rapidly. In such a condition there will not be time for your grocery shopping. To overcome this grocery retailers are showing much interest in online delivery. A support for their service present market is on the trend of online grocery application development.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>The reason behind this is the shopper’s behaviour and interest towards grocery service app development . As an online grocery service is very simple & quick with lots of time-saving. Even grocery app development cost is less effective from our company. With all our client support we are in the leading grocery application development company</p>
            <p>You can order everything at a time by avoiding a number of stores visit. Buyers show much interest because of its advantages like coupons, easy application, membership offers, loyalty cards, and more. Easily you can be updated with its special prices and discounts through emails and message notifications. Paying delivery charges is better than paying hugely for taxis, auto-rickshaws, etc to visit the store. These online grocery service features are one of the reasons to attract customers.</p>
            <p>Take a look over it like easy search, tracking your order, a number of payment options, rating, feedback, also scheduling our delivery time, etc. Also, this pandemic raised a fear in us to go out and shop according to our needs. To overcome such a crisis this application is one of the best thought. Buying online also helps the people in calculating their overall budget. Only grocery sites will help the customer to track their month to month overall expenses with graphs. This will help you to manage your budget according to your lifestyle. Save money and save time by shopping from the best grocery applications to be safe at home.</p>
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default GroceryDeliveryApp
