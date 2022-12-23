import React from "react";
import style from "./Modal.module.css";
import { useRef } from "react";
import ProductTarget from "../ProductTarget/ProductTarget";


function Modal(parcelas) {

    const modalButton = useRef();
    const modal = useRef();
    
    function showHideModal(val) {
        if(val == 0){
            modal.current.style.display = 'flex';
        }else if(val == 1){
            modal.current.style.display = 'none';
        }
    }
    if(!parcelas){
        return(<div className="App">Loading...</div>)
    }
    else{
    
    const parcela1= parcelas.parcelas[0];
   

    //aca no va boton 
    return(
        
    
        <div>
            <div ref={modal} className={`${style.blackBackCover} ${style.hidde}`}>
                <div className={style.popup}>
                    <div onClick={() => showHideModal(1)} className={style.closeButton}>x</div>
                    <div className={style.flexRow}>
                        <div onClick={() => showHideModal(1)} className={`${style.filterButton} ${style.filterButtonSelected}`} style={{top: '20%'}}>Fecha</div>
                        <div onClick={() => showHideModal(1)} className={style.filterButton} style={{top: '23%'}}>Completado</div>
                        <div onClick={() => showHideModal(1)} className={style.filterButton} style={{top: '26%'}}>Co2 Producido</div>
                    </div>
            


                    <div className={style.allParcelasContainer}>
                        <div className={style.parcelasContainer}>
                            <ProductTarget widhtContainer={90} parcela={parcela1} />
                        </div>
                        <div className={style.parcelasContainer}>
                            <ProductTarget widhtContainer={90} parcela={parcelas.parcelas[1]} />
                        </div>
                    </div>
                
                
                
                </div>
            </div>
            <p ref={modalButton} onClick={() => showHideModal(0)} className={style.verMasButton}>Ver todos</p>
        </div>
        
    )
    }
    
}

export default Modal;