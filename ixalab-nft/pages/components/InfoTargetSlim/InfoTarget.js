import React from "react";
import style from "./InfoTarget.module.css";
import { AiOutlineEye  } from 'react-icons/ai';


function InfoTarget ({isOpen,mar,text,val,moreView, specialHeight}) {
    if(moreView == 't'){
        return(
            <div className={`${isOpen && style.smallwith} ${mar && style.marginLeft} ${style.InfoTargetAdd} ${style.floatContainer} ${specialHeight && style.specialHeight}`}>
                <AiOutlineEye className={`${style.iconEye}`}/>{val}
            </div>
        )
    }else{
        return(
            <div className={`${isOpen && style.smallwith} ${mar && style.marginLeft} ${style.InfoTarget} ${style.floatContainer} ${specialHeight && style.specialHeight}`}>
                <h1 className={`${style.textBoxTitle}`}>{text} {val}</h1>
            </div>
        )
    }
    
}

export default InfoTarget;