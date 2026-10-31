import BlueText from "./BlueText"
import kitchenImg from '../Img/About-Kitchen.jpg';
const Achievments = () => {
    return(
        <>
        <div className="AboutFP">ACHIEVEMENT</div>
        <p className="quote AboutQuote">interior customization with Danaanz, best quality with professional workers</p>
        <div className="AchievmentDrop">
        <img src={kitchenImg} alt=""  className="KitchenImg2"/>
        <BlueText/>
        </div>
        </>
    )
}
export default Achievments