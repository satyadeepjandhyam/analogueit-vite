import Nav from '../../components/navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import "../../css/technologies.css"
import img3 from"../../assets/technologies/banner1.png"

function EcommerceApp() {
    return (
        <>
        <Nav/>
        <div className="tech-container d-flex align-content-center justify-content-end">
        <div className="container">
                <div className="row">
                    <div className='col-4'><img src={img3} alt="img" /></div>
                    <div className='col-8 d-flex flex-column align-content-center justify-content-center'>
                        <h1>              
                        Create A Digital Experience For The World From Their Smart Phone
                        </h1>
                        <p>Trend for online shopping is increasing day by day. The need of clothes to electronics everything can be shopped from online stores. For this busy world this ecommerce platform is one of the plus point to lead their lives in a peaceful way. There are many ecommerce mobile apps. Technicians are working hard for ecommerce application development. There are many ecommerce application development companies who are working hard to customize client requirements.</p>
                         </div>
                </div>
            </div>
        </div>
        <div className="container">
            <p>One among the all we are also providing quality mobile app with less ecommerce application development cost. Have a look on its features like numerous sellers one store, seller profile, subscription offers, item acceptance, managing customers, shipping management, offers, commissions, etc. Before going to download this application one can have its demo to get a quick view. There are many ecommerce sites like clothing, electronics, coupons, fruits, groceries, lots more. Numerous payment options are available from which user can select according to his preferred one</p>
            <p>This application is having filter option which will help the user for effort less shopping. Having any issue or any queries one can contact to their customer service. There are many ecommerce business applications like Amazon, Flip kart, Alibaba, Woot, Fancy, Yoink, etc. In this many application is designed with cancellation of the orders and refund policy. Each app is designed with its own features. This ecommerce business platform helps many vendors to sell their products online. In ecommerce business delivery of products can be attempted with in short promised time. Mainly customer satisfaction plays a huge role here. After delivery of the product customer can give ratings and reviews according to the product experience. Visiting number of shops for one product is time consuming and also more pollution.</p>
            <p>No need of additional space for the sellers to sell their products. Also, this platform provides very less and cost effective products. Its offers, coupons and special discounts will surely attract the customers to buy online. With this application user can get updated information regarding the site. When the world wants to travel digitally then business module why don’t you grab this offer? Get on this better concept to grow your business wider and wider.

</p>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default EcommerceApp
