import React,{useContext, useState} from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import style from "./company.module.css";
import { FcViewDetails, FcComboChart, FcDownload, FcAddRow  } from 'react-icons/fc';
import AppContext from "../context";
import { useRouter } from "next/router";

function Client() {

    const [totalTokens,setTokens] = useState("")

    const context = useContext(AppContext)
    
    const router = useRouter()

    const seetokens = async () =>{
        let total= await context.vmContract.methods.tokenCounter().call()
    }

    const allTokens = async () =>{
        const parcelas= []
        let max= await context.vmContract.methods.tokenCounter().call()
        
        for (let i=0; i<max; i++){
            let address_temp= await context.vmContract.methods.ownerOf(i).call()
            let parse= await context.vmContract.methods.tokenIdToParcelasIndex(i).call()    
            parcelas.push(parse)
        }
        console.log(parcelas);
        setTokens(parcelas)
    }

    var menusCliente = [
        { title: "Menu", src: "/parcelas/3", icon: FcViewDetails},
        { title: "Dashboard", src: "/client/3", icon: FcComboChart },
        { title: "Descargar reporte", src: "/transferParcela", icon: FcDownload },
        { title: "Crear parcela", src: "/cargarParcela", icon: FcAddRow },
        { title: "Descargar reporte", src: "/updateParcela", icon: FcDownload },

      ];
    seetokens()
    allTokens()

   
    if (!totalTokens){
        return(<div className="App">Loading...</div>)
        }
        else{
            return(
        <div className={style.allScreenDiv}>
            <SidebarMenu menuList={menusCliente} parcelaId={1} totalTokens={totalTokens} contract={context.vmContract} addres={context.addres}/>
        </div>
        
    )}
}

export default Client;