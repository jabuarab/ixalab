import React from "react";
import style from "./Dashboard.module.css";
import { useRef } from "react";
import ClientGrafic from "../Grafic/ClientGrafic/Grafic";
import ClientGraficTwo from "../Grafic/ClientGraficTwo/Grafic";
import ClientGraficThree from "../Grafic/ClientGraficThree/Grafic";
import ClientGraficFour from "../Grafic/ClientGraficFour/Grafic";
import ButtonCarrousel from "../ButtonCarrousel/ButtonCarrousel";
import { AiFillPicture  } from 'react-icons/ai';


function Dashboard() {
    
    const fotos = useRef();
    const totalAreaCubierta = useRef();
    const cantidadParcelas = useRef();
    const cantidadPlantas = useRef();
    const cantidadCo2 = useRef();
    const imagenesContainer = useRef();
    const totalAreaCubiertaGraphic = useRef();
    const cantidadParcelasGraphic = useRef();
    const cantidadPlantasGraphic = useRef();
    const cantidadCo2Graphic = useRef();

    function selectGraficFilter(num) {
        totalAreaCubierta.current.style.backgroundColor = '#3bbbb9';
        totalAreaCubiertaGraphic.current.style.display = 'none';
        totalAreaCubierta.current.style.border = '0px solid white';

        cantidadParcelas.current.style.backgroundColor = '#5a7bb8';
        cantidadParcelasGraphic.current.style.display = 'none';
        cantidadParcelas.current.style.border = '0px solid white';

        cantidadPlantas.current.style.backgroundColor = 'rgba(98, 11, 209, 0.72)';
        cantidadCo2Graphic.current.style.display = 'none';
        cantidadPlantas.current.style.border = '0px solid white';

        cantidadCo2.current.style.backgroundColor = 'rgba(163, 54, 134, 0.54)';
        cantidadPlantasGraphic.current.style.display = 'none';
        cantidadCo2.current.style.border = '0px solid white';

        fotos.current.style.backgroundColor = '#79e6b1';
        imagenesContainer.current.style.display = 'none';
        fotos.current.style.border = '0px solid white';

        if(num == 1){
            totalAreaCubierta.current.style.border = '5px solid black';
            totalAreaCubiertaGraphic.current.style.display = 'flex';
        }else if(num == 2){
            cantidadParcelas.current.style.border = '5px solid black';
            cantidadParcelasGraphic.current.style.display = 'flex';
        }
        else if(num == 3){
            cantidadPlantas.current.style.border = '5px solid black';
            cantidadPlantasGraphic.current.style.display = 'flex';
        }
        else if(num == 4){
            cantidadCo2.current.style.border = '5px solid black';
            cantidadCo2Graphic.current.style.display = 'flex';
        }
        else if(num == 5){
            fotos.current.style.border = '5px solid black';
            imagenesContainer.current.style.display = 'flex';
        }
    }

    return(
        <div className={style.flexRowContainer}>
            <div className={`${style.table}`}>
                <div ref={fotos} onClick={() => selectGraficFilter(5)} className={`${style.tableRow}`} style={{backgroundColor: "#79e6b1"}}><p>Fotos</p><p> <AiFillPicture/> </p></div>
                <div ref={totalAreaCubierta} onClick={() => selectGraficFilter(1)} className={`${style.tableRow}`} style={{backgroundColor: "#3bbbb9"}}><p>Totalidad del area cubierta:</p><p> 45%</p></div>
                <div ref={cantidadParcelas} onClick={() => selectGraficFilter(2)} className={`${style.tableRow}`} style={{backgroundColor: "#5a7bb8"}}><p>Cantidad de parcelas compradas (tokens):</p><p> 8</p></div>
                <div ref={cantidadPlantas} onClick={() => selectGraficFilter(3)} className={`${style.tableRow}`} style={{backgroundColor: "rgba(98, 11, 209, 0.72)"}}><p>Plantas nuevas en la ultima semana:</p><p> 120</p></div>
                <div ref={cantidadCo2} onClick={() => selectGraficFilter(4)} className={`${style.tableRow}`} style={{backgroundColor: "rgba(163, 54, 134, 0.54)", border: "5px solid black"}}><p>Cantidad total de Co2 Recuperado:</p><p> 30T</p></div>
            </div>
            <div ref={cantidadCo2Graphic} className={`${style.grarficUp}`}>
                <ClientGrafic />
            </div>
            <div ref={cantidadPlantasGraphic} className={`${style.grarficUp}`} style={{display: "none"}}>
                <ClientGraficTwo />
            </div>
            <div ref={cantidadParcelasGraphic} className={`${style.grarficUp}`} style={{display: "none"}}>
                <ClientGraficThree />
            </div>
            <div ref={totalAreaCubiertaGraphic} className={`${style.grarficUp}`} style={{display: "none"}}>
                <ClientGraficFour />
            </div>
            <div ref={imagenesContainer} className={`${style.grarficUp}`} style={{display: "none"}}>
                <ButtonCarrousel imagesQueue={[{"src": "https://imganuncios.mitula.net/parcela_en_venta_en_cercana_a_frutillar_6190025664451604147.jpg"},{"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1hdL77bpg6E3ZffpwMIlo-28fD5yLqRGZPV7uBitxVDAlO9Ms-E3nmapvbN82g2qNYc&usqp=CAU"}]} />
            </div>
        </div>
    )
}

export default Dashboard;