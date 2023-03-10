import React from "react";
import style from "./InfoTarget.module.css";
import { AiOutlineEye  } from 'react-icons/ai';


function InfoTarget ({isOpen,mar,text,val,moreView, specialHeight}) {
    if(moreView == 't'){
        return(
            <div className={`${isOpen && style.smallwith} ${mar && style.marginLeft} ${style.InfoTargetAdd} ${style.floatContainer} ${specialHeight && style.specialHeight}`}>
                <AiOutlineEye className={`${style.iconEye}`}/>
                <h2>{val}</h2>
            </div>
        )
    }else{
        return(
            <div className={`${isOpen && style.smallwith} ${mar && style.marginLeft} ${style.InfoTarget} ${style.floatContainer} ${specialHeight && style.specialHeight}`}>
                <h1 className={`${style.textBoxTitle}`}>{text}</h1>
                <h2>{val}</h2>
            </div>
        )
    }
    
}

export default InfoTarget;