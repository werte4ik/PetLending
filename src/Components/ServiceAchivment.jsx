import ServicePhoto from "../Img/Service1photo.jpg"
const ServiceAchivment=()=>{
    return(
        <>
        <section className="ServiceAchivSection">
            <img srcSet={ServicePhoto} alt="" className="ServicePagePhoto" />
            <div>
            <p className="AccText">Interior design</p>
            <p className="TextAbout AchText">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
            </div>
        </section>
        </>
    )
}
export default ServiceAchivment