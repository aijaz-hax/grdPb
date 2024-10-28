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
import authStorage from "../../shared/storages/authStorage";


const SignUp: React.FC = () => {
  const { handleSignIn } = useAuth();

  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("")
  const booleanRef = React.useRef(false);
  const [signup, setSignup] = useState<FormData>({
    firstname:"",
    lastname:"",
    username:"",
    email: "",
    password: "",
    phone:""
  });
  const [isLoading,setIsLoading] = useState(false)
  const [birthday,setBirthday] = useState({
    month:1,
    day:1
  })

  const [isOpened,setIsOpened] = useState(false)


  const [errors, setErrors] = useState<{ [key: string]: string | string[] | undefined }>({});

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(13); // 0-based for easier array indexing
  const [selectedCode, setSelectedCode] = useState("+0"); // 0-based for easier array indexing
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const navigate = useNavigate()

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
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const countryCode = ["+1", "+1", "+44", "+61", "+91", "+49", "+33", "+39", "+34", "+81", "+86", "+55", "+52", "+27", "+7", "+82", "+31", "+46", "+47", "+41"]


  const capitalLetterRegex = /[A-Z]/;
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const Country=  [
    {"country": "United States", "code": "+1"},
    {"country": "Canada", "code": "+1"},
    {"country": "United Kingdom", "code": "+44"},
    {"country": "Australia", "code": "+61"},
    {"country": "India", "code": "+91"},
    {"country": "Germany", "code": "+49"},
    {"country": "France", "code": "+33"},
    {"country": "Italy", "code": "+39"},
    {"country": "Spain", "code": "+34"},
    {"country": "Japan", "code": "+81"},
    {"country": "China", "code": "+86"},
    {"country": "Brazil", "code": "+55"},
    {"country": "Mexico", "code": "+52"},
    {"country": "South Africa", "code": "+27"},
    {"country": "Russia", "code": "+7"},
    {"country": "South Korea", "code": "+82"},
    {"country": "Netherlands", "code": "+31"},
    {"country": "Sweden", "code": "+46"},
    {"country": "Norway", "code": "+47"},
    {"country": "Switzerland", "code": "+41"}
]

interface FormData {
  firstname: string;
  lastname: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  
  // month: string;
  // day: string;
}


const chromeCall = async()=>{

  function handleUserDataMessage(message) {
    console.log("MSG",message)
    if (message.type === "UPDATE_OAUTH_USER_ID") {

      if(message.value.isSuccess === "yes"){
        authStorage.setAuth({
          user: { id: message.value.id, email: "gmail" },
          accessToken: message.value.isSuccess,
          defaultSectionId: message.value.id
                });
          navigate("/card")
      }
    }
  }

  // Add the listener for the click session
  setInterval(()=>{
    chrome.runtime.onMessage.addListener(handleUserDataMessage);
  },3000)

}

const handleLogin = () => {
    
    const googleLoginUrl = "https://app.garde-robe.com/version-81fld/google-signin";
    window.open(googleLoginUrl, "_blank");
    
    chromeCall()
};



  const handleSignUp = async()=>{
    try{
     const validateFormErr = validateForm(signup)
     setErrors(validateFormErr);
     if (Object.keys(validateFormErr).length === 0){
      let data ={
        email: signup.email,
        password: signup.password,
        namefirst: signup.firstname,
        namelast: signup.lastname,
        username: signup.username,
        birthday_month: selectedMonth + 1, //number
        birthday_day: selectedDay, //number
        phone_code: parseInt(selectedCode), //number
        phone_number: signup.phone,
        phone_full: `${selectedCode}${signup.phone}` 
      }
      setIsLoading(true)
      const response = await postWithoutAuth("/signup",data)
      if(response.status==="success"){
       await handleSignIn(
          {
            email:signup.email,
            password:signup.password
          }
        )
        setIsLoading(false)
      }           
    }
    else{

    }

    }catch(err){

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
              Sign Up
            </div>
            <div></div>
            </div>
<div style={Styles.htHandle}>            
      <div>
        <div style={Styles.mT}>
          Full name
        </div>
        <div style={Styles.contentDiv}>
          <div>
          <div  style={Styles.commDiv}>
             <input type='text' placeholder='First Name' name="firstname"  style={Styles.commInput}  onChange={handleChange}
              />
          </div>
          {errors.firstname && <p style={Styles.isVal}>{errors.firstname}</p>}
          </div>
          <div>
          <div style={Styles.commDiv}>
             <input type='text' placeholder='Last Name' name="lastname" style={Styles.commInput}  onChange={handleChange}/>
          </div>
          {errors.lastname && <p style={Styles.isVal}>{errors.lastname}</p>}
          </div>
        </div>
     </div>
     <div>
       <div style={Styles.mT}>
          Username
        </div>
        <div>
        <div  style={Styles.commDiv1}>
             <input type='text' placeholder='@ username' name="username" style={Styles.commInput1}  onChange={handleChange}/>
        </div>
        {errors.username && <div style={Styles.isVal}>{errors.username}</div>}
        </div>
     </div>
     <div>
        <div style={Styles.mT}>
          Birthday
        </div>
        <div style={Styles.contentDiv}>
          <div style={Styles.commDiv}>
          <select style={selectedMonth === 13 ? Styles.commInputInitial :  Styles.commInputDrop} value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}>
          <option value={13} disabled hidden style={Styles.commonPlace}>Month</option>
            {monthNames?.map((itm,id)=>{
              return(
                <option key={id} value={id} style={Styles.optionStyling}>
                    {itm}
                </option>
              )
            })

           }
          </select>
             {/* <input type='text' placeholder='Month' style={Styles.commInput}/> */}
          </div>
          <div style={Styles.commDiv}>
          <select value={selectedDay}
            onChange={(e) => setSelectedDay(Number(e.target.value))} 
            style={selectedDay === 0 ? Styles.commInputInitial :  Styles.commInputDrop}
            >
          <option value={0} disabled hidden>Day</option>
          {daysInMonth?.map((itm,id)=>{
              return(
                <option key={itm} value={itm} style={Styles.optionStyling} >
                    {itm}
                </option>
              )
            })

           }
    </select>
          </div>
        </div>
     </div>
     <div>
       <div style={Styles.mT}>
          Email
        </div>
        <div>
        <div style={Styles.commDiv1}>
             <input type='text' placeholder='Enter email here' name="email" style={Styles.commInput1}  onChange={handleChange}/>
        </div>
        {errors.email && <div style={Styles.isVal}>{errors.email}</div>}
        </div>
     </div>
     <div>
       <div style={Styles.mT}>
          Password
        </div>
        <div>
        <div style={Styles.commDiv1}>
             <input type='text' placeholder='Enter Password here' name="password" style={Styles.commInput1}  onChange={handleChange}/>
        </div>
        {errors.password && <div style={Styles.isVal}>{errors.password}</div>}
        </div>
     </div>
        <div style={Styles.commonPassword}>
          Must incude:
        </div>
        <div style={Styles.pasVal}>
          <img src={signup.password.length >= 8 ? Green : Dark} alt="dark" style={Styles.heightImage}/>
          <div style={signup.password.length >= 8 ? Styles.commonColor1 :Styles.commonColor}> 8 Characters</div>
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
          Phone number
        </div>
        <div style={Styles.contentDiv}>
          <div>
          {/* <select style={!booleanRef.current ? Styles.phoneCodeInit :  Styles.phoneCode}  defaultValue="+1">
          {Country?.map((itm,id)=>{
              return(
                <option key={id} value={itm.country} style={Styles.optionStyling} onClick={()=>
                  {setSignup((prevData) => ({
                  ...prevData,
                  code:itm.code,
                }));
                booleanRef.current=true
                }}>
                    {itm.code}
                </option>
              )
            })
           }
    </select> */}
    <select style={selectedCode === "+0" ? Styles.phoneCodeInit :  Styles.phoneCode} value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}>
          <option value={"+0"} disabled hidden>+1</option>
            {countryCode?.map((itm,id)=>{
              return(
                <option key={id} value={id} style={Styles.optionStyling}>
                    {itm}
                </option>
              )
            })

           }
          </select>
          </div>
          <div>
          <div>
          <input type='text' name="phone" style={Styles.phoneCode1}  onChange={handleChange}/>
          </div>
          {errors.phone && <p style={Styles.isVal}>{errors.phone}</p>}
          </div>
        </div>
     </div>
     </div>
     <div style={Styles.footr}>
        <div style={Styles.btnCrt} onClick={handleSignUp}>
          {isLoading ? "creating..." : "Create account"}
        </div>
     </div>
     <div style={Styles.hrT}>
        <div style={Styles.hrLine}></div>
        <div>or</div>
        <div style={Styles.hrLine}></div>
     </div>
     <div>
        <div style={Styles.btnCrt1}>
           <div>
               <img src={Logo} alt="Logo"/>
           </div>
           <div style={Styles.mTG} onClick={handleLogin}>
            Continue with Google
           </div>
        </div>
     </div>
     <div style={Styles.lastCont}>
     <span style={Styles.mT}>
            Already have an account?
           </span>
           <span style={Styles.blueSect}>
           <Link
                 to="/signIn"
                 style={Styles.textDec}
              >Log In
              </Link>
           </span>
     </div>
    </div>
    </Container>
  );
};

export default SignUp;
