const About = () => {
    return(
        <>
        <section>
        <div className="AboutFP">ABOUT</div>
        <div className="quote">“We're one of the best furniture agency. Prioritizing customers <br /> and making purchases easy are the hallmarks of our agency.”</div>
        <div>
        <div className="IdkHowName">
            <div className="Content">
            <img src="../src/Img/CeoPhoto.png" alt=""  className="CeoPhoto"/>
            <div className="TextContent">
                <p className="Author">Arga Danaan</p>
                <p className="position" >CEO of Dananz</p>
            </div>
            </div>
        </div>
        <div className="AroundImg">
        <p className="TextAbout">Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
        <button className="BtnMore"><p>Learn More</p></button>
        </div>
        <img src="../src/Img/Kitchen2.jpg" alt="" className="KitchenImg2"/>
        
        </div>

        
        </section>
        </>
    )
}
export default About