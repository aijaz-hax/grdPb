import * as React from "react";
import { useState } from "react";
import { Styles } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./gr.png"
import Cross from "./cross.png"
import Only from "./only.png"

import useStorage from "../../hooks/useStorage";
import authStorage from "../../shared/storages/authStorage";
import { useAuth } from "../../hooks/useAuth";
import { usePopup } from "../../hooks/usePopup";
import { useWishList } from "../../hooks/useWishList";


const CreatePoll: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pageTitle, setOpenPopup } = usePopup();
    const [loading1, setLoading1] = useState<boolean>(false);
    const { activeSelection, handleDisabledSubmit, handleSubmitPost } =
    useWishList();

    const { handleSignOut } = useAuth();

    const handleLogout = async ()=>{
      await setLoading1(true)
      await handleSignOut()
      await setLoading1(false)
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
    <div style={Styles.imgClass}>
      {activeSelection?.images?.length > 0 ?
       <img src={activeSelection?.images[0]?.source} alt="smp" style={Styles.imgInnerStyling}/> :
       <img src={Only} alt="smp" style={Styles.imgInnerStyling}/>
      }
    </div>
    <div style={Styles.saveWishStyle}>
      <span style={Styles.saveSpanBold1}>Poll</span>
      <span style={Styles.saveSpan1}>Posted</span>
    </div>
    <div style={Styles.selctedDiv} onClick={()=>navigate("/card")}>
        View on Garde-Robe
    </div>
  </div>
  );
};

export default CreatePoll;
