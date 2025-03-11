import { Link, Outlet } from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav>
        <h1>logo</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/contact">contact</Link></li>
        
        </ul>
        </nav>

        <Outlet/>

        <footer>
            <h1>Footer Section </h1>
        </footer>
        </>
    )
}
export default Navbar