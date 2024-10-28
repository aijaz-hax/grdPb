import back from "./down.png"

interface StylesType {
    myContain: React.CSSProperties;
    contentDiv: React.CSSProperties;
    dFl: React.CSSProperties;
    mT: React.CSSProperties;
    mTG: React.CSSProperties;
    commDiv: React.CSSProperties;
    commDivPh: React.CSSProperties;
    commDivPh1: React.CSSProperties;
    commDiv1: React.CSSProperties;
    commInput: React.CSSProperties;
    commInput1: React.CSSProperties;
    commInputDrop: React.CSSProperties;
    footr: React.CSSProperties;
    btnCrt: React.CSSProperties;
    btnCrt1: React.CSSProperties;
    hrT: React.CSSProperties;
    hrLine: React.CSSProperties;
    lastCont: React.CSSProperties;
    blueSect: React.CSSProperties;
    topText: React.CSSProperties;
    phoneCode: React.CSSProperties;
    phoneCode1: React.CSSProperties;
    textDec: React.CSSProperties;
    isVal: React.CSSProperties;
    optionStyling: React.CSSProperties;
    htHandle: React.CSSProperties;
    widSet: React.CSSProperties;
    arrSeter: React.CSSProperties;
    commInputInitial: React.CSSProperties;
    phoneCodeInit: React.CSSProperties;
    pasVal: React.CSSProperties;
    commonColor: React.CSSProperties;
    commonPassword: React.CSSProperties;
    commonColor1: React.CSSProperties;
    heightImage: React.CSSProperties;
    forFooter: React.CSSProperties;
    forFootText: React.CSSProperties;
    forFootTextBlue: React.CSSProperties;
}

export const Styles: StylesType = {
    myContain : {
        display: "flex",
        flexDirection: "column",
        gap:"12px",
        fontFamily: `Montserrat, sans-serif !important`,
        // overflow: "auto",
        // scrollbarWidth: "none",
        alignItems:"center"
      },
    contentDiv: {
        display: "flex",
        width: "100%",
        gap:"8px",
        marginTop: "4px",
        justifyContent: "space-between"
      },
    mT:{
        color:"#5E5E5E",
        fontSize: "14px",
        fontFamily: `Montserrat, sans-serif`,
        marginTop:"12px",
        marginLeft:"12px"
      },
    pasVal:{
        display:"flex",
        alignItems:"center",
        marginTop:"4px",
        gap:"12px"
    },
    commonPassword:{
      color:"#ABABAB",
      fontSize: "16px",
      lineHeight:"20px",
      fontWeight:"400",
      fontFamily: `Montserrat, sans-serif`,
      marginTop:"12px",
      marginBottom:"6px"
    },
    commonColor:{
       color:"#ABABAB",
       fontWeight:"500",
       lineHeight:"20px",
       fontSize:"16px",
    },
    commonColor1:{
       color:"#21CA12",
       fontWeight:"500",
       lineHeight:"20px",
       fontSize:"16px",
    },
    mTG:{
        color:"#5E5E5E",
        fontSize: "14px",
        fontFamily: `Montserrat, sans-serif`,
      },
    commDiv:{
        // width: "45%"
      },
    commDivPh:{
        width: "10%"
      },
    commDivPh1:{
        width: "80%"
      },
    commDiv1:{
        // width: "100%"
      },
    commInput:{
        padding: "16px",
        borderRadius: "33px",
        fontFamily: `Montserrat, sans-serif !important`,
        backgroundColor: "#EDEDED",
        color: "#252525",
        border: "none",
        width: "152px",
        fontWeight:"500",
        outline: "none",
      },
    commInput1:{
        padding: "16px",
        borderRadius: "33px",
        backgroundColor: "#EDEDED",
        fontFamily: `Montserrat, sans-serif !important`,
        color: "#252525",
        border: "none",
        width: "344px",
        fontWeight:"500",
        marginTop:"4px",
        outline: "none"
      },
    phoneCode:{
      appearance:"none",
      cursor:"pointer",
      padding: "16px",
      borderRadius: "33px",
      backgroundColor: "#EDEDED",
      color: "#252525",
      border: "none",
      width: "80px",
      outline: "none",
      marginTop:"4px"
    },
    phoneCodeInit:{
      appearance:"none",
      cursor:"pointer",
      padding: "16px",
      borderRadius: "33px",
      backgroundColor: "#EDEDED",
      color: "#ABABAB",
      border: "none",
      width: "80px",
      outline: "none",
      marginTop:"4px"
    },
    phoneCode1:{
      padding: "16px",
      borderRadius: "33px",
      backgroundColor: "#EDEDED",
      fontFamily: `Montserrat, sans-serif !important`,
      color: "#252525",
      border: "none",
      width: "256px",
      fontWeight:"500",
      marginTop:"4px",
      outline: "none"
    },
      footr:{
        marginTop: "12px",
        // width: "100%"
      },
      
    btnCrt:{
        backgroundColor: "#252525",
        color: "#FFFFFF",
        fontFamily: `Montserrat, sans-serif !important`,
        borderRadius: "24px",
        border: "none",
        width: "344px",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor:"pointer",

      },
    btnCrt1:{
        color: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #252525",
        padding: "7.5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"359px",
        gap:"24px",
        boxShadow: "0px 1px 2px 0px #1018280D",
        cursor:"pointer"
      },
      
    hrT:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      
    hrLine:{
        borderTop: "1px solid #E0E0DE",
        width: "183px"
      },
      
    lastCont:{
        margin: "0 40px"
      },
      
    blueSect:{
        color:"#8EADFF",
        fontSize: "16px",
        fontFamily: `Montserrat, sans-serif`,
        fontWeight: 700,
        paddingLeft: "6px"
      },
    topText:{
        marginTop:"12px",
        fontSize:"20px",
        fontFamily: `Montserrat, sans-serif`,
        fontWeight: 700,
        color:"#252525"
    },
    textDec:{
      textDecoration:"none",
      color:"#8EADFF"
    },
    isVal:{
      fontSize:"12px",
      marginTop:"2px",
      color:"#e6192a"
  },
  htHandle:{
    maxHeight: "18rem",
    overflowY: "auto",
    scrollbarWidth: "none"
  },
  commInputDrop:{
    appearance:"none",
    cursor:"pointer",
    background: `url(${back}) no-repeat right 16px center`,
    backgroundSize:"14px",
    // backgroundImage:`url(${back})`,
    padding: "16px",
    borderRadius: "33px",
    backgroundColor: "#EDEDED",
    color: "#252525",
    border: "none",
    width: "184px",
    outline: "none",
    },
  commInputInitial:{
    appearance:"none",
    cursor:"pointer",
    background: `url(${back}) no-repeat right 16px center`,
    backgroundSize:"14px",
    // backgroundImage:`url(${back})`,
    padding: "16px",
    borderRadius: "33px",
    backgroundColor: "#EDEDED",
    color: "#ABABAB",
    border: "none",
    width: "184px",
    outline: "none",
    },
    optionStyling:{
      border:"none",
      color:"#252525",
      padding:"14px",
      outline:'none',
      
    },
    widSet:{
      width:"376px",
      display:"flex",
      justifyContent:"space-between",
      // alignItems:"center"
    },
    arrSeter:{
      height:"40px",
      width:"40px",
      marginLeft:"-12px",
      cursor:"pointer"
      // marginTop:"-12px"
    },
    heightImage:{
      height:"16px",
      width:"16px"
    },
    forFooter:{
        marginTop:"12px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      },
      forFootText:{
        fontWeight:"400",
        fontSize:"16px",
        color:"#252525",
        lineHeight:"20px"
      },
      forFootTextBlue:{
        fontWeight:"700",
        fontSize:"16px",
        color:"#8EADFF",
        lineHeight:"20px"
      },
      dFl: {
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
      },
}