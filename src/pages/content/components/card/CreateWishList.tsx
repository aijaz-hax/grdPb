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


const CreateWishList: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [id,setId] =  useState<boolean>(false);
    const [textVal,setTextVal] = useState(location.state || "")
    const [loading1, setLoading1] = useState<boolean>(false);
    const [isLoad,setIsLoad] =  useState<boolean>(false);
    const { pageTitle, setOpenPopup } = usePopup();
    const { activeSelection, handleDisabledSubmit, handleSubmitPost } =
    useWishList();

    const { handleSignOut } = useAuth();

    const handleLogout = async ()=>{
      await setLoading1(true)
      await handleSignOut()
      await setLoading1(false)
    }

    const createWishlist = async()=>{
      let data = {
        user: storageAuth.user.id,
        title:textVal,
        is_private:id
      }
      try{
        setIsLoad(true);
         const response = await postWithAuth("/create_wishlist",storageAuth.accessToken,data)
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
        <img src={Cross} alt="cross" style={Styles.htCR} onClick={()=>setOpenPopup(false)}/>
      </div>
      <div>
        <img src={Logo} alt='garde'/>
      </div>
      <div>
            <div
                    style={Styles.lgsyt}
                    onClick={()=>handleLogout()}
                  >
                    {loading1 ? "Loading..." : "Log Out"}
                  </div>
      </div>
    </div>
    <div style={Styles.saveWishStyle34}>
      <div>
        <img src={back} alt="bck" style={Styles.bckImgHtWD} onClick={()=>navigate("/card")}/>
      </div>
      <div style={Styles.createSpanBold}>Create Wishlist</div>
      <div></div>
    </div>
    <div style={Styles.saveWishStyle}>
       <div style={Styles.stylingCreate}>WISHLIST NAME</div>
    </div>
    <div style={Styles.saveCont}>
       {
        <input type="text" value={textVal} style={Styles.innrInptCm} placeholder="Name your Wishlist" onChange={(e)=>setTextVal(e.target.value)}/>
       }
    </div>
    <div style={Styles.saveWishStyle}>
    <div style={Styles.stylingCreate}>PRIVACY</div>
    </div>
    <div style={Styles.saveContCreate}>
       <div style={!id ? Styles.btnCrt : Styles.btnCrt1 } onClick={()=>setId(!id)}>
           Public
       </div>
       <div style={id ? Styles.btnCrt : Styles.btnCrt1 } onClick={()=>setId(!id)}>
           Private
       </div>
    </div>
    <div style={textVal ? Styles.selctedDiv : Styles.selctedDivBlurred} onClick={createWishlist}>
        {isLoad ? "creating..."  : "Create Wishlist"}
    </div>
  </div>
  );
};

export default CreateWishList;
