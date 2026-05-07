import { useState } from "react";

const Accor = (props) => {
    const button = document.querySelector(".Accordion");
    const Acoor = document.querySelector(".AccordionOpen");
    const [IsOpen, SetIsOpenn] = useState(false)
    return(
        
        
        <>
        <div className="ContentArc" onClick={() => SetIsOpenn(!IsOpen)}>
            <div className={`Accordion ${props.DopClass}`}>
            <p className="AccText">{props.number}</p> <p className="AccText">{props.name}</p> <p className={`AccText AccArrow ${!IsOpen ? '' : 'Rotate'}`}> ➜</p> 
        </div>
        <div className={`AccordionOpen ${props.DopClass} ${!IsOpen ? 'Accordionclose' : ''}`}>
            <p>the use of simple and limited elements to get the best effect or impression.</p>
        </div>
        </div>
        
        </>
    )
}
export default Accor