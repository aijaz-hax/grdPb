import * as React from "react";
import Container from "@mui/material/Container";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import { useAuth } from "@pages/content/hooks/useAuth";
import { SignInForm } from "@pages/content/interface/signIn";
import Logo from "./google.png"
import Garde from "../app/garde.png";
import Dark from "../card/darkCircle.png";
import Green from "../card/green.png";
import back from "../card/backArrow.png"
import { Styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { postWithoutAuth } from "../../shared/requestHandler";
import { validateForm } from "../utils/Helper";


const Reset: React.FC = () => {
  const [signup, setSignup] = useState({
    password: "",
    confirm:""
  });
  const [isLoading,setIsLoading] = useState(false)

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(13); // 0-based for easier array indexing
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  // Function to get the number of days in a month
  const getDaysInMonth = (month: number): number => {
    return new Date(2023, month + 1, 0).getDate(); // Adding 1 since month is 0-based
  };

  // Effect to update the days based on the selected month
  React.useEffect(() => {
    const days = getDaysInMonth(selectedMonth);
    setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
    // Reset selected day if it exceeds the number of days in the new month
    if (selectedDay > days) {
      setSelectedDay(days);
    }
  }, [selectedMonth]);

  // Month names array
  const navigate = useNavigate()
  const capitalLetterRegex = /[A-Z]/;
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;




  const handleSignUp = async()=>{
    try{
      let data ={
        password: signup.password,
        confirm:signup.confirm
      }
      setIsLoading(true)
      const response = await postWithoutAuth("/signup",data)
      if(response.status==="success"){
        setIsLoading(false)
       
      }           
    }
    catch(err){

    }
  }

  const handleChange = (e) => {

    const { name, value } = e.target;

    setSignup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
              Reset your Password
            </div>
            <div></div>
            </div>
     <div style={Styles.htHandle}>            
     
     <div>
       <div style={Styles.mT}>
          New Password
        </div>
        <div>
        <div style={Styles.commDiv1}>
             <input type='text' placeholder='Enter Password here' name="password" style={Styles.commInput1}  onChange={handleChange}/>
        </div>
        </div>
     </div>
        <div style={Styles.commonPassword}>
          Must incude
        </div>
        <div style={Styles.pasVal}>
          <img src={signup.password.length >= 8 ? Green : Dark} alt="dark" style={Styles.heightImage}/>
          <div style={signup.password.length >= 8 ? Styles.commonColor1 :Styles.commonColor}> 8 Charcters</div>
        </div>
        <div style={Styles.pasVal}>
          <img src={capitalLetterRegex.test(signup.password) ? Green:Dark} alt="dark" style={Styles.heightImage}/>
          <div style={capitalLetterRegex.test(signup.password) ? Styles.commonColor1 : Styles.commonColor}> One uppercase letter</div>
        </div>
        <div style={Styles.pasVal}>
          <img src={specialCharacterRegex.test(signup.password) ? Green:Dark} alt="dark" style={Styles.heightImage}/>
          <div style={specialCharacterRegex.test(signup.password) ? Styles.commonColor1 : Styles.commonColor}> One special character</div>
        </div>

        <div>
       <div style={Styles.mT}>
          Confirm Password
        </div>
        <div>
        <div  style={Styles.commDiv1}>
             <input type='text' placeholder='Confirm Password' name="confirm" style={Styles.commInput1}  onChange={handleChange}/>
        </div>
        </div>
     </div>
     </div>
     <div style={Styles.footr}>
        <div style={Styles.btnCrt} onClick={handleSignUp}>
          {isLoading ? "loading..." : "Continue"}
        </div>
        
     <div style={Styles.forFooter}>
        <div></div>
       <div style={Styles.dFl} onClick={()=>navigate("/reset")}>
        <div style={Styles.forFootText}>Back to</div>
        <div style={Styles.forFootTextBlue}>Log In</div>
       </div>
       <div></div>
    </div>
     </div>
    </div>
    </Container>
  );
};

export default Reset;
