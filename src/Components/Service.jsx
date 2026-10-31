import Accor from "./Accordion"
import ServiceImg from "../Img/service-section-image.jpg"
const Service = () => {
    return(
        <>
        <section>  
        <div className="AboutFP">SERVICE</div>
        <div className="quote">attractive furniture with the best quality.</div>
        <p className="TextAbout Service">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        </section>
        <div className="Accordions">
        <Accor number = "01" name = "Interior Design" DopClass = ""/>
        <Accor number = "02" name = "Consultant" DopClass = ""/>
        <Accor number = "03" name = "Construction Consultant" DopClass = ""/>
        </div>     
        <img src={ServiceImg} alt="" className="KitchenImg2 LivinRoomImg" />

        </>
    )
}
export default Service