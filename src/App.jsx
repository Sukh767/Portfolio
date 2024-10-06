import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About/About"
import Experience from "./component/Experience"
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import PortFolio from "./component/PortFolio"
import { Toaster } from 'react-hot-toast';
import "./App.css"

const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
    </>
  )
}

export default App
