import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function TransportationApp() {
    return (
        <> <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Leading Application For Alternative Of Public Transportation</h1>
                    <p>Present today world is demanding personal transportation for their unique professions and business. For those ones this technical application is ready to serve. Working online transportation development will help the business module to gain more and more profit sales. Make your mind pleased by hearing affordable transportation application development cost from us.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Present today world is demanding personal transportation for their unique professions and business. For those ones this technical application is ready to serve. Working online transportation development will help the business module to gain more and more profit sales. Make your mind pleased by hearing affordable transportation application development cost from us.</p>
            <p>These applications are coming with unique features like money calculation, adding additional needs, time tracking, easy navigation, route map tracking, and whatnot. Also, you can cancel the ride according to your schedule. This application helps you to connect with regularly updated deals through emails and push up notification.</p>
            <p>Present latest transportation technology & services are coming forward with many strategies in such a case this technical application will help you to compete well in the market. These applications are not only innovative in the market but also play a secure role for their customers. If you are using an online transport service via an app definitely you will be on the side of savings as everything will come under affordable and seasonal offered prices. Even a worry of seat availability will be failed here as only limited passengers are allowed. Hearing the present Corona crisis having their own transport will surely an advantage for everyone. Every business needs a little support to grow which is surely this application. Start at this point to grow in an online transportation service with ongoing application. If you are in the search of best transportation application development company then we are ready to serve you customized app with many advantages.</p>
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default TransportationApp
