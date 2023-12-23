import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function MechanicsApp() {
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
Digital Service For All Your Mechanics Needs</h1>
                    <p>We are one technical mechanical application development company for all your mechanical apps. Days are going digital for all the aspects and requirements. As a result, many companies are in the struggle to compete in the market. Entrepreneurs get ready to earn unique of thought of online mechanical app development. Now there no need to travel for long distances for your repair issues. There are many mechanic mobile application developments with the newest features to grow wider in the business market.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Every feature is designed in a manner to help the customers with smart phones anywhere. Their features include updated notifications through easy download and sign up, mail or message, scheduling the timings, availability of nearest mechanics, geo location, easy payment method, offers, maintaining the analytics view, etc. Have a look on the mechanic app development services like live tracking of nearest mechanics, easy conversation with the customer; cancel the booking, reviews from the customers, customer support, OTP verification, and lots more.</p>
            <p>This service works very simply with one sign up, finding perfect nearest mechanics, their contacts, and reviews after service, and then final online payment. Under one roof many mechanics are available. From this digital application, you can book service for engine mechanic, two-wheeler mechanic, truck mechanic, three-wheeler mechanic, and lots more. This app is available android, website, and iOS with easy download from Google play, and App store. Make your mindset clear by watching their live demo.</p>
            <p>Customer can also share their referral code with their friends for enjoying service with discounts and offers. Entrepreneurs can now easily avail this app to earn double profits. This application helps your customer to save time and also quality service from a specialized mechanic. This readymade customized mechanical app never share your personal details to third parties. Also, every customer can view the mechanic profile and specifications to meet their demands with the best quality. Also, admin dashboard availability is very comfortable to use with total control. People will definitely get attracted to this service because of mechanics worth full charge. When all these profits are coming in a single application then, why you have to wait more to start your business with this customized application? Get on the trend to earn more with an online mechanic app development service.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default MechanicsApp
