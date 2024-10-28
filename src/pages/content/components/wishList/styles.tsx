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
    dFlx: React.CSSProperties;
    widthSet: React.CSSProperties;
    mMinus: React.CSSProperties;

}

export const Styles: StylesType = {
    myContain : {
        display: "flex",
        flexDirection: "column",
        gap:"12px",
        // overflow: "auto",
        // scrollbarWidth: "none",
        alignItems:"center"
      },
      dFlx: {
        display:"flex",
        justifyContent:"space-between",
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
        // width: "100%"
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
        backgroundColor: "#EDEDED",
        color: "#ABABAB",
        border: "none",
        width: "297px",
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
        border: "none",
        width: "329px",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
    btnCrt1:{
        color: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #252525",
        padding: "7.5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"312px",
        gap:"24px"
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
        textDecoration:"none"
      },
    widthSet : {
        width:"290px",
        height:"30px"
    },
    mMinus:{
        marginTop:"-20px"
    }
}