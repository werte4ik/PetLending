import Logotip from "../Img/Logotip.png"
const Footer = () => {
    return(
        <>
        <footer>
        <div className="FooterStart">
        <h2 className="FooterText">let's discuss making your interior like a dream place!</h2>
        <div>
        <p className="FooterMini">Contact us below to work together to build your amazing interior</p>
        <button className="FooterBtn">Contact Us</button>
        </div>
        </div>
        <div className="EndPage">
            <img src={Logotip} alt="" className="logotipHeader"/>
            <div className="Email">
                <label className="EmailText">Enter  your email to get the laterst news</label>
                <input type="email" name="Email Address" id="EmailWtf" placeholder="Email Address" />
            </div>
            <p className="AccText MaterialText FotText">One of the best furniture agency.</p>

        </div>
        </footer>
        </>
    )
}
export default Footer