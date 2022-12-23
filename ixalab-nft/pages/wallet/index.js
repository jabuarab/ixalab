import React, { useContext } from "react";
import style from "./login.module.css";
import Web3 from "web3";
import { FcViewDetails, FcComboChart, FcVoicePresentation  } from 'react-icons/fc';
import { useState,useEffect } from 'react'
import vmContractFunc from '../../ixaCollectible'
import  AppContext from "../context";
import { useRouter } from "next/router";


export default function Login() {
    

    
    const [web3_,setWeb3] = useState(null)
    const [address,setAddress] = useState(null)
    const [vmContract,setVmContract] = useState(null)

    const context = useContext(AppContext)

    const router = useRouter()
    useEffect(() => {
        if (vmContract) seeMethods()
        if (vmContract && address)  numOfTokens()
        if (vmContract && address)  seetokens()

    },[vmContract,address])


  

    //window.ethereum (solo existe si se tiene metamask instalado)
    const connectWalletHandler = async () => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try {
                await window.ethereum.request({method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
                /*set web3 instance*/
                setWeb3(web3) 
                /*get list of accounts*/
                const account = await web3.eth.getAccounts()
                setAddress(account[0])
                
                /*Create a contract copy*/
                const vmContract_ = vmContractFunc(web3)
                setVmContract(vmContract_)
                
               
            }
            catch(err){
                setError(err.message)
            }

        }
        else{
            alert("please install Metamask")
        }
    }


    const seeMethods = async () =>{
        let balance= await vmContract.methods.balanceOf('0x6f30b7BA2E951B0E1261D790363D13FFa0065070').call()
        //let nft= await vmContract.methods.ownerOf(0).call()
        console.log(balance)
        
    
        console.log(address)
        let a= await vmContract.methods.createCollectible('1','1').send({from:address})
        console.log(a)
    }

    const seetokens = async () =>{
        let total= await vmContract.methods.tokenCounter().call()
        console.log(total)
    }
    
    const numOfTokens = async () =>{
        let total= await vmContract.methods.balanceOf(address).call()
        console.log(total)
    }
    

   // const see1token = async () =>{
     ///   let token1= await vmContract.methods.tokenIdToParcelasIndex(0).call()
        //console.log(token1)
    //}
    
    const [error, setError] = useState('') 
   
    return(
        <div className={style.loginBack}>
            <div className={style.loginContainer}>
                <h1 className={style.loginTitle}>IxaTesis</h1>
                <h3 className={style.loginTitle}>Inicia sesión</h3>
                <p className={style.inputLabel}>Email</p>
                <input type={'email'} className={style.input}></input>
                <p className={style.inputLabel}>Contraseña</p>
                <input type={'password'} className={style.input}></input>
                <button className={style.buttonLogin}

                onClick={() => {
        context.setWeb3(web3_)
        context.setAddress(address)
        context.setVmContract(vmContract)
        router.push('/client')
    }}>
                </button>
                <button onClick={connectWalletHandler}>Wallet</button>
            </div>
            <a className={style.alink}>Olvide mi contraseña</a>
            <p>{error}</p>
            <div>
            <input className={style.input}></input>
            <input className={style.input}></input>
            <button onClick={seeMethods}>Create nft</button>
            <button onClick={seetokens}>See tokens</button>
            <button onClick={numOfTokens}>See my tokens</button>
            </div>

        </div>
        
    )
}

