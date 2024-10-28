interface StylesType {
    myContain: React.CSSProperties;
    contentDiv: React.CSSProperties;
    mT: React.CSSProperties;
    commDiv: React.CSSProperties;
    commDivPh: React.CSSProperties;
    commDivPh1: React.CSSProperties;
    commDiv1: React.CSSProperties;
    commInput: React.CSSProperties;
    commInput1: React.CSSProperties;
    footr: React.CSSProperties;
    btnCrt: React.CSSProperties;
    btnCrt1: React.CSSProperties;
    hrT: React.CSSProperties;
    hrLine: React.CSSProperties;
    lastCont: React.CSSProperties;
    blueSect: React.CSSProperties;
    topText: React.CSSProperties;
    mT1: React.CSSProperties;
    textDec: React.CSSProperties;
    isVal: React.CSSProperties;
    forgot: React.CSSProperties;
    commInputPass: React.CSSProperties;
    mtStyle: React.CSSProperties;
    widSet: React.CSSProperties;
    arrSeter: React.CSSProperties;
}

export const Styles: StylesType = {
    myContain : {
        display: "flex",
        flexDirection: "column",
        gap:"12px",
        alignItems:"center"
      },
    contentDiv: {
        display: "flex",
        width: "100%",
        gap:"8px",
        marginTop: "8px",
        justifyContent: "space-between"
      },
    mT:{
        color:"#5E5E5E",
        fontSize: "14px",
        fontFamily: `Montserrat, sans-serif`
      },
    mT1:{
        marginTop:"24px"
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
        borderRadius:"33px",
        backgroundColor:"#EDEDED",
        padding:"0px 16px",
        display:"flex",
        height:"47px",
        justifyContent:"space-between",
        alignItems:"center",
        width: "344px"
      },
    commInput:{
        padding: "16px",
        borderRadius: "33px",
        backgroundColor: "#EDEDED",
        color: "#ABABAB",
        border: "none",
        width: "125px",
        outline: "none"
      },
    commInput1:{
        padding: "16px",
        borderRadius: "33px",
        fontFamily:"'Montserrat', sans-serif",
        backgroundColor: "#EDEDED",
        color: "#ABABAB",
        border: "none",
        width: "344px",
        marginTop:"4px",
        outline: "none"
      },
    commInputPass:{
        // padding: "16px",
        // borderRadius: "33px",
        backgroundColor: "#EDEDED",
        fontFamily:"'Montserrat', sans-serif",
        color: "#ABABAB",
        border: "none",
        // width: "297px",
        marginTop:"4px",
        outline: "none"
      },
    footr:{
        marginTop: "24px",
        // width: "100%"
      },
      
    btnCrt:{
        backgroundColor: "#252525",
        color: "#FFFFFF",
        borderRadius: "24px",
        fontFamily:"'Montserrat', sans-serif",
        border: "none",
        width: "376px",
        padding: "16px",
        fontWeight:"600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor:"pointer"
      },
    btnCrt1:{
        color: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #252525",
        padding: "7.5px",
        display: "flex",
        justifyContent: "center",
        fontFamily:"'Montserrat', sans-serif",
        alignItems: "center",
        width:"359px",
        gap:"24px",
        fontWeight:"500",
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
    forgot:{
      fontWeight:"600",
      fontSize:"14px",
      color:"#5E5E5E",
      textDecoration:"none",
      width:"376px",
      cursor:"pointer"
    },
    mtStyle:{
      marginTop:"2px",
      cursor:"pointer"
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
    }
}