import React, { useContext } from "react";
import { useRef } from "react";
import style from "./SidebarScreen.module.css";
import ProductTarget from "../ProductTarget/ProductTarget";
import Dashboard from "../Dashboard/Dashboard";
import CompanyGrafic from "../Grafic/CompanyGrafic/Grafic";
import Modal from "../Modal/Modal";
import ModalOwn from "../ModalOwn/Modal";
import { FcViewDetails, FcComboChart, FcVoicePresentation } from 'react-icons/fc';
import { useState } from "react";
import AppContext from "../../context";
import InfoTarget from "../InfoTarget/InfoTarget";
import InfoTargetSlim from "../InfoTargetSlim/InfoTarget";
import { useRouter } from 'next/router'





function SidebarScreen({ isOpen, content, parcelaId, contract1, address1 }) {

    const [totalTokens, setTokens] = useState("")
    const [clientTokens, setClientTokens] = useState("")
    const context = useContext(AppContext)
    const longitud = useRef();
    const latitud = useRef();
    const router = useRouter()
    const pid = router['query'].id

    const mintNft = async () => {
        let a = await context.vmContract.methods.createCollectible({ longitud }, { latitud }).send({ from: address1 })
    }

    const allTokens = async () => {
        const parcelas = []
        let max = await context.vmContract.methods.tokenCounter().call()

        for (let i = 0; i < max; i++) {
            let address_temp = await context.vmContract.methods.ownerOf(i).call()
            let parse = await context.vmContract.methods.tokenIdToParcelasIndex(i).call()
            let parsel = {
                "id": i,
                "coord": parse
            }
            parcelas.push(parsel)
        }
        setTokens(parcelas)

    }


    const clientAllTokens = async () => {
        const parcelas1 = []
        let max = await context.vmContract.methods.tokenCounter().call()
        let parse = undefined;
        for (let i = 0; i < max; i++) {
            let address_temp = await context.vmContract.methods.ownerOf(i).call()
            if (address_temp == context.address) {
                let parse = await context.vmContract.methods.tokenIdToParcelasIndex(i).call()
                let parsel = {
                    "id": i,
                    "coord": parse
                }

                parcelas1.push(parsel)

            }

        }
        console.log(parcelas1)
        setClientTokens(parcelas1)
    }


    var thisParcelaId = 0;
    if (parcelaId != undefined) {
        thisParcelaId = parcelaId;
    }
    allTokens()
    clientAllTokens()



    if (!context.vmContract || !totalTokens || !clientTokens) {
        return (<div className="App">Loading...</div>)
    }
    else {

        if (content == '/client/[id]') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <ModalOwn parcelas={totalTokens} content={content} specialHeight={'true'} />

                    <div className={style.flexRowContainerCompany}>
                        <div className={`${style.w_100} ${style.floatContainer}`}>
                            <h1>DASHBOARD - BIENVENIDO GERMAN</h1>
                            <p>Informacion total de todas las parcelas sobre el impacto y metricas de implementacion</p>
                        </div>
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.floatContainer} ${style.containerClient}`}>
                        <Dashboard />
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.w99}`}>
                        <InfoTargetSlim isOpen={isOpen} mar={true} text={'PARCELA'} val={'1'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'PARCELA'} val={'2'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'PARCELA'} val={'5'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'+'} val={'Ver todos'} moreView={'t'} specialHeight={true} />
                    </div>
                </div>
            )
        } else if (content == '/company') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <Modal parcelas={totalTokens} content={content} />

                    <div className={style.flexRowContainerCompany}>
                        <div className={`${style.w_100} ${style.floatContainer}`}>
                            <h1>DASHBOARD</h1>
                            <p>Informacion sobre impacto y metricas de implementacion</p>
                            <select className={style.rigthDateTime}>
                                <option value={'all'}>General</option>
                                <option value={'SH'}>German Abu Arab</option>
                                <option value={'NC'}>Ignacio Cogliatti</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.floatContainer}`}>
                        <CompanyGrafic totalTokens={totalTokens} />
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.w99}`}>
                        <InfoTarget isOpen={isOpen} mar={true} text={'Tokens totales'} val={totalTokens.length} moreView={'f'} />
                        <InfoTarget isOpen={isOpen} mar={false} text={'Co2'} val={'150T'} moreView={'f'} />
                        <InfoTarget isOpen={isOpen} mar={false} text={'Plantas nuevas'} val={'45'} moreView={'f'} />
                        <InfoTarget isOpen={isOpen} mar={false} text={'+'} val={'Ver todos'} moreView={'t'} />
                    </div>
                </div>
            )
        } else if (content == '/parcelas/[id]') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <ModalOwn parcelas={totalTokens} content={content} specialHeight={'true'} />

                    <div className={style.flexRowContainerCompany}>
                        <div className={`${style.w_100} ${style.floatContainer}`}>
                            <h1>DASHBOARD - PARCELA {pid}</h1>
                            <p>Informacion sobre la parcela {pid}. Impacto y metricas de implementacion</p>
                            <button className={style.transferirButton}>
                                Transferir parcela
                            </button>
                        </div>
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.floatContainer} ${style.containerClient}`}>
                        <Dashboard />
                    </div>
                    <div className={`${style.flexRowContainerCompany} ${style.w99}`}>
                        <InfoTargetSlim isOpen={isOpen} mar={true} text={'PARCELA'} val={'1'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'PARCELA'} val={'2'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'PARCELA'} val={'5'} moreView={'f'} specialHeight={true} />
                        <InfoTargetSlim isOpen={isOpen} mar={false} text={'+'} val={'Ver todos'} moreView={'t'} specialHeight={true} />
                    </div>
                </div>
            )
        } else if (content == '/cargarParcela') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <div className={style.createParcelaContainer}>
                        <div className={style.columnForm}>
                            <h1 className={style.titleForm}>Crear parcela</h1>
                            <input className={style.inputCreateParcela} type='string' placeholder="Latitud" ref={longitud}></input>
                            <input className={style.inputCreateParcela} type='string' placeholder="Longitud" ref={latitud}></input>
                            <label className={style.titleForm}>Asignar a:</label>
                            <select className={style.selectCreateParcela} type='string'>
                                <option className={style.inputCreateParcela} value="">Libre</option>
                                <option className={style.inputCreateParcela} value="GABU">Germman Abu Arab</option>
                                <option className={style.inputCreateParcela} value="JCO">Juan Cogliatti</option>
                            </select>
                            <button onClick={() => mintNft()} className={style.createParcelaContainerSon}>Crear</button>
                        </div>
                        <div className={style.columnForm2}>
                            <img className={style.imgForm} src="https://assets.website-files.com/625db0bad5cfd681bd654bd8/6302fc23f01cadc6a8842586_2_fc_illustration_new.png"></img>
                        </div>
                    </div>
                </div>
            )
        } else if (content == '/transferParcela') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <div className={style.createParcelaContainer}>
                        <div className={style.columnForm}>
                        <h1 className={style.titleForm}>Transferir parcela</h1>
                            <select className={style.selectCreateParcela} type='string'>
                                <option className={style.inputCreateParcela} value="">Seleccionar</option>
                                <option className={style.inputCreateParcela} value="GABU">Parcela 1</option>
                                <option className={style.inputCreateParcela} value="JCO">Parcela 2</option>
                            </select>
                            <label className={style.titleForm}>Asignar a:</label>
                            <select className={style.selectCreateParcela} type='string'>
                                <option className={style.inputCreateParcela} value="">Libre</option>
                                <option className={style.inputCreateParcela} value="GABU">Germman Abu Arab</option>
                                <option className={style.inputCreateParcela} value="JCO">Juan Cogliatti</option>
                            </select>
                            <button onClick={() => mintNft()} className={style.createParcelaContainerSon}>Transferir</button>
                        </div>
                        <div className={style.columnForm2}>
                            <img className={style.imgForm2} src="https://i.pinimg.com/originals/43/c4/5e/43c45e6c5ea550af9837c782e3a1fb5e.png"></img>
                        </div>
                    </div>
                </div>
            )
        } else if (content == '/updateParcela') {
            return (
                <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                    <div className={style.createParcelaContainer}>
                        <div className={style.columnForm}>
                        <h1 className={style.titleForm}>Acrualizar infromacion de la parcela x</h1>
                            <label className={style.titleForm}>Cantidad de plantas actuales:</label>
                            <input type="number" className={`${style.inputCreateParcela} ${style.inputUpdateParcela}`}></input>
                            <button onClick={() => mintNft()} className={`${style.createParcelaContainerSon} ${style.createParcelaContainerSon2}`}>Actualizar</button>
                        </div>
                        <div className={style.columnForm2}>
                            <img className={style.imgForm2} src="https://cdn.pixabay.com/photo/2017/01/31/00/14/ground-2022491_960_720.png"></img>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SidebarScreen;