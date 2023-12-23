import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function RealestateApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>Go Digital With Real Estate Online Application Like Zillow & Trulia</h1>
                    <p>The present world is demanding digital surfing, searching, and browsing for all your wants and works. As per the view a step forward by the real estate app technicians for searching properties according to type, location, area, etc. This can be moved forward by customizing real estate application development. With this application, you can get on the smart way of browsing and searching properties that will come within your budget.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>No need to worry for real estate app development cost as you can get here with in your affordable range. We are one of the leading real estate application development companies. Also, easy contact with the seller and buyer is one of the best features of this application. Here you can sell, rent, and buy anything from your comfort place</p>
            <p>Avoiding broker is also added to the list of advantages of online real estate service applications. By seeing the images we can easily make our choice. Using this application will save not only your time but also makes you free from the bundle of paper works. Visiting and getting an idea of overall listed properties in one place is what the present world needs.</p>
            <p>By using this application you can get to know about all the deals and terms along with conditions that help you to make a quick decision regarding the property. Online real estate app will let you know regarding newly updated prices and lots more. Online real estate application features are designed in a customer satisfaction manner like location or property map, saving your liked option, online documents, and lots more. A go-to application for real estate service which is supported in all androids, iOS phones, windows, tablets, etc. Isn’t this great to hear? We need only one application with internet to be part of this online real estate business.</p>
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default RealestateApp
