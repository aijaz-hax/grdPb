import * as React from "react";
import Container from "@mui/material/Container";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import { useAuth } from "@pages/content/hooks/useAuth";
import { SignInForm } from "@pages/content/interface/signIn";
import Garde from "../app/garde.png";
import { Link, useNavigate } from "react-router-dom";
import { Styles } from "./styles";
import Logo from "../signup/google.png";
import Eye from "./eye.png"
import EyeBlue from "./eyeBlue.png"
import back from "../card/backArrow.png"
import { validatePassword } from "../utils/Helper";
import IframeComponent from "../Iframe/FrameOpen";
import authStorage from "../../shared/storages/authStorage";


const SignIn: React.FC = () => {
  const { handleSignIn } = useAuth();
  const [showIframe, setShowIframe] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPAssword] = useState("");
  const [visibility,setVisibility] = useState(false)
  const [loginForm, setLoginForm] = useState<SignInForm>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [tabs,setTabs] = useState([])
  const [count,setCount] = useState(0)
  const navigate = useNavigate()
  const executionCount = React.useRef(0);
  const [iframeData, setIframeData] = useState(null);

  const handleInputChange = (value: string, key: string) => {
    setInvalidEmail(false);
    setLoginForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  
  // const handleLogin = () => {
  //   chrome.tabs.create({ url: "https://app.garde-robe.com/version-81fld/google-signin" })
  //   // // Send a message to the background script to log in
  //   // chrome.runtime.sendMessage({ action: 'login' }, (response) => {
  //   //   if (response.error) {
  //   //     console.error(response.error);
  //   //   } else {
  //   //     // Use the token to fetch user info
  //   //     fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
  //   //       headers: {
  //   //         Authorization: `Bearer ${response.token}`,
  //   //       },
  //   //     })
  //   //       .then((res) => res.json())
  //   //       .then((data) => {
  //   //         console.log('User Info:', data);
  //   //       })
  //   //       .catch((error) => console.error('Error fetching user info:', error));
  //   //   }
  //   // });
  // };
  const handleVisible = ()=>{
    setVisibility(!visibility)
  }

  const chromeCall = async()=>{

    function handleUserDataMessage(message) {
      if (message.type === "UPDATE_OAUTH_USER_ID") {
        console.log("Received oauth_user_id:", message);
        if(message.value.isSuccess === "yes"){
          authStorage.setAuth({
            user: { id: message.value.id, email: "gmail" },
            accessToken: message.value.isSuccess,
            defaultSectionId: message.value.id
                  });
            // chrome.runtime.onMessage.removeListener(handleUserDataMessage);
            navigate("/")
        }
        // Process oauth_user_id here
      }
    }
  
    // Add the listener for the click session
    setInterval(()=>{
      chrome.runtime.onMessage.addListener(handleUserDataMessage);
    },3000)

    


    // function handleUserDataMessage(message) {
    //   if (message.type === 'USER_DATA') {
    //     const { isSuccess, id } = message.data;
    //     console.log("Received user data:", { isSuccess, id });
    //     // Process the data as needed
    //     // Optional: Remove the listener after receiving data
    //     // chrome.runtime.onMessage.removeListener(handleUserDataMessage);
    //   }
    // }
  
    // // Add the message listener
    // chrome.runtime.onMessage.addListener(handleUserDataMessage);

    // function handleDataReadyMessage(message) {
    //   if (message.type === "DATA_READY") {
    //     // Fetch data from chrome.storage.local when ready
    //     chrome.runtime.sendMessage({ type: 'GET_USER_DATA' }, (response) => {
    //       if (response && response.oauth_user_id) {
    //         console.log("Fetched oauth data:", response);
    //         // Use the fetched data in your component as needed
    //       }
    //     });
    //   }
    // }
  
    // // Add message listener
    // chrome.runtime.onMessage.addListener(handleDataReadyMessage);

    // setInterval(()=>{
    //   chrome.storage.local.get(["isOauthSuccess","oauth_user_id"], (result) => {
    //     if(result.isOauthSuccess){
    //       authStorage.setAuth({
    //         user: "gmail",
    //         accessToken: result.isOauthSuccess,
    //         defaultSectionId: result.oauth_user_id,
    //       });
    //       chrome.storage.local.remove(["isOauthSuccess", "oauth_user_id"], () => {
    //         console.log("Keys removed from local storage.");
    //       })
    //       navigate("/");
  
    //     }    
    //     else{
    //       console.log("Something went wrong")
    //     }
    //       // setUserId(result.oauth_user_id || null);
    //     });
    // },3000) 
  }

  const handlGoogleLogin =()=>{
      const googleLoginUrl = "https://app.garde-robe.com/version-81fld/google-signin";
      window.open(googleLoginUrl, "_blank");
      
      chromeCall()

  }

  const handleSubmit = async () => {
    await setLoading(true);
    const valPass = validatePassword(loginForm.password)

    if (EmailValidator.validate(loginForm.email)) {
      if(valPass.length > 0){
        setInvalidPAssword(valPass[0])
      }
      else{
        setInvalidPAssword("")
        await handleSignIn(loginForm);
      }
    } else {
      await setInvalidEmail(true);
    }
    await setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
         <div style={Styles.myContain}>
            <div>
              <img src={Garde} alt="garde"/>
            </div>
            <div style={Styles.widSet}>
            <div>
              <img src={back} alt="back-arrow" style={Styles.arrSeter} onClick={()=>navigate("/card")}/>
            </div>
            <div style={Styles.topText}>
              Sign In
            </div>
            <div></div>
            </div>
     <div style={Styles.mT1}>
       <div style={Styles.mT}>
          Email*
        </div>
        <div>
             <input 
              type='text' 
              placeholder='Enter email here' 
              style={Styles.commInput1}
              value={loginForm.email}
              onChange={(e) => handleInputChange(e.target.value, "email")}
              />
              {invalidEmail && <p style={Styles.isVal}>Please enter valid email address</p>}

        </div>
     </div>
     <div>
       <div style={Styles.mT}>
          Password*
        </div>
        <div style={Styles.commDiv1}>
          <div>
             <input 
               type={visibility ? "text" : "password"} 
               placeholder='Enter Password here' 
               style={Styles.commInputPass}
               onChange={(e) => handleInputChange(e.target.value, "password")}
               value={loginForm.password}
               />
          </div>
          <div onClick={()=>loginForm.password ? handleVisible() : ()=>{}}>
            <img src={visibility  ? EyeBlue : Eye} alt="eye" style={Styles.mtStyle}/>
          </div>
        </div>
              {invalidPassword.length > 0 && <p style={Styles.isVal}>{invalidPassword}</p>}
     </div>
     <div
      style={Styles.forgot}
      onClick={()=>navigate("/forgot")}
      // target="_blank"
      // href="https://app.garde-robe.com/reset_pw?s=step-1"
      >
       Forgot Password?
     </div>


     <div style={Styles.footr}>
        <button 
         style={Styles.btnCrt}
         onClick={() => handleSubmit()}
         >
          {loading ? "Loading..." : "Log In"}
        </button>
     </div>
     <div style={Styles.hrT}>
        <div style={Styles.hrLine}></div>
        <div>or</div>
        <div style={Styles.hrLine}></div>
     </div>
     <div>
        <div style={Styles.btnCrt1} 
             onClick={handlGoogleLogin}
            // target="_blank"
            // href="https://app.garde-robe.com/version-81fld/google-signin"
         >
           <div>
               <img src={Logo} alt="Logo"/>
           </div>
           <div style={Styles.mT}>
            Continue with Google
           </div>
        </div>
     </div>
     <div style={Styles.lastCont}>
     <span style={Styles.mT}>
            Don't have an account?
           </span>
           <span style={Styles.blueSect}>
           <Link
                 to="/signup"
                 style={Styles.textDec}
              >Sign Up
              </Link>
           </span>
     </div>
        </div>
    </Container>
  );
};

export default SignIn;
