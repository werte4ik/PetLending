import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/SecondPage';
import FirstPage from './Pages/FirstPage';
import Index from './Pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicesPage from './Pages/ServicesPage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import OurTeam from './Pages/OurTeam';
function App() {
useEffect(() => {
    Aos.init(); 
  },);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<FirstPage />} />
          <Route path="/AboutUs" element = {<AboutUs/>}/>
          <Route path="/Services" element = {<ServicesPage/>}/>
          <Route path="/OurTeam" element = {<OurTeam/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
