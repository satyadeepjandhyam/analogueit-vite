import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function MarketingApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Now a day’s Business Marketing has going Digitally as per the present trend of the Generation</h1>
                    <p>As the demand of smart phone increased hugely and also the work schedule of a person is becoming more busy. So the use of shopping and almost any buying is going through online. Taking this as benefit vendor decided to plan their business via online. Developers also thought to add a bit more support for business with marketing services application development.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Many marketing service app development companies following this newest strategies of development to server their clients. We are also one of them who is providing quality based product with less marketing service app development cost. There are many such applications which are named as digital marketing services, mobile app marketing services, etc. Such apps help business vendors to increase traffic, idea of marketing strategies, promotion, etc.</p>
            <p>This is designed with attractive services to increase traffic for business like SEO, content adding, competitive analysis, face book advertisement, Linkedin advertisement, brand awareness, pay for the click, video advertisement, etc. There are many strategies followed by this application to improve the marketing business like targeting audience, optimization, newest strategies, analytics, etc. This application stands as a additional support for the mobile business market. Your whole page set up is managed with one click application. It also brings the audience and updates them through email. Every step of the business should be taken a step ahead to the profit. If you believe the same then go for this application and also you can let us know your thoughts so that we can help you to grow wider in your business.</p>
            <p>All your customization requirements can be given so much of importance here. This application is given much privacy concern so the log in can be attempted only through registered mobile number or email id. Here, every customer queries and need is served with best customer support. This application is available for both android, and iOS application which can be downloaded from Google store & Apple store. Wt else is needed for your business to reach the profit scales. Entrepreneurs get ready to give best services to the market with this application.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default MarketingApp
