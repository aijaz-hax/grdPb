import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { usePopup } from "@pages/content/hooks/usePopup";
import theme from "@pages/content/theme";
import Draggable from "react-draggable";

interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps & { isSelectingImage: boolean }> = ({
  children,
  isSelectingImage,
}) => {
  const { popupOpen } = usePopup();
  const grdRobeRef = useRef(null);
  const frameRef = useRef(null); // Using ref to reference the iframe for GSAP Draggable
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const style = document.createElement("style");

  const getFrameStyle = () => {
    const baseDuration = 0.4;
    const widthDuration = (64 / 400) * baseDuration;
    const heightDuration = (64 / 600) * baseDuration;
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const calculateHeight = () => {
      if (popupOpen) {
        if (windowHeight < 740) {
          return `${windowHeight - 40}px`;
        } else {
          return "fit-content";
        }
      } else {
        return "64px";
      }
    };

    const baseStyles = {
      top: "8px",
      right: "32px",
      maxHeight: "95.5vh",
      width: `${!popupOpen ? "64px" : "425px"}` as const,
      display: "block",
      position: "fixed" as const,
      // overflowY: `${popupOpen ? "auto" : "initial"}` as const,
      // overflowX: `${popupOpen ? "hidden" : "initial"}` as const,
      backgroundColor: "#F5F5F5",
      border: "1px solid #252525",
      borderRadius: "12px",
      // scrollbarWidth:"none" as const,
      zIndex: 9999999,
      transform: `${!popupOpen ? `translate(8px, 8px)` : ""}`,
      transition: `width ${widthDuration}s cubic-bezier(0.4, 0.0, 0.2, 1), height ${heightDuration}s cubic-bezier(0.4, 0.0, 0.2, 1)`,
    };

    return baseStyles;
  };

  // Construct the CSS @font-face rules for each font
  const fontFamilies = [
    { name: "Obviously-Bold", file: "Montserrat-Bold" },
    { name: "Obviously-Light", file: "Montserrat-Regular" },
    { name: "Obviously-Medium", file: "Montserrat-Bold" },
    { name: "Obviously", file: "Montserrat-SemiBold" },
  ];

  // let fontFaceRules = "";


  // fontFamilies.forEach(({ name, file }) => {
  //   fontFaceRules += `
  // @font-face {
  //   font-family: "Montserrat";
  //   src: url(${chrome.runtime.getURL(
  //          `assets/font/${file}.ttf`
  //        )}) format('truetype');
  //   font-weight: normal;
  //   font-style: normal;
  // }
  // `;
  // });

  style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
  * {
    font-family: 'Montserrat', sans-serif !important; /* Enforce the font */
  }    
`;

  useEffect(() => {
    document.head.appendChild(style);

    const styleElement = document.createElement('style');
    styleElement.textContent = `
     input::placeholder {
          color: #ABABAB !important;
          opacity: 1;
          font-weight: 400 !important;
            }
    input, button, select {
    font-family: 'Montserrat', sans-serif !important;
  }
    `
    if (grdRobeRef.current) {
      grdRobeRef.current.appendChild(styleElement);
  }
    return () => {
      document.head.removeChild(style); // Cleanup on component unmount
    };
    // document.getElementById("grdRobe").appendChild(style);
 
  }, []);

  return (
    <body
      ref={grdRobeRef} 
      id="grdRobe"
      style={{
        overflowX: "hidden",
        // fontFamily:'Montserrat !important',
        overflowY: `${isSelectingImage || !popupOpen ? "hidden" : "scroll"}`,
        display: "initial",
      }}
    >
      <Draggable
        handle=".drag-handle"
        onDrag={(e, data) => {
          setPosition({ x: data.x, y: data.y });
        }}
      >
        <div
          style={{
            ...getFrameStyle(),
          }}
          id="wardrobeFrame"
          ref={frameRef}
        >
          <div>{children}</div>
        </div>
      </Draggable>
    </body>
  );
};

export default Frame;
