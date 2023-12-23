import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function MoviersApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Get The Help Of Movers Hand To Move Your Precious Things With One Application</h1>
                    <p>Shifting from one place to another platform is so much irritating. If your moving includes all the household needs then surely it will be a troubleshooting workload on our head. To overcome this need technician planned for the moving company business plan. This application will surely a big support for all the movers need. Present market a number of movers application development companies are giving huge competition with their unique features. We are one of them who is trying a step harder than all companies to help the customers.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>This mobile-friendly online movers app development service will surely a worth full idea for all the customers. While moving your all expensive needs like mirror, glass furniture, TV, etc. Everything will be properly packed and shifted to the respective place without the occurrence of damage. They are providing this service with many new features like easy cancel or change of booking, contact of the driver, live geo-tracking, history of your bookings, adding reviews, creating and handling profile which will be visible to others, and lots more.</p>
            <p>Here all the service providers are verified with a licence. No need to worry for the security as you can log in only through OTP from the application. Also, every issue or any question from the customer can be resolved without any time taking. This mover's online application is having amazing service facilities like easy customer registration, numerous services, scheduling of the time, GPS tracking, updated notifications, numerous payment option, rating & reviews, etc.</p>
            <p>With the help of this application, entrepreneurs can earn a lot by giving huge competition to the competitors. All the movers’ service provider will come to one platform. They can easily create their account and start taking their orders. Movers will get commission after completion of the deal. Not only customers even the movers can also see each other profile, history, and live tracking. Movers will take all the responsibilities of your items and deliver them at the time. You can download this application easily from Google Play and App store for android, iOS, including websites.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default MoviersApp
