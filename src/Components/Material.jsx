const Material = () => {
    return(
        <>
        <section>
            <div className="MaterialImgs">
                <div className="MaterialImg2"><img src="../src/Img/Mat2.jpg" alt="" /></div>
                <div className="MaterialImg3"><img src="../src/Img/Mat3.jpg" alt="" /></div>
            </div>
           
           <div className="AboutFP AnotherMargin">MATERIAL</div>
            
            <div className="Images">
                <div className="MaterialImg1">
                <img src="../src/Img/Mat1.jpg" alt="" />
                </div>
           </div>
           
           <p className="AccText MaterialText">choice of materials for quality furniture.</p> 
           <p className="TextAbout TextMaterialMini">You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
            <button className="BtnMaterial">See Materials</button>
        </section>
        </>
    )
}
export default Material