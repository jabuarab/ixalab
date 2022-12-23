import React from "react";
import style from "./InfoTarget.module.css";

function InfoTarget ({text,val}) {
    return(
        <div className={`${style.InfoTarget}`}>
            <h1>{text}</h1>
            <h2>{val}</h2>
        </div>
        
    )
}

export default InfoTarget;