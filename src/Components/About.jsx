import KitchenImg from "../Img/Kitchen2.jpg"
import CeoPhoto from "../Img/CeoPhoto.png"
const About = () => {
    return(
        <>
        <section data-aos="fade-up" data-aos-duration="1000">
        <div className="AboutFP">ABOUT</div>
        <div className="quote">“We're one of the best furniture agency. Prioritizing customers <br /> and making purchases easy are the hallmarks of our agency.”</div>
        <div>
        <div className="IdkHowName">
            <div className="Content">
            <img src={CeoPhoto} alt=""  className="CeoPhoto"/>
            <div className="TextContent">
                <p className="Author">Arga Danaan</p>
                <p className="position" >CEO of Dananz</p>
            </div>
            </div>
        </div>
        <div className="AroundImg">
        <p className="TextAbout">Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
        <button className="BtnMore"><p>Learn More</p></button>
        </div>
        <img src={KitchenImg} alt="" className="KitchenImg2"/>
        
        </div>

        
        </section>
        </>
    )
}
export default About