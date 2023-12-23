import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function PharmacyApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Move Your Pharmacy Business Online To Serve Better</h1>
                    <p>Our modern world is in a run of busy and heavy schedule. Their life is not even giving a bit of time to buy medicine, supplements and health care needs. Also buying time period is a big headache of visiting the store regularly. By this thought developers worked on medicine delivery application development. Many Pharmacy service application development companies are working for designing this app. Even we are also trying to serve the best with less pharmacy app development cost.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Trend of everything can be changed but the need of medicines will never run out. So this is the best concept to run for profits. Have a look over its features like simple registration, multiple payment options, easy search, prescription uploading, status tracking, order history, book in advance, etc. Here you can cancel the order before dispatch. All issues and help service can be served greatly with their highly responsible customer support.</p>
            <p>One can refer this app to their friends or families and earn rewards. Also advance booking of the medicine, and booking of repeated orders features is also available. This app works very simple manner with easy registration, search according to the requirements, adding tablets to cart, checkout, then processing to the payment, and your medicine will be delivered at your door steps. After receiving the medicines you can add reviews and ratings according to the service.</p>
            <p>In regarding to the customer and pharmacist privacy concern the log in can be attempted through OTP registered mobile number or email id. This application is separately available for pharmacist, delivery agent, user and admin panel for entrepreneurs. This application is available for android, website, and iOS users which can be easily downloaded from Google play, and App store. There are many promo codes and offers which will attract the users for sure. This will be demanding application for many users which will surely help the entrepreneurs to earn lot. Present digital world will come forward to grab this opportunity and also to save time. So business module comes forward to grab this opportunity to get your customized pharmacy delivery application.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default PharmacyApp
