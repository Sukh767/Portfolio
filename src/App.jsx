import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About/About"
import Experience from "./component/Experience"
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import PortFolio from "./component/PortFolio"
import { Toaster } from 'react-hot-toast';
import "./App.css"
import Skills from "./component/Skills/Skills"
import Qualification from "./component/Qualification/Qualification"

const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Skills/>
    <Qualification />
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
    </>
  )
}

export default App
