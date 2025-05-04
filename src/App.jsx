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
import ScrollUp from "./component/scrollup/ScrollUp"
import ProjectShowcase from "./component/ProjectShowcase"
import { DarkModeProvider } from "./context/DarkModeContext"

const App = () => {
  return (
    <DarkModeProvider>
    <div>
    {/* <Navbar/> */}
    <Home/>
{/*     <About/> */}
    <Skills/>
    <Qualification />
    <PortFolio/>
    <ProjectShowcase/>
    <Contact/>
    <Footer/>
    <ScrollUp />
    </div>
    <Toaster />
    </DarkModeProvider>
  )
}

export default App
