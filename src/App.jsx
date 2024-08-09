
import './App.css'


import HeroSection from './Components/HeroSection.jsx/HeroSection'
import SignUp from './pages/Registration/SignUp'
import Cart from './pages/Cart/Cart'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import MainfilterProductpage from "./Components/FilterProducts/MainfilterProductpage"
import Login from './pages/Registration/Login'
import ForgerPassOTP from './pages/Registration/ForgerPassOTP'
import MainCart from './pages/Cart/MainCart'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/filter" element={<MainfilterProductpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/maincart" element={<MainCart/>} />
        <Route path="/forgerpassotp" element={<ForgerPassOTP/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
