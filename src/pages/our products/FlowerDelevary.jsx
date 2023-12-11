import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img1 from"../../assets/technologies/banner1.png"

function FlowerDelivery() {
    return (
        <>
        <Nav/>
        <div className="tech-container d-flex align-content-center justify-content-end">
        <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img1} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>              
                        
                        Surprise Your Loved One With Their Favourite Flowers The World From Their Smart Phone
                        </h1>
                        <p>Every occasion can be wished with flowers of the theme. Different flowers are used to gift for different occasions. But visiting the florist and buying in such a busy life is somewhat problematic. Soto overcome this buying your favorite flowers made easy with one-click application</p>
                         </div>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Entrepreneurs can grab this best opportunity to serve the requirement with online flower delivery application development. Many flower delivery app development companies are in the trend to design this for their clients. We are also the one standing among them all but with the main aim of providing the quality</p>
            <p>and affordable flower delivery app development cost. Now surprise your closest one with their loved flowers. It is developed with many newest features like florist availability, scheduling the visit, an updated notification with message and mails, online tracking, florist profile, wanted florist shop, overall amount calculation, multiple languages, numerous payment options, etc. Here one can accept or reject the invitation</p>
            <p>The user and providers can log in only with the help of OTP from the registered mobile number or email id. Here all your queries and help can be served with professional customer service. Contact of the delivery person can be provided to the user for easy and convenient delivery. This application works very easily by a simple download, verified registration, then a search of needed flowers, selecting from a loved florist, then processing the payment, and your flowers will be delivered at preferred location</p>
            <p>Customers can give ratings and reviews according to their experience. Here all the providers are verified legally and with lifetime license. This application is available differently for users and providers which can be downloaded from Google Store and App Store. This application is available for android, iOS, and website users. One can chat and clear enquires here. All the analytics can be calculated easily with the previous order history for the overall gross. The application is allowing users to cancel the orders and also the refund policy. People will easily attract to this application because of its offers and coupons. Get ready business persons to grow your business wider with us.</p>
             </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default FlowerDelivery
