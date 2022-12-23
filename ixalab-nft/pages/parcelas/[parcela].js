import React from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Modal from "../components/Modal/Modal";
import style from "./parcelas.module.css";
import { FcViewDetails, FcComboChart, FcDownload  } from 'react-icons/fc';
import { useRouter } from 'next/router'





function Client() {

    const router = useRouter()
    const { pid } = router.query

    console.log(router.query.parcela);

    var menusCliente = [
        { title: "Menu", src: "/", icon: FcViewDetails},
        { title: "Dashboard", src: "client", icon: FcComboChart },
        { title: "Descargar reporte", src: "descarga", icon: FcDownload },
      ];

    return(
        <div className={style.allScreenDiv}>
            <SidebarMenu menuList={menusCliente} parcelaId={router.query.parcela}/>
        </div>
        
    )
}

export default Client;