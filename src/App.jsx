
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/About';
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
import Photoshop from './pages/technologies/photoshop';
import Php from './pages/technologies/Php';
import Python from './pages/technologies/Python';
import Ql from './pages/technologies/Ql';
import ReactNative from './pages/technologies/ReactNative';
import View from './pages/technologies/View';
import WebFrameWork from './pages/technologies/WebFrameWork';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
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
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;