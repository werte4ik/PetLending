import Mat1 from "../Img/Mat1.jpg"
import Mat2 from "../Img/Mat2.jpg"
import Mat3 from "../Img/Mat3.jpg"
const Material = () => {
    return(
        <>
        <section className="MaterialSection">
            <div className="MaterialImgs">
                <div className="MaterialImg2"><img src={Mat2} alt="" /></div>
                <div className="MaterialImg3"><img src={Mat3} alt="" /></div>
            </div>
           
           <div className="AboutFP AnotherMargin MaterialFullWidth">MATERIAL</div>
            
            <div className="Images">
                <div className="MaterialImg1">
                <img src={Mat1} alt="" />
                </div>
           </div>
           
           <p className="AccText MaterialText MaterialFullWidth">choice of materials for quality furniture.</p>
           <p className="TextAbout TextMaterialMini MaterialFullWidth">You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
            <button className="BtnMaterial MaterialFullWidth">See Materials</button>
        </section>
        </>
    )
}
export default Material