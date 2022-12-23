import React from "react";
import style from "./Grafic.module.css";
import Hexagon from "./assets/Hexagon";
import InfoTarget from "../../InfoTarget/InfoTarget";




function Grafic({totalTokens}) {
    return(
        <div className={`${style.w100}`}>
           <h2>Area geografica</h2>
           <div className={`${style.flexRowContainerCompany}`}>
                <div className={`${style.graficContainer}`}>
                    <div className={`${style.graficContainerRowCenter}`}>
                    {totalTokens.map((Token, index) => (
                        <Hexagon color={'#00AB30'} />
                    ))}
                        {/* <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} /> */}
                    </div>
                    {/* <div className={`${style.graficContainerRow}`}>
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                    </div>
                    <div className={`${style.graficContainerRowCenter}`}>
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                    </div>
                    <div className={`${style.graficContainerRow}`}>
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                    </div>
                    <div className={`${style.graficContainerRowCenter}`}>
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'#ffffff'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                    </div>
                    <div className={`${style.graficContainerRow}`}>
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'#00AB30'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'orange'} />
                        <Hexagon color={'yellow'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                        <Hexagon color={'red'} />
                    </div> */}
                </div>
                <div className={`${style.sacleContainer}`}>
                    <div className={`${style.flexRowContainerCompany}`}>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.redSq}`}></div>
                            <div>0 - 10%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.orangeSq}`}></div>
                            <div>0 - 10%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.yellowSq}`}></div>
                            <div>0 - 10%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.greenSq}`}></div>
                            <div>0 - 10%</div>
                        </div>
                    </div>
                </div>
                <InfoTarget text={'Tokens totales'} val={totalTokens.length}/>
                <InfoTarget text={'Co2'} val={'150T'}/>
                <InfoTarget text={'Plantas nuevas'} val={'45'}/>
                <InfoTarget text={'Fotos'} val={''}/>
           </div>
        </div>
    )
}

export default Grafic;