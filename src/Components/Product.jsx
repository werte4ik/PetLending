import Accor from "./Accordion"

const Product = () => {
    return(
        <>
        <section>
            <div className="AboutFP">PRODUCT</div>
            <p className="TextAbout TextProduct">Find the theme you want. If our choice of theme is not what you want, you can customize it as you <br /> want.</p>
            <div className="quote">Choose your <br /> product themes.</div>
            <div className="AccordionList">
            <Accor number = "01" name = "Vintage" DopClass = "AccBig"/>
            <Accor number = "02" name = "Minimalist" DopClass = "AccBig"/>
            <Accor number = "03" name = "Modern" DopClass = "AccBig"/>
            <Accor number = "04" name = "transitional"  DopClass = "AccBig"/>
            </div>
        </section>
        </>
    )
}  
export default Product