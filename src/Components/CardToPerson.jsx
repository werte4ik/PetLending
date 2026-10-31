import Personal1 from "../Img/Personal1.png"
const CardToPerson =  () =>{
    return(
        <div className="PersonalCard">
            <img src= {Personal1} alt="" className="PersonalPhoto"/>
            <div className="AboutPerson">
                <div className="Text">
                <p>Shoo Phar Dhie</p>
                <p>CEO</p>
                </div>
            </div>
        </div>
    )
}
export default CardToPerson