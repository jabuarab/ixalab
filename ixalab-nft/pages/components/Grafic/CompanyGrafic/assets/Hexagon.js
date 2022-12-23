import React from "react";
import style from "./Hexagon.module.css";



function Hexagon({color}) {
    return(
        <div className={style.hoverHexagon} style={{height: "55px"}}>
            <svg width="60" height="68" viewBox="0 0 60 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0L59.4449 17V51L30 68L0.555136 51V17L30 0Z" fill={color} fill-opacity="0.9"/>
            </svg>
        </div>
    )
}

export default Hexagon;