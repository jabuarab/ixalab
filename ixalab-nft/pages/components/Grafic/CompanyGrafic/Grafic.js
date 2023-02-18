import React from "react";
import style from "./Grafic.module.css";
import Hexagon from "./assets/Hexagon";
import InfoTarget from "../../InfoTarget/InfoTarget";




function Grafic({ totalTokens }) {
    return (
        <div className={`${style.flexRowContainerCompany} ${style.w100} ${style.h400}`}>
            <div className={`${style.w18} ${style.flexContainer}`}>
                <h2 className={`${style.leftTitle}`}>Area geografica</h2>
                <div className={`${style.sacleContainer}`}>
                    <div className={`${style.flexRowContainerCompany}`}>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.redSq}`}></div>
                            <div className={`${style.fontSq}`}>0 - 10%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.orangeSq}`}></div>
                            <div className={`${style.fontSq}`}>11 - 30%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.yellowSq}`}></div>
                            <div className={`${style.fontSq}`}>31 - 80%</div>
                        </div>
                        <div className={`${style.flexRowContainerScale}`}>
                            <div className={`${style.greenSq}`}></div>
                            <div className={`${style.fontSq}`}>81 - 100%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.flexRowContainerCompany} ${style.w80}`}>
                <div className={`${style.graficContainer}`}>
                    <div className={`${style.graficContainerRowCenter}`}>
                        {totalTokens.map((Token, index) => (
                            <Hexagon color={'green'} />
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
            </div>
        </div>
    )
}

export default Grafic;