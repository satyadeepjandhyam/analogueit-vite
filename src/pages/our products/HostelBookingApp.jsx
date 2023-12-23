import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function HostelBookingApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Pre Plan Your Stay At Your Loved Destination</h1>
                    <p>Book your hotel stay before you reach the destination. Yes, it can be possible now with your android phone. Browse your favourite and affordable hotel with single click. All your tours and visits to a place stays can be pre planned in a simple way. Many developers are working hours to days to develop apps which are on the trend in market. Out of this all, hotel booking service application development is one of the best to grow in business market.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Many hotel booking app development companies are ready to design your needed app. Even we are on them who help you in customizing your needed app and also less hotel booking application development cost. It can be customized with very interesting features like easy registration, browse according to need, search according to price or amenities, numerous payment options, updated notifications, reviews, etc. This application is available separately for vendors, and customers. Everyone can download this application simply from the apple store or Google play store.</p>
            <p>All android, website, and iOS users can download this application easily. Here all the hotel service providers are verified with life time licence. This application works simply by easy registration, then searching according to the location price and amenities, then booking according to preferred one, processing to payment, then user can rate & review according to his experience. User can also refer this application for his friends and families to earn mentioned rewards. Ratings and reviews will help the other customers to know about the service of the bookings.</p>
            <p>Here 24 hours customer support is available to help the need and resolve their queries. According to the view of safety all the providers and customers can log in according to the provided mobile number. This application is legally protected by completing all the needed documentation. This application also allows you to cancel your bookings. Mainly its offers and coupons will attract users which is additional support for this application. Entrepreneurs get ready to launch your customized application to give best competition in the market. Surely this application will helps you to earn lot with best service.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default HostelBookingApp
