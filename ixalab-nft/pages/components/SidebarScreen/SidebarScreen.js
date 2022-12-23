import React, { useContext } from "react";
import { useRef } from "react";
import style from "./SidebarScreen.module.css";
import ProductTarget from "../ProductTarget/ProductTarget";
import Dashboard from "../Dashboard/Dashboard";
import CompanyGrafic from "../Grafic/CompanyGrafic/Grafic";
import Modal from "../Modal/Modal";
import { FcViewDetails, FcComboChart, FcVoicePresentation  } from 'react-icons/fc';
import { useState } from "react";
import AppContext from "../../context";




function SidebarScreen({isOpen, content, parcelaId,contract1,address1}) {

    const [totalTokens,setTokens] = useState("")

    const context = useContext(AppContext)
    const longitud = useRef();
    const latitud = useRef();

    
    const mintNft = async () =>{ 
        let a= await context.vmContract.methods.createCollectible({longitud},{latitud}).send({from:address1})
    }

    const allTokens = async () =>{
        const parcelas= []
        let max= await context.vmContract.methods.tokenCounter().call()
        
        for (let i=0; i<max; i++){
            let address_temp= await context.vmContract.methods.ownerOf(i).call()
            let parse= await context.vmContract.methods.tokenIdToParcelasIndex(i).call()  
            let parsel={"id":i,
                    "coord":parse}  
            parcelas.push(parsel)
        }
        setTokens(parcelas)

    }

    
    const clientTokens = async () =>{
        const parcelas= [] 
        let clientAddress = ""
        let max= await context.vmContract.methods.tokenCounter().call()
        
        for (let i=0; i<max; i++){
            let address_temp= await context.vmContract.methods.ownerOf(i).call()
            let parse= await context.vmContract.methods.tokenIdToParcelasIndex(i).call()    
            parcelas.push(parse)
        }
        setTokens(parcelas)
    }


    var thisParcelaId = 0;
    if(parcelaId != undefined){
        thisParcelaId = parcelaId;
    }
    allTokens()
    // clientTokens()

   
    
    if (!context.vmContract || !totalTokens)
    {
      return(<div className="App">Loading...</div>)
      }
    else{
    
    if(content=='/client'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <Modal parcelas= {totalTokens} content ={content}/>
                <h1>DASHBOARD</h1>
                <div className={style.flexRowContainer}>
                    <Dashboard />
                </div>
                <h2 className={style.subTitle}>Parcelas destacadas</h2>
                <div className={style.flexRowContainer}>
                    <ProductTarget />
                    <ProductTarget />
                    <ProductTarget />
                </div>
                
            </div>
            
        )
    }else if(content=='/company'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <div className={style.flexRowContainerCompany}>
                    <div>
                        <h1>DASHBOARD</h1>
                        <p>Informacion sobre impacto y metricas de implementacion</p>
                    </div>
                    <div>
                        <input type="datetime" value={'16/12/22'}></input>
                    </div>
                </div>
                <div className={style.flexRowContainerCompany}>
                    <CompanyGrafic totalTokens={totalTokens} />
                </div>
            </div>
        )
    }else if(content =='/parcelas/[parcela]'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <Modal parcelas= {totalTokens} content ={content} />
                <h1>Parcela - {thisParcelaId}</h1>
                <div className={style.flexRowContainer}>
                    <Dashboard />
                </div>
                <h2 className={style.subTitle}>Otras Parcelas</h2>
                <div className={style.flexRowContainer}>
                    <ProductTarget />
                    <ProductTarget />
                    <ProductTarget />
                </div>
                
            </div>
        )
    }else if(content =='/cargarParcela'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <div className={style.createParcelaContainer}>
                    <h1>Crear parcela</h1>
                    <input className={style.inputCreateParcela} type='string' placeholder="Latitud" ref={longitud}></input>                
                    <input className={style.inputCreateParcela} type='string' placeholder="Longitud" ref={latitud}></input>  
                    <button onClick={() => mintNft()} className={style.createParcelaContainerSon}>Crear</button>        
                </div>      
            </div>
        )
    }
}
}

export default SidebarScreen;