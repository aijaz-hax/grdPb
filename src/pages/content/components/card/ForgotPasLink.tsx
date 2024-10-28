import * as React from "react";
import { useState } from "react";
import { Styles } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./gr.png"
import Envelope from "./Envelope.png"
import back from "../card/backArrow.png"

import useStorage from "../../hooks/useStorage";
import authStorage from "../../shared/storages/authStorage";
import { useAuth } from "../../hooks/useAuth";
import { usePopup } from "../../hooks/usePopup";
import { useWishList } from "../../hooks/useWishList";
import { postWithAuth, postWithoutAuth } from "../../shared/requestHandler";
import { title } from "process";


const ForgotPasLink: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [id,setId] =  useState<boolean>(false);
    const [textVal,setTextVal] = useState("")
    const [loading1, setLoading1] = useState<boolean>(false);
    const [isLoad,setIsLoad] =  useState<boolean>(false);
    const { pageTitle, setOpenPopup } = usePopup();
    const { activeSelection, handleDisabledSubmit, handleSubmitPost } =
    useWishList();


    const createWishlist = async()=>{
      let data = {
        email:textVal,
      }
      try{
        setIsLoad(true);
         const response = await postWithoutAuth("/email_forgot_password",data)
        //  console.log("RES",response)
         if(response.status === "success")
         {
           navigate("/card")
         }
         setIsLoad(false)
      }catch(err){

      }
    }

    const storageAuth = useStorage(authStorage);


  return (
    <div  style={Styles.container}>
    <div style={Styles.headerClass}>
      <div>
      </div>
      <div>
        <img src={Logo} alt='garde'/>
      </div>
      <div>
      </div>
    </div>
    <div style={Styles.saveWishStyle34}>
      <div>
        <img src={back} alt="bck" style={Styles.bckImgHtWD} onClick={()=>navigate("/forgot")}/>
      </div>
      <div style={Styles.createSpanBoldFor}>
        <div>Check your Email!</div>
      </div>
      <div></div>
    </div>
    <div style={Styles.forEnv}>
         <div></div>
         <div>
            <img src={Envelope} alt="env"/>
         </div>
         <div></div>
    </div>
    <div style={Styles.forEnv}>
         <div></div>
         <div style={Styles.txtPs}>
           <div style={Styles.forTextPass}>If an account with this email exists, we</div>
           <div style={Styles.forTextPass}>will send you a link with reset instructions</div>
         </div>
         <div></div>
    </div>

    <div style={Styles.forTextSection}>
    <div style={Styles.selctedDivFor} onClick={()=>navigate("/signIn")}>
        Back to Login
    </div>
    </div>
  </div>
  );
};

export default ForgotPasLink;
