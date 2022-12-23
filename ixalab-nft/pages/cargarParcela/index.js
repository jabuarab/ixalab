import React,{useContext, useState} from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import style from "./company.module.css";
import { FcViewDetails, FcComboChart, FcDownload, FcAddRow  } from 'react-icons/fc';
import AppContext from "../context";
import { useRouter } from "next/router";


function cargarParcela() {
    const context = useContext(AppContext)

    var menusCliente = [
        { title: "Menu", src: "/", icon: FcViewDetails},
        { title: "Dashboard", src: "client", icon: FcComboChart },
        { title: "Descargar reporte", src: "descarga", icon: FcDownload },
        { title: "Crear parcela", src: "cargarParcela", icon: FcAddRow },
      ];
   
            return(
        <div className={style.allScreenDiv}>
            <SidebarMenu menuList={menusCliente} totalTokens={[]} contract={context.vmContract} address={context.address}/>
        </div>
        
    )
}

export default cargarParcela;