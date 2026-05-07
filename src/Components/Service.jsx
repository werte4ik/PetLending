import Accor from "./Accordion"
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
        <img src="../src/Img/service-section-image.jpg" alt="" className="KitchenImg2 LivinRoomImg" />

        </>
    )
}
export default Service