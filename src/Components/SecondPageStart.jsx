import Img from "../Img/hero-about.jpg"
const AboutUsStart = (props) => {
        const Name = props.Name
        const description = props.description
    return(
        <>
        <div className="StartOfPages">
        <h1 className="StartOfPagesText">{Name}</h1>
        <p className="StartOfPagesMiniText">{description}</p>
        <img src={Img} alt="" />
        </div>
        </>
    )
}
export default AboutUsStart