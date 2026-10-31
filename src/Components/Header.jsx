import Logotip from "../Img/Logotip.png"
import { Link } from "react-router"
const Header = () => {

    return(
    <> 
    <header className="Header">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}><img src={Logotip} alt="" className="logotipHeader"/></Link>
        <div className="headerText">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}><p className="headerOptions">Home</p></Link>
            <Link to="/AboutUs" onClick={() => window.scrollTo(0, 0)}><p className="headerOptions">About Us</p></Link>
            <Link to = "/Services" onClick={() => window.scrollTo(0, 0)}><p className="headerOptions">Services</p></Link>
            <Link to = "/OurTeam" onClick={() => window.scrollTo(0, 0)}><p className="headerOptions">Our Teams</p></Link>
            <button className="btnHeader">Contact Us</button>
        </div>
    
    </header>
    </>
    )
}
export default Header