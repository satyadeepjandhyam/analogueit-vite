import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Handyman.png'
import Footer from '../../components/footer/footer'
function HandyManApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>
Availability Of Worth Full Handyman Service With One-Click Download</h1>
                    <p>All your house maintenance cannot be carried by ourselves. So we are in the need of handyman service for all the work to be done. But in such a modern world, it’s very difficult to search an offline serviceman. For all such people, a handyman service application development is ready to serve with one click from your smart phone</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>If you want the work to be done well then, go for a better customizing handyman service application development company. We are one of the leading app development companies that is helping the business module to develop the needed features app and also, the handyman app development cost will be reasonable from us. Here all features according to the entrepreneurs are designed in well-being manner which will easy to use by the user. It is customized with amazing features like availability of the handyman, updated notification through mail or message, numerous payment options, geo-tracking, searching the required specialist, easy cancelation or change of timings of the service, accept or ignore the invitations, and lots more. Here all the providers are verified by lifetime license.</p>
            <p>The user of this application can refer this to their friends or families and earn rewards. By keeping the view of the user or provider privacy log in can be attempted only through OTP of the registered mobile number. All the issues and support can be provided with the all-time available customer service. These applications will surely attract the customers because of its offers and coupons. The analytics of this service can be easily calculated with available history and the number of orders to get overall gross.</p>
            <p>As this application is following the cancelation policy and the refund will also be easily initiated. Users can also track the live location of the handyman and the vice versa. Working of this app is designed in an easy way manner with a simple download, registration, verification with the required information, search the service needed, a search of the handyman availability nearest you, then booking according to your time, payment will be processed, then the user can rate and review according to the experience of the service. This app will be available for both users and providers differently which can be easily downloaded from Google play and app store. This app is available for all the android, iOS, and website mobile users. Now entrepreneurs get ready to earn hugely from the most demanded service of the market.</p>
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default HandyManApp
