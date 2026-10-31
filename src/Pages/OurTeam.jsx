import CardToPerson from "../Components/CardToPerson"
import Designers from "../Components/Designer"
import AboutUsStart from "../Components/SecondPageStart"
import ServiceSP from "../Components/ServiceSP"
const OurTeam = () =>{
    return(
        <>
        <AboutUsStart Name = "Our Teams" description ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
        <div className="AboutFP">Designer</div>
        <Designers/>
        <ServiceSP/>
        </>
    )
}
export default OurTeam