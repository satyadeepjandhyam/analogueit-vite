import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function LaundryApp() {
    return (
        <>
         <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>As we all know that clothing is one of the basic needs for human life</h1>
                    <p>so eventually cleaning is also mandatory. In recent times people hardly spend their time at homes because of office shifts and hectic work stuff. There is a gap between household works and office works which need to be covered up. To fill this gap Laundry App Development Services are introducing mobile application for all the users which help them to make their work faster. Through this application one can get things done easily without any time loss and additional hassle free experience</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Apart from this there are useful features like discounts, coupons and offers which will be applied on your payable amount. Now it is much more easy and simple in making savings at your budget. There are many Laundry Development Application Companies coming forward to introduce new features considering users requirements. Which indirectly makes profits for both customers and retailers by increasing the sale and happy moments for online shoppers? Washing clothes and drying them will almost take half of your day, so right now start using Laundry app and encourage yourself in other productive or entertainment stuff which cheers up</p>
            <p>Laundry app Development cost is also very less compared to other applications, all we do is just make a bridge between users and retailers which maintains smooth work flow. Just buy few clicks on your mobile applications make your clothes get clean only by sitting at home. It is also beneficial during this pandemic situation by staying at home. In future there will be more features added into this application like various categories, fast delivery, instant wash, during occasions, etc. Even charges are reduced according to seasonal times, festivals and bulk usage.</p>
            <p>The payment option is also safe and secure, where cash and delivery and online payments are available. With the help of swiping cards and wallets payment can be done very easily. Your payment details like credit card credentials, etc. will not be shared to third parties, hence they are highly secured. Just stay tuned to our Laundry Mobile app and make usage of all silent features & make great savings of your time and money. Entrepreneurs get ready to earn hugely with by buying this customized application from us.</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default LaundryApp
