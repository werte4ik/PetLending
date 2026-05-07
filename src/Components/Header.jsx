import Logotip from "../Img/Logotip.png"

const Header = () => {

    return(
    <> 
    <header className="Header">
        <img src={Logotip} alt="" className="logotipHeader"/>
        <div className="headerText">
            <p className="headerOptions">Home</p>
            <p className="headerOptions">About Us</p>
            <p className="headerOptions">Services</p>
            <p className="headerOptions">Our Teams</p>
            <button className="btnHeader">Contact Us</button>
        </div>
    </header>
    </>
    )
}
export default Header