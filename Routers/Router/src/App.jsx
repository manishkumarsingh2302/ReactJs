import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Service from "./Service"
import Contact from "./contact"





function App(){
  return(
    <>
    <Navbar />
    <Routes>
      <Route  index element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>

      
   </Routes>
 
   </>
  )
}
export default App