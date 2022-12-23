import React, { useContext } from "react";
import AppContext from "../../context";
import style from "./ProductTarget.module.css";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

function ProductTarget ({widhtContainer,parcela}) {
    const context= useContext(AppContext);
    const toId = useRef();

    const transferir = async (parcela) =>{
        console.log(context.address);
        console.log(toId.current.value)
        let id=parcela.id;
        await context.vmContract.methods.safeTransferFrom(context.address,toId.current.value,2).send({from:context.address});
    }
    let variable=false;
    if(!parcela || !context.vmContract){
        return(<div className="App">Loading...</div>)
    }
    else {
    return(
        <div className={`${style.ProductTarget}`} style={{width: widhtContainer+"%;"}}>
            <h5 className={`${style.hmargin}`}>${parcela.latitud+parcela.longitud}</h5>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Plantas nuevas en la ultima semana:</p><p className={`${style.pmarginNone}`}> 120</p></div>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Cantidad total de Co2 Recuperado:</p><p className={`${style.pmarginNone}`}> 30T</p></div>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Coordenadas:</p><p className={`${style.pmarginNone}`}> 2111412:43232</p></div>
            <div className={`${style.flexRowContainer} ${style.pmargin}`}><p className={`${style.pmargin}`}>Ultima vez:</p><p className={`${style.pmarginNone}`}> Ayer</p></div>
            <div className={`${style.flexRowContainer}`}>
            
            <button onClick={variable = true}>Mostrar</button></div>
            {variable && <div className={`${style.flexRowContainer}`}>
            <input  className={style.inputCreateParcela} type='string' ref={toId} placeholder="Indique la address para enviar"></input>
                <button onClick={()=> transferir(parcela)}> Transfer</button></div>}
        </div>
        
    )}
}

export default ProductTarget;