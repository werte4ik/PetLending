import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/SecondPage';
import FirstPage from './Pages/FirstPage';
import Index from './Pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<FirstPage />} />
          <Route path="/AboutUs" element = {<AboutUs/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
