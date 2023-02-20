import React, { useContext } from "react";
import style from "./login.module.css";
import Web3 from "web3";
import { FcViewDetails, FcComboChart, FcVoicePresentation } from 'react-icons/fc';
import { useState, useEffect } from 'react'
import vmContractFunc from '../../ixaCollectible'
import AppContext from "../context";
import { useRouter } from "next/router";
// import prisma from '../../prisma/lib/prisma';


// export const getStaticProps = async () => {
//     const feed = await prisma.post.findMany({
//         where: { published: true },
//         include: {
//             author: {
//                 select: { name: true },
//             },
//         },
//     });
//     return {
//         props: { feed },
//         revalidate: 10,
//     };
// };


export default function Login() {
    const [web3_, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [vmContract, setVmContract] = useState(null);
    const [error, setError] = useState('');
    const context = useContext(AppContext);

    const router = useRouter()
    useEffect(() => {
        //if (vmContract) seeMethods()
        //  if (vmContract && address) numOfTokens()
        // if (vmContract && address) seetokens()

    }, [vmContract, address])

    //window.ethereum (solo existe si se tiene metamask instalado)
    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" })
                web3 = new Web3(window.ethereum)
                /*set web3  instance*/
                setWeb3(web3)
                console.log(web3)
                var network = await web3.eth.getChainId()
                console.log(network)
                /*get list of accounts*/
                if (network == 5) {  //cambiar para polygon 80001 / goerli 5
                    const account = await web3.eth.getAccounts()
                    setAddress(account[0])

                    /*Create a contract copy*/
                    const vmContract_ = vmContractFunc(web3)
                    setVmContract(vmContract_)
                    context.setWeb3(web3_)
                    context.setAddress(address)
                    context.setVmContract(vmContract_)
                    if (!true) {

                    }
                    else {

                        router.push('/company')
                    }
                }
                else {
                    setError("The network you are connected is not the required one \r\n Try Goerli or Mumbai")

                }
            }
            catch (err) {
                setError(err.message)
            }
        }
        else {
            alert("please install Metamask")
        }
    }

    const handleSignup = () => {
        router.push("/signup")
    }

    // }

    // const seeMethods = async () => {
    //     let balance = await vmContract.methods.balanceOf('0x6f30b7BA2E951B0E1261D790363D13FFa0065070').call()
    //     //let nft= await vmContract.methods.ownerOf(0).call()

    //     let a = await vmContract.methods.createCollectible('1', '1').send({ from: address })
    // }

    // const seetokens = async () => {
    //   let total = await vmContract.methods.tokenCounter().call()
    //}

    //const numOfTokens = async () => {
    //  let total = await vmContract.methods.balanceOf(address).call()
    //}


    // const crear = async () => {

    //     let balance = await vmContract.methods.balanceOf('0x6f30b7BA2E951B0E1261D790363D13FFa0065070').call()
    //     //let nft= await vmContract.methods.ownerOf(0).call()

    //     let a = await vmContract.methods.createCollectible('310599', '281178').send({ from: address })

    // }

    // const see1token = async () =>{
    ///   let token1= await vmContract.methods.tokenIdToParcelasIndex(0).call()
    //console.log(token1)
    //}

    return (
        <div className={style.container}>
            <div className={style.loginContainer}>
                <h1 className={style.loginTitle}>IxaTesis</h1>
                <button className={style.buttonLogin}
                    onClick={async () => {
                        await connectWalletHandler()
                    }}> Iniciar Sesión
                </button>
                <button className={style.buttonSignup} onClick={handleSignup}>
                    Crear cuenta
                </button>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}
