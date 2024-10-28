import * as React from "react";
import { useState } from "react";
import { Styles } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./gr.png"
import Cross from "./cross.png"
import back from "../card/backArrow.png"

import useStorage from "../../hooks/useStorage";
import authStorage from "../../shared/storages/authStorage";
import { useAuth } from "../../hooks/useAuth";
import { usePopup } from "../../hooks/usePopup";
import { useWishList } from "../../hooks/useWishList";
import { postWithAuth, postWithoutAuth } from "../../shared/requestHandler";
import { title } from "process";


const ForgotPassword: React.FC = () => {
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
           navigate("/pass")
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
        <img src={back} alt="bck" style={Styles.bckImgHtWD} onClick={()=>navigate("/signIn")}/>
      </div>
      <div style={Styles.createSpanBoldFor}>
        <div>Let's find your</div>
        <div style={Styles.mtForgt}>Garde-Robe account</div>
      </div>
      <div></div>
    </div>
    <div style={Styles.forTextSection}>
       <div style={Styles.forTextSt}>
         Email
       </div>
       <div style={Styles.forDiv}>
         <input type="text" value={textVal} style={Styles.commInput1} placeholder="Enter your Email" onChange={(e)=>setTextVal(e.target.value)}/>
       </div>
    </div>
    <div style={Styles.forTextSection}>
    <div style={textVal ? Styles.selctedDivFor : Styles.selctedDivBlurredFor} onClick={createWishlist}>
        {isLoad ? "loading..."  : "Continue"}
    </div>
    </div>
    <div style={Styles.forFooter}>
        <div></div>
       <div style={Styles.dFl} onClick={()=>navigate("/signIn")}>
        <div style={Styles.forFootText}>Back to</div>
        <div style={Styles.forFootTextBlue}>Log In</div>
       </div>
       <div></div>
    </div>
  </div>
  );
};

export default ForgotPassword;
