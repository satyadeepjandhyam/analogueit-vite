import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function PlumbersBookingApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>One-Click Will Serve You With All The Plumber Manpower Need</h1>
                    <p>The availability of plumber service according to your schedule is now going digital. One Plumber service application development in your smart phone helps to avoid rescheduling words of you known plumbers. This concept of plumber service is the perfect idea for the entrepreneurs to compete in the business market. A number of plumber service app development companies are trying to give their best, and we are one among the best. Even with us no need to worry about plumber app development cost as it will be very affordable as per the market view.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Take your sight over its attractive features like easy download and registration, plumbers availability, plumber verified profile, scheduling time according to our availability, updated notifications through mail or message, preferred payment option from the given options, geolocation for both plumber and customer, specialist plumber search, book or cancel service, analytics calculations based on the orders, etc. Service providers are fully verified and covered with a lifetime license.</p>
            <p>User’s privacy is the important view from the app so, as per this, they can log in with OTP authentication to their respective mails or mobile number. As the user of this application, they can gain earn by referring and earning their friends. If the one is having any issue or problem can be easily resolved with the app supportive customer service. Service includes online geo-tracking, cancel or change the schedule, contact of the plumber, order history, user and plumber profile, and review and ratings of the users after the service. Before using their app one can see the demo of its working procedure.</p>
            <p>This application is available for android, website, and iOS. This app works in a simple manner with easy download, registration, selecting service, selecting specialized plumber, scheduling the time, and then ratings & reviews after the service. Here cost will be calculated according to the service and also the plumber need. This application will be provided for both users and providers differently. It can be easily downloaded from Google Play or App Store. Now entrepreneurs get ready to earn in a smart way according to the trend of the market business.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default PlumbersBookingApp
