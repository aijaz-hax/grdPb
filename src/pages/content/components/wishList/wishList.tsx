import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import TextField from "@mui/material/TextField";
import ToggleButtonGroupC from "@pages/content/components/wishList/toggleButtonGroup";
import { uploadButtons } from "@pages/content/shared/buttons/wishlist";
import { useWishList } from "@pages/content/hooks/useWishList";
import Actions from "@pages/content/components/wishList/actions";
import { usePopup } from "@pages/content/hooks/usePopup";
import ImageSelection from "@pages/content/components/wishList/imageSelection";
import LoadingButton from "@mui/lab/LoadingButton";
import theme from "@pages/content/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Garde from "../app/garde.png";
import {Styles} from "./styles"
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mui/material";

type Props = {
  isSelectingImage: boolean;
  setIsSelectingImage: React.Dispatch<React.SetStateAction<boolean>>;
};
const WishList: React.FC<Props> = ({
  isSelectingImage,
  setIsSelectingImage,
}) => {
  const { activeSelection, handleDisabledSubmit, handleSubmitPost } =
    useWishList();
  const { pageTitle, storeName, handleSetError, setPageTitle, setStoreName } =
    usePopup();

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [loading1, setLoading1] = useState<boolean>(false);
  const { handleSignOut } = useAuth();

  const { postType, images } = activeSelection;

  const handleLogout = async ()=>{
    await setLoading1(true)
    await handleSignOut()
    await setLoading1(false)
  }

  const handleSubmit = async () => {
    await setLoading(true);
    const result = await handleSubmitPost();

    if (result && result.status == "success") {
      navigate("confirmation");
    } else {
      handleSetError("An unexpected error has occurred. Please try again.");
    }

    await setLoading(true);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: window.innerWidth < 1280 ? 0 : "16px" }}
    >

        <div style={Styles.dFlx}>
           <div>
              <img 
                 src={Garde} 
                 alt="garde"
                 style={Styles.widthSet}
              />
            </div>
            <div style={Styles.mMinus}>
            <Button
                    sx={{ float: "right", width: "90px", color:"#252525", fontWeight:"600" }}
                    onClick={()=>handleLogout()}
                    variant="text"
                  >
                    {loading1 ? "Loading..." : "Logout"}
                  </Button>
            </div>
        </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop:"24px"
        }}
      >
        <ImageSelection
          images={images}
          setIsSelectingImage={setIsSelectingImage}
          isSelectingImage={isSelectingImage}
        />
        {!isSelectingImage && (
          <>
            <ToggleButtonGroupC
              buttons={uploadButtons}
              selected={postType}
              from={"postType"}
              buttonSize="medium"
              groupStyles={{
                display: "grid",
                gridTemplateColumns: `repeat(${uploadButtons.length},1fr)`,
                width: "100%",
                color: theme.palette.secondary.contrastText,
              }} // Customize styles
            />

            <TextField
              size="small"
              margin="normal"
              fullWidth
              id="productTitle"
              label="Product title"
              value={pageTitle}
              name="product title"
              onChange={({ target }) => setPageTitle(target.value)}
            />

            <TextField
              size="small"
              margin="normal"
              fullWidth
              id="store"
              label="Store"
              value={storeName}
              name="store"
              onChange={({ target }) => setStoreName(target.value)}
            />

            <Actions />

            <LoadingButton
              sx={{ mt: 2 }}
              onClick={() => handleSubmit()}
              loading={loading}
              variant="contained"
              fullWidth
              disabled={handleDisabledSubmit()}
              endIcon={<ArrowForwardIcon />}
            >
              Continue
            </LoadingButton>
          </>
        )}
      </Box>
    </Container>
  );
};

export default WishList;
