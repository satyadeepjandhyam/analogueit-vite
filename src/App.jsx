
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import AdobeXD from './pages/technologies/AdobeXD';
import Aws from './pages/technologies/Aws';
import Angular from './pages/technologies/Angular';
import Figma from "./pages/technologies/Figma";
import Gcp from './pages/technologies/Gcp';
import JavaPage from './pages/technologies/JavaPage';
import MicrosoftAzru from './pages/technologies/MicrosoftAzru';
import Next from './pages/technologies/Next';
import NodeJs from './pages/technologies/Nodejs';
import NoSqlDb from './pages/technologies/NoSqlDb';
import Photoshop from './pages/technologies/Photoshop';
import Php from './pages/technologies/Php';
import Python from './pages/technologies/Python';
import Ql from './pages/technologies/Ql';
import ReactNative from './pages/technologies/ReactNative';
import View from './pages/technologies/View';
import WebFrameWork from './pages/technologies/WebFrameWork';
import EcommerceApp from './pages/our products/EcommerceApp';

// service imports
import Uiuxdesign from './pages/services/Uiuxdesign';
import Webdevelopment from './pages/services/Webdevelopment';
import MobileApp from './pages/services/MobileApp';
import ScrollToTop from './components/ScrollToTop';
import DigitalMarketing from './pages/services/DigitalMarketing';
//our products imports
import EntertainmentApp from './pages/our products/EntertainmentApp';
import FlowerDelivery from './pages/our products/FlowerDelevary';
import FoodDeleveryApp from './pages/our products/FoodDeleveryApp';
import FundraisingApp from './pages/our products/FundraisingApp';
import GameApp from './pages/our products/GameApp';
import GroceryDeliveryApp from './pages/our products/GroceryDeliveryApp';
import HandyManApp from './pages/our products/HandyManApp';
import HostelBookingApp from './pages/our products/HostelBookingApp';
import JobApps from './pages/our products/JobApps';
import LaundryApp from './pages/our products/LaundryApp';
import LogisticApp from './pages/our products/LogisticApp';
import MarketingApp from './pages/our products/MarketingApp';
import MassagTerapist from './pages/our products/MassagTerapist';
import MechanicsApp from './pages/our products/MechanicsApp';
import MoviersApp from './pages/our products/MoviersApp';
import PharmacyApp from './pages/our products/PharmacyApp';
import PlumbersBookingApp from './pages/our products/PlumbersBookingApp';
import RealestateApp from './pages/our products/RealestateApp';
import RentalApp from './pages/our products/RentalApp';
import SocialMediaApp from './pages/our products/SocialMediaApp';
import TaxiBookingApp from './pages/our products/TaxiBookingApp';
import TransportationApp from './pages/our products/TransportationApp';
import TutionApp from './pages/our products/TutionApp';
import TwoTruckApp from './pages/our products/TwoTruckApp';

function App() {
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/adobexd' element={<AdobeXD/>} />
        <Route path='/aws' element={<Aws/>}/>
        <Route path='/angulardev' element={<Angular/>}/>
        <Route path='/figma' element={<Figma/>}/>
        <Route path='/gcp' element={<Gcp/>}/>
        <Route path='/java' element={<JavaPage/>}/>
        <Route path='/photoshop' element={<Photoshop/>}/>
        <Route path='/python' element={<Python/>}/>
        <Route path='/nextjs' element={<Next/>}/>
        <Route path='/nodejs' element={<NodeJs/>}/>
        <Route path='/reactnative' element={<ReactNative/>}/>
        <Route path='/php' element={<Php/>}/>
        <Route path='/microsoftazure' element={<MicrosoftAzru/>}/>
        <Route path='/viewjs' element={<View/>}/>
        <Route path='/Webframework' element={<WebFrameWork/>}/>
        <Route path='/ql' element={<Ql/>}/>
        <Route path='/nosql' element={<NoSqlDb/>}/>
        {/* routes for our products */}
        <Route path='/Ecommerce' element={<EcommerceApp/>}/>
        <Route path='/Entertainment' element={<EntertainmentApp/>}/>
        <Route path='/FlowerDelivery' element={<FlowerDelivery/>}/>
        <Route path='/FoodDelivery' element={<FoodDeleveryApp/>}/>
        <Route path='/Fundrasing' element={<FundraisingApp/>}/>
        <Route path='/game' element={<GameApp/>}/>
        <Route path='/Grocery' element={<GroceryDeliveryApp/>}/>
        <Route path='/handyman' element={<HandyManApp/>}/>
        <Route path='/HotelBooking' element={<HostelBookingApp/>}/>
        <Route path='/Jobs' element={<JobApps/>}/>
        <Route path='/Laundry' element={<LaundryApp/>}/>
        <Route path='/Logistics' element={<LogisticApp/>}/>
        <Route path='/MarketingService' element={<MarketingApp/>}/>
        <Route path='/MassageTherapist' element={<MassagTerapist/>}/>
        <Route path='/Mechanics' element={<MechanicsApp/>}/>
        <Route path='/Movers' element={<MoviersApp/>}/>
        <Route path='/Pharmacy' element={<PharmacyApp/>}/>
        <Route path='/Plumbers' element={<PlumbersBookingApp/>}/>
        <Route path='/RealEstate' element={<RealestateApp/>}/>
        <Route path='/Rental' element={<RentalApp/>}/>
        <Route path='/SocialMedia' element={<SocialMediaApp/>}/>
        <Route path='/Taxi' element={<TaxiBookingApp/>}/>
        <Route path='/Transportation' element={<TransportationApp/>}/>
        <Route path='/Tution' element={<TutionApp/>}/>
        <Route path='/TowTruck' element={<TwoTruckApp/>}/>
        
        {/* <Route path='/Ecommerce' element={<}/> */}
        {/* our services */}
        <Route path='/Uiuxdevelopment' element={<Uiuxdesign/>}/>
        <Route path='/Webdevelopment' element={<Webdevelopment/>}/>
        <Route path='/MobileAppdevelopment' element={<MobileApp/>}/>
        <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;