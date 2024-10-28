import React, { useState } from "react";
import Frame from "@pages/content/components/frame/frame";
import { usePopup } from "@pages/content/hooks/usePopup";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "@pages/content/components/auth/protectedRoute";
import WishList from "@pages/content/components/wishList/wishList";
import SignIn from "@pages/content/components/signIn/signIn";
import { Confirmation } from "@pages/content/components/confirmation/confirmation";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth } from "@pages/content/hooks/useAuth";
import Error from "@pages/content/components/alerts/error";
import MainIcon from "@pages/content/components/mainIcon/mainIcon";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SignUp from "../signup/signup";
import CardList from "../card/CardList";
import SaveWishlist from "../card/SaveWishList";
import CreateWishList from "../card/CreateWishList";
import CreatePoll from "../card/createPoll";
import ForgotPassword from "../card/ForgotPassword";
import ForgotPasLink from "../card/ForgotPasLink";
import Reset from "../reset/Reset";

const App: React.FC = () => {
  const { popupOpen, setOpenPopup, error } = usePopup();
  const [isSelectingImage, setIsSelectingImage] = useState<boolean>(false);

  const handleError = () => {
    if (error.error) {
      return <Error />;
    }
  };
  const { handleSignOut } = useAuth();
  const location = useLocation();

  const isSignInRoute = location.pathname === "/signIn";

  const boxStyles = {
    display: "flex",
    width: "215px",
    alignItems: "center",
    position: isSignInRoute ? "absolute" : "static",
    left: isSignInRoute ? "30%" : 0,
  };

  return (
    <Frame isSelectingImage={isSelectingImage}>
      {popupOpen ? (
        <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <CardContent sx={{padding:"16px !important"}}>
            {handleError()}
            <Routes>
              <Route
                path={"/"}
                element={
                  <ProtectedRoute>
                    <CardList/>
                    {/* <WishList
                      isSelectingImage={isSelectingImage}
                      setIsSelectingImage={setIsSelectingImage}
                    /> */}
                  </ProtectedRoute>
                }
              />
              <Route path={"/confirmation"} element={<Confirmation />} />
              <Route path={"/signIn"} element={<SignIn />} />
              <Route path={"/signup"} element={<SignUp />} />
              <Route path={"/card"} element={<CardList/>} />
              <Route path={"/save"} element={<SaveWishlist/>} />
              <Route path={"/create"} element={<CreateWishList/>} />
              <Route path={"/poll"} element={<CreatePoll/>} />
              <Route path={"/forgot"} element={<ForgotPassword/>} />
              <Route path={"/pass"} element={<ForgotPasLink/>} />
              <Route path={"/reset"} element={<Reset/>} />
            </Routes>
          </CardContent>
        </Card>
      ) : (
        <MainIcon />
      )}
    </Frame>
  );
};

export default App;
