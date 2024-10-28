import * as React from "react";
import { useState } from "react";
import { Styles } from "./styles";
import { Link,Navigate, useNavigate } from "react-router-dom";
import Logo from "./gr.png"
import hint from "./hint.png"
import Cross from "./cross.png"
import Only from "./only.png"
import Arrow from "./arrow.png"
import Fr from "./fr.png"
import Up from "./up.png"
import Circle from "./Circle.png"
import Plus from "./plus.png"
import Down from "./down.png"
import Verified from "./verified.png"
import useStorage from "../../hooks/useStorage";
import authStorage from "../../shared/storages/authStorage";
import noprod from "./noprod.png"
import { useAuth } from "../../hooks/useAuth";
import { usePopup } from "../../hooks/usePopup";
import { useWishList } from "../../hooks/useWishList";
import { postWithAuth } from "../../shared/requestHandler";


const CardList: React.FC = () => {
    const [id,setId] = useState(1)
    const navigate = useNavigate()
    const { pageTitle,storeName, setOpenPopup } = usePopup();
    const [pollQs,setPollQs] = useState("");
    const [isEdit,setIsEdit] = useState(false)
    const [saveWishLoad,setSaveWishLoad] = useState(false)
    const [wishlistData,setWishlistData] = useState([])
    const [selArr,setSelArr] = useState([])
    const [pollAns,setPollAns] = useState("");
    const [pollAns1,setPollAns1] = useState("");
    const [isHovered, setIsHovered] = useState(100);
    const [wishInput,setWishInput] = useState({
      product:pageTitle,
      retailer:storeName,
      caption:""
    })
    const [isImgHov, setIsImgHov] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading1, setLoading1] = useState<boolean>(false);
    const { activeSelection, handleDisabledSubmit, handleSubmitPost } =
    useWishList();

    
    const { handleSignOut } = useAuth();
    
    const fetchData = async()=>{
      try{
        const response = await postWithAuth("/fetch_wishlist_by_user",storageAuth.accessToken,{user:storageAuth.user.id})
        console.log("WISH",response)
        setWishlistData(response?.response?.wishlist || [])

      }catch(err){
        
      }
    }
    
    React.useEffect(
      ()=>{
        fetchData()
      },[])
      
      const handleChange = (e) => {
        
        const { name, value } = e.target;
        
      setWishInput((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    
    const saveWishlist = async(val)=>{
      if(val===1){
        try{
          let data = {
            creator: storageAuth.user.id, //storageAuth.user.id
            product_name: wishInput.product,
            store_name: wishInput.retailer,
            caption:wishInput.caption || "",
            // brand_name: "Data",
            // product_brand: "Test",
            url_product: window.location.hostname,
            // product_price: "$10.00",
            is_chrome_extension: "true",
            "photo:list": [activeSelection?.images[0]?.source],
            wishlist_list: wishlistData.length === 1 ? [wishlistData[0]?._id] : selArr,
            "OS.post_type": "product",
            "OS.sub_type": "Wishlists",
          }
          setSaveWishLoad(true)
          const response = await postWithAuth("/create_post_to_wishlists",storageAuth.accessToken,data)
          setSaveWishLoad(false)
          if(response.status === "success")
            {
            navigate("/save",{state:"wishlist name"})
          }
        }catch(err){
  
        }
      }
      else if(val===2){
        try{
          let data = {
            creator: storageAuth.user.id,
            product_name: wishInput.product,
            store_name: wishInput.retailer,
            caption:wishInput.caption,
            // brand_name: "Data",
            // product_brand: "Test",
            url_product: window.location.hostname,
            // product_price: "$10.00",
            is_chrome_extension: "true",
            "photo:list": [activeSelection?.images[0]?.source],
            // wishlist: "1695954200703x289695048361413560",
            "OS.post_type": "product",
            "OS.sub_type": "Closet",
          }
          setSaveWishLoad(true)
          const response = await postWithAuth("/create_post",storageAuth.accessToken,data)
          setSaveWishLoad(false)
          if(response.status === "success")
          {
            navigate("/save",{state:"Closet"})
          }
        }catch(err){
  
        }
      }
      else{
        try{
          let data = {
            creator: storageAuth.user.id,
            product_name: wishInput.product,
            store_name: wishInput.retailer,
            // brand_name: "Data",
            // product_brand: "Test",
            url_product: window.location.hostname,
            // product_price: "$10.00",
            is_chrome_extension: "true",
            "photo:list": [activeSelection?.images[0]?.source],
            "OS.post_type": "poll",
            "OS.sub_type": "Poll",
            "OS.poll_type": "user-images",
            Poll_question: pollQs
          }
          setSaveWishLoad(true)
          const response = await postWithAuth("/create_post",storageAuth.accessToken,data)
          setSaveWishLoad(false)
          if(response.status === "success")
          {
            navigate("/poll")
          }
        }catch(err){
  
        }
      }
    }

    const handleLogout = async ()=>{
      await setLoading1(true)
      await handleSignOut()
      await setLoading1(false)
    }

    const storageAuth = useStorage(authStorage);

    console.log("SSTT",storageAuth)

  interface User {
    id: number;
    label: string;
    val: string;
    component: React.ReactNode;
  }
  interface Static{
    id:number;
  }
const isSelect = (element)=>{
 const index = selArr.indexOf(element);
    if (index > -1) {
        selArr.splice(index, 1);
    } else {
        selArr.push(element);
    }
    setSelArr(selArr)
  }

  const lists : Static[]=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
  ]

  const listSection : User[] = [
    {
      id:1,
      label:"Wishlist",
      val:"wishlist",
      component:
      <div>
        {storageAuth.accessToken ? 
         <div style={Styles.wishlstSection}>
            <div>
              <div style={Styles.innrTxt}>
                SELECT A WISHLIST
              </div>
            {wishlistData.length > 0 ?
            (
              wishlistData.length === 1 ? 
              <div style={Styles.mainBx}>
              <div style={Styles.htSetter}>
                  <div  
                    style={Styles.listFoot1} 
                    // onClick={()=>isSelect(it?._id)}
                  >
                  <div style={Styles.dFl}>
                      <img src={wishlistData[0]?.["images_preview:list"]?.length === 0 ? Only : wishlistData[0]?.["images_preview:list"][0]} alt='none' style={Styles.imgSetHtWd}/>
                      <div>
                        <div style={Styles.inP}>
                          {wishlistData[0].title}
                        </div>
                        <div style={Styles.inPVal}>
                          {wishlistData[0].is_private ? "Private" : "Public"}
                        </div>
                      </div>
                    </div>
                    <div style={Styles.dFl}>
                      <img src={Verified} alt='verified' />
                      <img src={Up} alt='do' style={Styles.dest}/>  
                    </div>
                  </div>
              </div> 
   
              <div style={Styles.dstly} onClick={()=>navigate("/create")}>
              <img src={Plus} alt='verified' />
              <div style={Styles.txtSYlt}>
                Create New Wishlist
              </div>
              </div> 
            </div>
              : 
            isOpen ? 
            <div style={Styles.mainBx}>
              <div style={Styles.htSetter}>
              {
              wishlistData.map((it,ix)=>{
                return(
                  <div 
                    key={ix} 
                    style={isHovered === ix ? Styles.listFootHover : Styles.listFoot1} 
                    onClick={()=>isSelect(it?._id)}
                    onMouseEnter={() => setIsHovered(ix)}
                    onMouseLeave={() => setIsHovered(100)}
                  >
                  <div style={Styles.dFl}>
                      <img src={it?.["images_preview:list"]?.length === 0 ? Only : it?.["images_preview:list"][0]} alt='none' style={Styles.imgSetHtWd}/>
                      <div>
                        <div style={Styles.inP}>
                          {it.title}
                        </div>
                        <div style={Styles.inPVal}>
                          {it.is_private ? "Private" : "Public"}
                        </div>
                      </div>
                    </div>
                    {ix > 0 ?
                    <div style={Styles.dFl}>
                      <img src={selArr.includes(it?._id) ? Verified : Circle} alt='verified' />
                      <img src={Up} alt='do' style={Styles.dest}/>  
                    </div> : 
                    <div style={Styles.dFl}>
                    <img src={selArr.includes(it?._id) ? Verified : Circle} alt='verified' />
                    <img src={Up} alt='do' style={Styles.Cr}  onClick={(event)=>{ 
                       event.stopPropagation(); 
                       setIsOpen(false)}}/>
                  </div>
                     }
                  </div>
                )
              })  
              }
              </div> 
   
              <div style={Styles.dstly} onClick={()=>navigate("/create")}>
              <img src={Plus} alt='verified' />
              <div style={Styles.txtSYlt}>
                Create New Wishlist
              </div>
              </div> 
            </div> : 
            <div style={Styles.listFoot}>
            <div style={Styles.dFl}>
              <img src={wishlistData[0]?.["images_preview:list"]?.length === 0 ? Only : wishlistData[0]?.["images_preview:list"]} alt='none' style={Styles.imgSetHtWd}/>
              <div>
                <div style={Styles.inP}>
                  {wishlistData[0]?.title}
                </div>
                <div style={Styles.inPVal}>
                  {wishlistData[0]?.is_private ? "Private" : "Public"}
                </div>
              </div>
            </div>
            <div>
              <img src={Down} alt='do' style={Styles.Cr} onClick={()=>setIsOpen(true)}/>
            </div>
            </div> 
         ) :    
            <div style={Styles.crtWish} onClick={()=>navigate("/create")}>
            <img src={Plus} alt='verified' />
            <div style={Styles.txtSYlt}>
               Create New Wishlist
            </div>
            </div> 
             }
            </div>
            <div>
             <div style={Styles.innrTxt}>
                ADD A CAPTION (OPTIONAL)
              </div>
              <div>
                 <input type='text'  name="caption" style={ Styles.innrInpt} placeholder="Write a caption..." onChange={handleChange} value={wishInput.caption}/>
              </div>
            </div>
         </div> : 
         <div style={Styles.wishlstSection}>
         
         <div>
           <div style={Styles.innrTxt}>
             SELECT A WISHLIST
           </div>
           <div style={Styles.listFoot}>
             <div style={Styles.dFlLg}>
               <img src={Only} alt='none' style={Styles.imgSetHtWd}/>
               <div style={Styles.setCol}>
                 Log In to select a Wishlist
               </div>
             </div>
             <div>
               <img src={Arrow} alt='arrow'/>
             </div>
           </div>
         </div>
         <div>
          <div style={Styles.innrTxt}>
             ADD A CAPTION
           </div>
           <div>
              <input type='text' value={"What are your thoughts..."}  style={Styles.innrInptDisb} disabled/>
           </div>
         </div>
      </div>
        }
      </div>
    },
    {
      id:2,
      label:"Closet",
      val:"closet",
      component:
      <div style={Styles.mtClosetTop}>
      <div style={Styles.innrTxt}>
         ADD A CAPTION (OPTIONAL)
       </div>
       <div>
          <input type='text'  name="caption" style={ Styles.innrInpt} placeholder="Write a caption..." onChange={handleChange} value={wishInput.caption}/>
       </div>
     </div>
    },
    {
      id:3,
      label:"Poll",
      val:"poll",
      component:
      <div>
       <div style={Styles.wishlstSection}>
       <div>
         <div style={Styles.mainBx1}>
      <div style={Styles.pollOpt}>
        QUESTION (OPTIONAL)
      </div>
      <div>
        <input type="text" value={pollQs} style={Styles.commInput1} placeholder="Ask question" onChange={(e)=>setPollQs(e.target.value)}/>
      </div>
      <div style={Styles.pollOpt1}>
        OPTIONS
      </div>
      <div>
        <input type="text" value={pollAns} style={Styles.commInput1} placeholder="Add" onChange={(e)=>setPollAns(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={pollAns1} style={Styles.commInput1} placeholder="Add" onChange={(e)=>setPollAns1(e.target.value)}/>
      </div>

    </div>
       </div>
    </div>
      {/* {storageAuth.accessToken ?
       <div style={(pollQs && pollAns && pollAns1) ? Styles.selctedDiv : Styles.blurrDiv} onClick={()=> (pollQs && pollAns && pollAns1) ? saveWishlist(3) : ()=>{}}>
           {saveWishLoad ? "Loading..." : "Create Poll" }
          </div> :
        <div style={Styles.blurrDiv}>
            Create Poll
        </div>
      } */}
    </div>
    }
  ]

  return (
    <div  style={Styles.container}>
    <div style={Styles.headerClass}>
    {storageAuth.accessToken &&
      <div>
        <img src={Cross} alt="cross" style={Styles.htCR} onClick={()=>setOpenPopup(false)}/>
      </div>
    }
    {
      <div>
        <img src={Logo} alt='garde'/>
      </div>
    }
    {!storageAuth.accessToken &&
      <div style={Styles.dFl}>
         <div style={Styles.btnBlue} onClick={()=>navigate("/signIn")}>
            <div style={Styles.ltHT}>Log In</div>
         </div>
         <div  style={Styles.btnWhite} onClick={()=>navigate("/signup")}>
         <div style={Styles.ltHT}>Sign Up</div>
         </div>
      </div>
    }
    {storageAuth.accessToken &&
      <div>
            <div
                    style={Styles.lgsyt}
                    onClick={()=>handleLogout()}
                  >
                    {loading1 ? "Loading..." : "Log Out"}
                  </div>
            </div>
     }
    </div>
    <div style={Styles.scrolHtSection}>
    {storageAuth.accessToken ? 
    <div 
      style={Styles.imgClass}
      // onMouseEnter={() =>storageAuth.accessToken ? setIsImgHov(true) :setIsImgHov(false)}
      // onMouseLeave={() => setIsImgHov(false)}
    >
      {activeSelection?.images?.length > 0 ?
       <img 
        src={activeSelection?.images[0]?.source}
        alt="smp" style={isImgHov ? Styles.imgClassHov : Styles.imgInnerStyling}
        /> :
       <img 
        src={noprod} 
        alt="smp" 
        style={Styles.imgInnerStyling}
        />
      }
      {/* {isImgHov &&
        <div style={Styles.backTxt}>
           <div>Update</div> 
           <div>Image</div>
        </div>
    } */}
    </div> : 
    <div>
    <div style={Styles.imgClass}>
     <img 
      src={noprod} 
      alt="smp" 
      style={Styles.imgInnerStyling}
      />
    </div>
    <div>
      <img src={hint} alt="hint" style={Styles.imgHint}/>
    </div>
    </div>
    }
    {storageAuth.accessToken && (isEdit ? 
     <div style={Styles.editDetailSection}>
       <div style={Styles.dfEdt}>
         <div></div>
         <div style={Styles.edtText}>Edit Details</div>
         <div  onClick={()=>setIsEdit(!isEdit)}><img src={Up} alt="up" style={Styles.imgEdt}></img></div>
       </div>
       <div>
         <div style={Styles.prdEdtTxtng}>PRODUCT TITLE</div>
         <div style={Styles.prInpt}>
           <input type="text" name="product" style={Styles.inptEdtTxt} onChange={handleChange} value={wishInput.product}/>
         </div>
         <div style={Styles.prdEdtTxtng1}>RETAILER</div>
         <div style={Styles.prInpt}>
           <input type="text" name="retailer" style={Styles.inptEdtTxt} onChange={handleChange} value={wishInput.retailer}/>
         </div>
       </div>
     </div>
    :
    <div style={Styles.editDet} onClick={()=>setIsEdit(!isEdit)}>
      Edit Details
    </div>
    )}
    <div style={Styles.headSection}>
      {
        listSection?.map((item,key)=>{
           return(
           <div key={key}  style={item.id === id ? Styles.headSectionInner1 : Styles.headSectionInner} onClick={()=> storageAuth.accessToken ? setId(item.id) : ()=>{}}>
              {item.label}
           </div>
           )
        })
      }
    </div>
    <div style={Styles.dynamicSection}>
       {
        listSection?.map((itm,idx)=>{
          return(
            itm.id === id ? itm.component : <div></div>
          )
        })
       }
    </div>
    </div>
    {storageAuth.accessToken ?
         <div style={
            id === 1 ?
            (wishlistData.length > 0 ?
              wishlistData.length === 1 ? 
              Styles.selctedDiv : 
              (selArr.length > 0 ?
                Styles.selctedDiv:
                Styles.blurrDiv
              ) 
              :
              Styles.blurrDiv
            ) 
            :
            Styles.selctedDiv 
        } onClick={
           id === 1 ? 
           (wishlistData.length > 0 ? 
            (
              wishlistData.length === 1 ? 
              ()=>saveWishlist(id) 
              :
              selArr.length > 0 ? 
              ()=>saveWishlist(id) :
              ()=>{}
            ) 
            : 
            ()=>{}
          ) 
           : ()=>saveWishlist(id)}
          >
              {saveWishLoad ? "Loading..."  : `Save to ${listSection[id - 1].label}`}
            </div> :
          <div style={Styles.blurrDiv}>
                     Save to Wishlist
          </div>
        }
  </div>
  );
};

export default CardList;
