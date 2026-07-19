import ServiceCard from "./serviceCard"

const ServiceSP = () => {
    return(
        <>
        <div className="AboutFP">SERVICE</div>
        <div className="quote">Why Choose Us</div>
        <p className="TextAbout Service">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        <div className="serviceCards">
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>      
        </div>
        
        </>
    )
}
export default ServiceSP