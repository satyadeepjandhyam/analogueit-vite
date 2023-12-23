import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function TwoTruckApp() {
    return (
        <> <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Tow Truck Needs To Be Filled With One Application Download</h1>
                    <p>Now there is the best application to serve you customers with tow trucks who are in need of this. After your search, you will get to know the leading tow truck service application development company and for sure, and also happily we can guess that we will be one among the one. Entrepreneurs can also go with the tow truck application development idea to grow in their business.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>The traffic search for such an application will let us know the importance of tow truck service. So if you are planning to go with this concept and worried about the tow truck service app development cost then get this app from our company at an affordable price. Users can go by watching a demo of the application before downloading the app.</p>
            <p>This app works simply with easy registration, booking service, schedule the try, and the app will help the customers according to their needs. After this, a commission will be added to the trucker and also entrepreneur. This application is customized with unique features like trucker availability, trucker profile, schedule the own time, updated notifications, live location, and easy specialist search.</p>
            <p>Here you can cancel or change the time of service according to your availability. Truckers can easily calculate their analytics by the number of orders. By this application, no need to worry for the safety as all the providers are verified with the license. All your issues and questionnaires are easily resolved by their customer support team. Making mind for customer safety here every login is attempted with OTP verification.</p>
            <p>The payment feature is designed with a number of payment options. User and provider can download their application from Google play store and App store. This application is available for android, iOS, and website. By regular use of the app, you will get many offers and coupons. Users can add money to their wallets, check the available balance, and can pay during their orders. This service is fare for all users without bargain which is calculated depending upon the distance and load. Business modules get ready to reach success with a one-click application.</p>    
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default TwoTruckApp
