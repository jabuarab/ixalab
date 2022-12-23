import React from "react";
import style from "./ButtonCarrousel.module.css";
import { useRef } from "react";
import { AiOutlineArrowRight  } from 'react-icons/ai';


function ButtonCarrousel({imagesQueue}) {
    
    const image = useRef();
    var counter = 0;

    function changeImage() {
        console.log(imagesQueue.length)
        console.log(counter)
        if(counter == imagesQueue.length - 1){
            counter = 0;
            image.current.src = imagesQueue[counter].src;
        }else{
            counter++;
            image.current.src = imagesQueue[counter].src;
        }
    }

    return(
        <div className={style.flexRowContainer}>
            <img ref={image} src={imagesQueue[counter].src} className={style.image}></img>
            <button onClick={() => changeImage()} className={style.button}><AiOutlineArrowRight/></button>
        </div>
    )
}

export default ButtonCarrousel;