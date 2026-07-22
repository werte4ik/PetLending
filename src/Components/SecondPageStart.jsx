const AboutUsStart = (props) => {
        const Name = props.Name
        const description = props.description
    return(
        <>
        <div className="StartOfPages">
        <h1 className="StartOfPagesText">{Name}</h1>
        <p className="StartOfPagesMiniText">{description}</p>
        <img src="../src/Img/hero-about.jpg" alt="" />
        </div>
        </>
    )
}
export default AboutUsStart