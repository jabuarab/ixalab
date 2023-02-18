import React, { useContext } from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Modal from "../components/Modal/Modal";
import style from "./client.module.css";
import { FcViewDetails, FcComboChart, FcDownload  } from 'react-icons/fc';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useRouter } from "next/router";
import  AppContext from "../context";




function Client() {
    const context = useContext(AppContext)

    
    var menusCliente = [
        { title: "Menu", src: "/parcelas/4", icon: FcViewDetails},
        { title: "Dashboard", src: "/client/4", icon: FcComboChart },
          { title: "Descargar reporte", src: "/transferParcela", icon: FcDownload },
          { title: "Descargar reporte", src: "/updateParcela", icon: FcDownload },

      ];

    return(
            <div className={style.allScreenDiv}>
                <SidebarMenu menuList={menusCliente}/>
            </div>
    )
}

export default Client;