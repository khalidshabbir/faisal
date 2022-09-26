import { BrowserRouter as router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Contactus from './Components/Contactus/Contactus'
import Aboutus from './Components/Aboutus/Aboutus';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Portfoliodetails from './Components/Portfolio/Portfoliodetails';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
   <>

  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<Aboutus />} />
        <Route exact path="/contact-us" element={<Contactus />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/portfoliodetails" element={<Portfoliodetails />} />
      
      </Routes>


   </>
  );
}

export default App;
