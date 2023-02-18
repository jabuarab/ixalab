import React, { useContext } from "react";
import AppContext from "../../context";
import style from "./ProductTarget.module.css";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'


function ProductTarget ({widhtContainer,parcela,content}) {
    const context= useContext(AppContext);
    const toId = useRef();


  const { pathname } = useRouter()


    const transferir = async (parcela) =>{
        console.log(context.address);
        console.log(parcela)
        console.log(toId.current.value)
        let id=parcela.id;
        await context.vmContract.methods.safeTransferFrom(context.address,toId.current.value,id).send({from:context.address});
    }
    let variable=true;
    if(!parcela || !context.vmContract){
        return(<div className="App">Loading...</div>)
    }
    else {
        console.log(pathname);
        if(pathname == '/client/[id]'){
            return(
                <div className={`${style.ProductTarget}`} style={{width: widhtContainer+"%!important;"}}>
                    <h5 className={`${style.hmargin}`}>{parcela.id}</h5>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Plantas nuevas en la ultima semana:</p><p className={`${style.pmarginNone}`}> 120</p></div>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Cantidad total de Co2 Recuperado:</p><p className={`${style.pmarginNone}`}> 30T</p></div>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Coordenadas:</p><p className={`${style.pmarginNone}`}> {parcela.coord.latitud}:{parcela.coord.longitud}</p></div>
                    <div className={`${style.flexRowContainer} ${style.pmargin}`}><p className={`${style.pmargin}`}>Ultima vez:</p><p className={`${style.pmarginNone}`}> Ayer</p></div>
                    <div className={`${style.flexRowContainer}`}></div>
                </div>
                
            )
        }else{
            return(
                <div className={`${style.ProductTarget}`} style={{width: widhtContainer+"%!important;"}}>
                    <h5 className={`${style.hmargin}`}>{parcela.id}</h5>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Plantas nuevas en la ultima semana:</p><p className={`${style.pmarginNone}`}> 120</p></div>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Cantidad total de Co2 Recuperado:</p><p className={`${style.pmarginNone}`}> 30T</p></div>
                    <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Coordenadas:</p><p className={`${style.pmarginNone}`}> {parcela.coord.latitud}:{parcela.coord.longitud}</p></div>
                    <div className={`${style.flexRowContainer} ${style.pmargin}`}><p className={`${style.pmargin}`}>Ultima vez:</p><p className={`${style.pmarginNone}`}> Ayer</p></div>
                    <div className={`${style.flexRowContainer}`}>
                    
                    <button onClick={() => variable = true}>Transfer</button></div>
                    {variable && <div className={`${style.flexRowContainer}`}>
                    <input  className={style.inputCreateParcela} type='string' ref={toId} placeholder="Indique la address para enviar"></input>
                        <button onClick={()=> transferir(parcela)}> Send</button></div>}
                </div>
            )
        }
    }
}

export default ProductTarget;