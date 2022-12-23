import { useState , useContext }  from "react";
import { AiFillRightCircle } from 'react-icons/ai';
import { FcViewDetails, FcComboChart, FcVoicePresentation  } from 'react-icons/fc';
import style from "./SidebarMenu.module.css";
import Modal from "../Modal/Modal";
import { useRouter } from 'next/router'
import SidebarScreen from "../SidebarScreen/SidebarScreen";
import  AppContext from "../../context";


const SidebarMenu = ({menuList,parcelaId,totalTokens,contract,address}) => {
  const router = useRouter()

  const [isOpen, setMenu] = useState(false);
  const { pathname } = useRouter()
  const context = useContext(AppContext)


  function OpenCloseMenu() {
    setMenu(!isOpen);
    if(!isOpen){
      document.getElementById('initialNameImage').style.transform = 'rotate(360deg)';
    }else{
      document.getElementById('initialNameImage').style.transform = 'rotate(00deg)';
    }
  }

 


    if (!context.vmContract)
    {
      return(<div className="App">Loading...</div>)
      }
    else{
      console.log(context)
      return (
    <div>
      <div className={`${isOpen && style.bigMenu} ${style.navbar}`}>
        <div>
          <div className={`${!isOpen && style.imageTitleShort} ${style.navbarTitleContainer}`}>
            <div id="initialNameImage" className={`${style.initialNameImage}`}>
              IC
            </div>
            <div className={style.nameContainer}>
              <h1 className={`${!isOpen && style.hidden} ${style.navbarTitle}`}>
                Ignacio Cogliatti
              </h1>
              <h1 className={`${!isOpen && style.hidden} ${style.navbarSubitle}`}>
                IxaClient
              </h1>
              <AiFillRightCircle onClick={OpenCloseMenu} className={ `${isOpen && style.buttonToOpen} ${!isOpen && style.openCloseButtonShort} ${style.expandButton}`}/>
            </div>
          </div>
          <div>
            {menuList.map((Menu, index) => (
              <div className={style.buttonLogin}
                onClick={() => {
                  router.push(`${Menu.src}` )
                //
               
    }}> 
     <div className={`${(pathname == '/'+Menu.src) && style.navbarTitleContainerOptionsIsSelected} ${!isOpen && style.imageTitleShort} ${style.navbarTitleContainer} ${style.navbarTitleContainerOptions}`}>
                  <div className={`${style.initialNameImageIcon}`}>
                    <Menu.icon className={style.navbarIcon}/>
                  </div>
                  <span className={`${!isOpen && style.hidden} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </div>
                </div>
              
      
            ))}
          </div>
        </div>
      </div>
      <SidebarScreen isOpen={isOpen} content={pathname} parcelaId={parcelaId} contract1={contract} address1={address}/>
    </div>
    
  );}
};
export default SidebarMenu;
