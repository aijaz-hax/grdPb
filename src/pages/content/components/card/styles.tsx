import { Hidden } from "@mui/material";

interface StylesType {
    container: React.CSSProperties;
    headerClass: React.CSSProperties;
    dFl: React.CSSProperties;
    btnBlue: React.CSSProperties;
    btnWhite: React.CSSProperties;
    imgClass: React.CSSProperties;
    imgInnerStyling: React.CSSProperties;
    imgInnerStylingSmall: React.CSSProperties;
    headSection: React.CSSProperties;
    headSectionInner: React.CSSProperties;
    headSectionInner1: React.CSSProperties;
    dynamicSection: React.CSSProperties;
    wishlstSection: React.CSSProperties;
    innrTxt: React.CSSProperties;
    innrVal: React.CSSProperties;
    innrInpt: React.CSSProperties;
    listFoot: React.CSSProperties;
    listFoot1: React.CSSProperties;
    listFootHover: React.CSSProperties;
    imgSetHtWd: React.CSSProperties;
    setCol: React.CSSProperties;
    blurrDiv: React.CSSProperties;
    inP: React.CSSProperties;
    inPVal: React.CSSProperties;
    htSetter: React.CSSProperties;
    mainBx: React.CSSProperties;
    mainBx1: React.CSSProperties;
    dstly: React.CSSProperties;
    txtSYlt: React.CSSProperties;
    dest: React.CSSProperties;
    Cr: React.CSSProperties;
    lgsyt: React.CSSProperties;
    htCR: React.CSSProperties;
    selctedDiv: React.CSSProperties;
    selctedDivView: React.CSSProperties;
    crtWish: React.CSSProperties;
    saveWishStyle: React.CSSProperties;
    saveSpan: React.CSSProperties;
    saveSpanBold: React.CSSProperties;
    saveSpan1: React.CSSProperties;
    saveSpanBold1: React.CSSProperties;
    selctedDiv1: React.CSSProperties;
    createSpanBold: React.CSSProperties;
    createSpanBoldFor: React.CSSProperties;
    stylingCreate: React.CSSProperties;
    saveCont: React.CSSProperties;
    saveContCreate: React.CSSProperties;
    btnCrt: React.CSSProperties;
    btnCrt1: React.CSSProperties;
    bolding: React.CSSProperties;
    selctedDivBlurred: React.CSSProperties;
    innrInptCm: React.CSSProperties;
    pollQuestionContainer: React.CSSProperties;
    pollOpt: React.CSSProperties;
    pollOpt1: React.CSSProperties;
    commInput1: React.CSSProperties;
    imgClassHov: React.CSSProperties;
    backTxt: React.CSSProperties;
    ltHT: React.CSSProperties;
    innrInptDisb: React.CSSProperties;
    innrInptDisbEdit: React.CSSProperties;
    dFlLg: React.CSSProperties;
    imgHint: React.CSSProperties;
    editDet: React.CSSProperties;
    editDetailSection: React.CSSProperties;
    dfEdt: React.CSSProperties;
    edtText: React.CSSProperties;
    imgEdt: React.CSSProperties;
    prInpt: React.CSSProperties;
    inptEdtTxt: React.CSSProperties;
    prdEdtTxtng: React.CSSProperties;
    prdEdtTxtng1: React.CSSProperties;
    scrolHtSection: React.CSSProperties;
    saveWishStyle34: React.CSSProperties;
    bckImgHtWD: React.CSSProperties;
    mtForgt: React.CSSProperties;
    forTextSection: React.CSSProperties;
    forTextSt: React.CSSProperties;
    forDiv: React.CSSProperties;
    selctedDivFor: React.CSSProperties;
    selctedDivBlurredFor: React.CSSProperties;
    forFooter: React.CSSProperties;
    forFootText: React.CSSProperties;
    forFootTextBlue: React.CSSProperties;
    forEnv: React.CSSProperties;
    forTextPass: React.CSSProperties;
    txtPs: React.CSSProperties;
    mtClosetTop: React.CSSProperties;
}


export const Styles: StylesType = {
    container: {

    //   padding: '16px',
      // borderRadius: '12px',
      // backgroundColor: '#F5F5F5',
    //   width: '425px',
    },
    headerClass: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom:"20px"
    },
    dFl: {
      display: 'flex',
      gap: '4px',
      alignItems: 'center',
    },
    dFlLg: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    btnBlue: {
      backgroundColor: '#8EADFF',
      boxShadow: "0px 0px 10.3px 0px #00000012",
      // height: '48px',
      width: '85px',
      padding:"8px 0px",
      display: 'flex',
      fontSize: '14px',
      fontWeight: 500,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '24px',
      cursor:"pointer",
      // lineHeight:"20px",
      color: '#FFFFFF',
      textDecoration:"none"
    },
    btnWhite: {
      backgroundColor: '#FFFFFF',
      boxShadow: "0px 0px 10.3px 0px #00000012",
      // height: '48px',
      width: '85px',
      padding:"8px 0px",
      cursor:"pointer",
      display: 'flex',
      fontSize: '14px',
      lineHeight:"20px",
      textDecoration:"none",
      fontWeight: 500,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '24px',
      color: '#252525',
    },
    ltHT:{
      lineHeight:"20px"
    },
    imgClass: {
      display: 'flex',
      position:"relative",
      justifyContent: 'center',
      width:"136px",
      margin:"auto",
      alignItems: 'center',
      cursor:"pointer",
    },
    imgClassHov: {
      borderRadius: '12px',
      height: '180.45px',
      width: '135.24px',
      transition: '0.3s',
      filter: 'brightness(0.6)',
      cursor:"pointer",
    },
    backTxt:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#FFFFFF',
      fontSize: '16px',
      textAlign: 'center',
      fontWeight:"500",
      // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add background for better readability
      padding: '10px',
      borderRadius: '8px',
    },
    saveCont: {
      marginTop: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap:"4px"
    },
    saveContCreate: {
      marginTop: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap:"4px"
    },
    imgInnerStyling: {
      borderRadius: '12px',
      height: '160px',
      width: '130px',
    },
    imgInnerStylingSmall: {
      borderRadius: '8px',
      height: '110px',
      width: '87.9px',
    },
    headSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '16px',
      width:"393px",
    },  
    headSectionInner: {
      padding: '6px 0px',
      borderRadius: '24px',
      lineHeight:"20px",
      width:"123px",
      textAlign:"center",
      boxShadow: "0px 0px 10.3px 0px #00000012",
      // display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      backgroundColor: '#FFFFFF',
      color: '#252525',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    headSectionInner1: {
      padding: '6px 0px',
      borderRadius: '24px',
      lineHeight:"20px",
      width:"123px",
      textAlign:"center",
      boxShadow: "0px 0px 10.3px 0px #00000012",
      backgroundColor: '#8EADFF',
      color: '#FFFFFF',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    dynamicSection: {
      marginTop: '8px',
    },
    wishlstSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    innrTxt: {
      color: '#5E5E5E',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing:"1px"
    },
    innrVal: {
      color: '#252525',
      fontWeight: 700,
      fontSize: '18px',
      marginTop: '4px',
    },
    innrInpt: {
      fontWeight: 700,
      fontSize: '14px',
      fontFamily:"'Montserrat', sans-serif",
      color: '#252525',
      border: 'none',
      outline: 'none',
      width:"95%",
      backgroundColor: 'transparent',
      lineHeight:"20px"

    },
    innrInptDisb:{
      fontWeight: 700,
      fontSize: '14px',
      fontFamily:"'Montserrat', sans-serif",
      // marginTop: '4px',
      // marginLeft:"-8px",
      color: '#ABABAB',
      // fontStyle: 'italic',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
    },
    imgHint:{
      margin:"20px 0px 0px 25px"
    },
    innrInptDisbEdit:{
      fontWeight: 700,
      fontSize: '14px',
      // marginTop: '4px',
      // marginLeft:"-8px",
      color: '#ABABAB',
      // fontStyle: 'italic',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
    },
    innrInptCm: {
      fontWeight: 700,
      fontSize: '20px',
      marginTop: '4px',
      marginLeft:"21px",
      color: '#252525',
      fontFamily:"'Montserrat', sans-serif",
      // fontStyle: 'italic',
      border: 'none',
      outline: 'none',
      width:"210px",
      backgroundColor: 'transparent',
      // padding: 0,
    },
    bckImgHtWD:{
      height:"40px",
      width:"40px",
      cursor:"pointer"
    },
    listFoot: {
      borderRadius: '12px',
      border: '1px solid #E0E0DE',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: '57px',
      marginTop: '8px',
      padding: '0px 16px 0px 8px',
    },
    listFoot1: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 16px 0px 8px',
      borderRadius:"12px",
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      height: '57px',
      cursor:"pointer"
    },
    listFootHover: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 16px 0px 8px',
      borderRadius:"12px",
      alignItems: 'center',
      backgroundColor: '#EDEDED',
      transition: 'background-color 0.3s ease',
      height: '57px',
      cursor:"pointer"
    },
    htSetter:{
       maxHeight:"28vh",
       overflowY:"auto",
       scrollbarWidth:"none"
    },
    mainBx:{
      borderRadius: '12px',
      border: '1px solid #E0E0DE',
      marginTop: '6px',
      backgroundColor:"#FFFFFF"
    },
    mainBx1:{
      borderRadius: '12px',
      border: '1px solid #E0E0DE',
      padding: '12px',
      marginTop: '4px',
      backgroundColor:"#FFFFFF"
    },
    pollOpt:{
      fontWeight:"500",
      fontSize:"11px",
      color:"#5E5E5E"
    },
    pollOpt1:{
      fontWeight:"500",
      fontSize:"11px",
      color:"#5E5E5E",
      marginTop:"8px"
    },
    commInput1:{
      padding: "10px",
      borderRadius: "33px",
      backgroundColor: "#EDEDED",
      color: "#252525",
      fontSize:"14px",
      border: "none",
      width: "94%",
      marginTop:"4px",
      outline: "none"
    },
    imgSetHtWd: {
      width: '60px',
      height: '45px',
      borderRadius: '4px',
    },
    setCol: {
      color: '#ABABAB',
      fontWeight: 600,
      fontFamily:"'Montserrat', sans-serif",
      fontSize: '16px',
      lineHeight:"20px"
    },
    inP:{
        fontWeight:"600",
        fontSize:"16px",
        color:"#252525",
    },
    inPVal:{
        fontWeight:"500",
        fontSize:"12px",
        color:"#ABABAB"
    },
    blurrDiv: {
      backgroundColor: '#E0E0DE',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      marginTop:"12px",
      cursor:"no-drop"
    },
    selctedDiv:{
      backgroundColor: '#252525',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      marginTop:"12px",
      cursor:"pointer"
    },
    selctedDivView:{
      backgroundColor: '#252525',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      marginTop:"24px",
      cursor:"pointer"
    },
    selctedDivFor:{
      backgroundColor: '#252525',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      // marginTop:"12px",
      cursor:"pointer"
    },
    selctedDivBlurred:{
      backgroundColor: '#E0E0DE',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      marginTop:"12px",
      cursor:"pointer"
    },
    selctedDivBlurredFor:{
      backgroundColor: '#E0E0DE',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      // marginTop:"12px",
      cursor:"pointer"
    },
    selctedDiv1:{
      backgroundColor: '#252525',
      color: '#FFFFFF',
      borderRadius: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '52px',
      marginTop:"24px",
      cursor:"pointer"
    },
    dstly:{
      display:"flex",
      alignItems:"center",
      gap:"12px",
      cursor:"pointer",
      borderTop:"1px solid #E0E0DE",
      borderBottomLeftRadius:"12px",
      borderBottomRightRadius:"12px",
      padding:"8px 12px"
    },
    txtSYlt:{
      fontWeight:"600",
      fontSize:"16px",
      color:"#ABABAB"
    },
    dest:{
      visibility : "hidden"
    },
    Cr:{
      cursor:"pointer"
    },
    lgsyt:{
      cursor:"pointer",
      fontWeight:"500",
      color:"#252525",
      fontSize:"14px",
      marginTop:"-3px"
    },
    htCR:{
      cursor:"pointer",
      height:"24px",
      width:"24px"
    },
    crtWish:{
      border:"1px solid #E0E0DE",
      borderRadius:"12px",
      backgroundColor:"#FFFFFF",
      display:"flex",
      alignItems:"center",
      gap:"12px",
      cursor:"pointer",
      padding:"8px 12px",
      marginTop:"8px"
    },
    saveWishStyle:{
      marginTop: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveWishStyle34:{
      marginTop: '24px',
      display: 'flex',
      justifyContent: "space-between",
      alignItems:"center"
    },
    saveSpan:{
      fontSize:"20px",
      fontWeight:"500",
      color:"#2F2F2F"
    },
    saveSpanBold:{
      fontSize:"20px",
      fontWeight:"700",
      color:"#2F2F2F",
      paddingLeft:"6px"
    },
    saveSpan1:{
      fontSize:"20px",
      fontWeight:"500",
      color:"#2F2F2F",
      paddingLeft:"6px"
    },
    saveSpanBold1:{
      fontSize:"20px",
      fontWeight:"700",
      color:"#2F2F2F"
    },
    createSpanBold:{
      fontSize:"20px",
      fontWeight:"700",
      marginLeft:"-42px",
      color:"#2F2F2F",
    },
    createSpanBoldFor:{
      fontSize:"20px",
      fontWeight:"700",
      marginLeft:"-42px",
      color:"#2F2F2F",
      textAlign:"center"
    },
    mtForgt:{
      marginTop:"2px"
    },
    stylingCreate:{
      fontWeight:"500",
      fontSize:"11px",
      color:"#5E5E5E"
    },
    bolding:{
      fontWeight:"700",
      color:"#252525",
      fontSize:"20px",
      marginTop:"4px"
    },
    btnCrt:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"8px 16px",
      color:"#FFFFFF",
      fontWeight:"500",
      borderRadius:"38px",
      fontSize:"14px",
      cursor:"pointer",
      backgroundColor:"#8EADFF"
    },
    btnCrt1:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"8px 16px",
      fontWeight:"500",
      color:"#252525",
      borderRadius:"38px",
      fontSize:"14px",
      cursor:"pointer",
      backgroundColor:"#EDEDED",
      marginLeft:"4px"
    },
    pollQuestionContainer:{

    },
    editDet:{
      fontSize:"12px",
      fontWeight:"600",
      lineHeight:"15px",
      padding:"4px 8px",
      borderRadius:"27px",
      color:"#5E5E5E",
      width:"87px",
      backgroundColor:"#D1DDFF",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"auto",
      marginTop:"8px",
      cursor:"pointer"

    },
    edtText:{
      fontSize:"12px",
      fontWeight:"600",
      lineHeight:"15px",
      color:"#5E5E5E",
    },
    imgEdt:{
      width:"10px",
      height:"10px",
      color:"#5E5E5E",
      cursor:"pointer"
    },
    editDetailSection:{
      borderRadius:"12px",
      padding:"8px",
      margin:"auto",
      marginTop:"8px",
      backgroundColor:"#D1DDFF",
      display:"flex",
      flexDirection:"column",
      gap:"8px",
      width:"259px"
    },
    dfEdt:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
    },
    prInpt:{
      padding:"7px",
      borderRadius:"33px",
      backgroundColor:"#B1C6FF",
      width:"243px"
    },
    inptEdtTxt:{
      border:"none",
      width:"100%",
      outline:"none",
      fontSize:"14px",
      fontWeight:"500",
      lineHeight:"20px",
      color:"#5E5E5E",
      backgroundColor:"transparent"
    },
    prdEdtTxtng:{
      fontSize:"11px",
      fontWeight:"500",
      lineHeight:"20px",
      letterSpacing:"1px",
      color:"#5E5E5E",
    },
    prdEdtTxtng1:{
      fontSize:"11px",
      fontWeight:"500",
      lineHeight:"20px",
      letterSpacing:"1px",
      color:"#5E5E5E",
      marginTop:"3px"
    },
    scrolHtSection:{
      maxHeight:"29rem",
      overflowY:"auto",
      scrollbarWidth:"none"
    },
    forTextSection:{
      marginTop:"24px",
    },
    forTextSt:{
      fontWeight:"400",
      fontSize:"14px",
      color:"#5E5E5E",
      marginLeft:"12px"
    },
    forTextPass:{
      fontWeight:"400",
      fontSize:"14px",
      color:"#5E5E5E",
    },
    txtPs:{
      textAlign:"center"
    },
    forDiv:{
      backgroundColor:"#EDEDED",
      borderRadius:"33px",
      padding:"6px 16px",
      marginTop:"8px"
    },
    forFooter:{
      marginTop:"12px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    },
    forEnv:{
      marginTop:"24px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    },
    forFootText:{
      fontWeight:"400",
      fontSize:"16px",
      color:"#252525",
      lineHeight:"20px",
      cursor:"pointer"
    },
    forFootTextBlue:{
      fontWeight:"700",
      fontSize:"16px",
      color:"#8EADFF",
      lineHeight:"20px",
      cursor:"pointer"
    },
    mtClosetTop:{
      marginTop:"4px"
    }
  };
  