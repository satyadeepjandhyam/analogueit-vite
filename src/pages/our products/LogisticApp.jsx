import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function LogisticApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Moment Of Transfer Of Goods With One Click Applications</h1>
                    <p>Transfer of goods from one place to another place is consuming high price now. As per this view there are many applications developed to serve best for this service. In market there is trend of logistic service application development to grow wider. There are many logistic app development companies which are serving their clients to develop their customize apps. We are also one of them who are providing less and affordable logistic app development cost. Now goods service provider can manage their scales and business with less spending.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>As transpiring goods is needed to run the economy of the world, so surely this application will be used by many users. Take a look on this application features like easy login, search nearby moving service, manage bookings, estimation of shipping price, GPS tracking, numerous payment, updated notifications, feedback option, booking history, cancellation booking, etc.</p>
            <p>This application is differently designed for user, driver, and admin. This application is differently available for android, website, and iOS which can be easily downloaded from Google play store or App store. This application works simply with easy registration, then log in through mobile or email id, then proceed to the needed service and book the truck, later schedule the time, then proceed to payment, and then user can go for ratings and reviews after experiencing the service.</p>
            <p>All queries and support can be given much importance by solving them with high customer service. According to the user privacy policy the log in can be attempted only through the registered mobile number or email id. One can refer this application to their friends or families and earn rewards. This moving service will help all the good transfer to get cheaper service. Rescheduling and cancelling with refund policy is also one of the best features to attract the user. Also promo codes and offers will help this application to become more popular in the market. Ratings and reviews will help other user to know the service of the provider. Business module get this best concept to give tough competition for the competitors.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default LogisticApp
