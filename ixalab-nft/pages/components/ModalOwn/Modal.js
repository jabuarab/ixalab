import React from "react";
import style from "./Modal.module.css";
import { useRef } from "react";
import ProductTarget from "../ProductTarget/ProductTarget";


function Modal(parcelas, { content, specialHeight }) {

    const modalButton = useRef();
    const modal = useRef();

    function showHideModal(val) {
        if (val == 0) {
            modal.current.style.display = 'flex';
        } else if (val == 1) {
            modal.current.style.display = 'none';
        }
    }
    if (!parcelas) {
        return (<div className="App">Loading...</div>)
    }
    else {
        console.log(parcelas)
        const parcela1 = parcelas.parcelas[0];


        //aca no va boton 
        return (


            <div>
                <div ref={modal} className={`${style.blackBackCover} ${style.hidde}`}>
                    <div className={style.popup}>
                        <div onClick={() => showHideModal(1)} className={style.closeButton}>x</div>
                        <div className={style.flexRow}>
                            <div onClick={() => showHideModal(1)} className={`${style.filterButton} ${style.filterButtonSelected}`} style={{ top: '20%' }}>Fecha</div>
                            <div onClick={() => showHideModal(1)} className={style.filterButton} style={{ top: '23%' }}>Co2 Producido</div>
                            <input className={`${style.filterButton} ${style.filterInput}`} placeholder="Buscar por ID" style={{ top: '26%' }}></input>
                        </div>


                        <div className={style.allParcelasContainer}>
                            <table className={style.parcelasContainer}>
                                <tr className={style.headerTable}>
                                    <th className={style.idTable}>ID</th>
                                    <th className={style.userTable}>Usuario</th>
                                    <th className={style.dateTable}>Fecha</th>
                                    <th className={style.quantityTable}>Co2 recuperado</th>
                                    <th className={style.coordTable}>Coordenadas</th>
                                    <th className={style.viewMoreTble}>Ver mas</th>
                                </tr>
                                {parcelas.parcelas.map((parcela, index) => (
                                    <tr className={style.contentRow}>
                                        <td className={style.contentCell}>{parcela.id}</td>
                                        <td className={style.contentCell}>G. Abu Arab</td>
                                        <td className={style.contentCell}>01/02/2023</td>
                                        <td className={style.contentCell}>123 Kg</td>
                                        <td className={style.contentCell}>{parcela.coord.latitud}:{parcela.coord.longitud}</td>
                                        <td className={style.contentCell}><a className={style.linkToken} href="#">Ver más</a></td>
                                    </tr>
                                ))}
                            </table>
                        </div>

                        {/* <div className={style.allParcelasContainer}>
                        <div className={style.parcelasContainer}>
                            <ProductTarget widhtContainer={90} parcela={parcela1} content={content}/>
                        </div>
                        <div className={style.parcelasContainer}>
                            <ProductTarget widhtContainer={90} parcela={parcelas.parcelas[1]} content={content}/>
                        </div>
                    </div> */}



                    </div>
                </div>
                <p ref={modalButton} onClick={() => showHideModal(0)} className={`${style.verMasButton} ${specialHeight == 'true' && style.specialHeight}`}></p>
            </div>

        )
    }

}

export default Modal;