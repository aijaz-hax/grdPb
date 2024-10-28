import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useWishList } from "@pages/content/hooks/useWishList";
import { usePopup } from "@pages/content/hooks/usePopup";
import { useNavigate } from "react-router-dom";

export const Confirmation: React.FC = () => {
  const { activeSelection, setActiveSelection } = useWishList();
  const { pageTitle, setOpenPopup } = usePopup();
  const navigate = useNavigate();

  const { images, postType, selectedOptions } = activeSelection;

  const handleOnClick = async () => {
    await setOpenPopup(false);
    await setActiveSelection({
      postType: "wishlist",
      selectedOptions: {
        mainId: "",
        label: "",
      },
      pollQuestion: "",
      images: [],
    });
    navigate("/");
  };

  const handleLabel = () => {
    switch (postType) {
      case "wishlist":
      case "closet":
        return (
          <>
            <Typography variant="subtitle1" sx={{ m: 1 }}>
              has been added to
            </Typography>

            <Typography component="h2" variant="h3" sx={{ m: 1 }}>
              {selectedOptions.label ? selectedOptions.label : "Closet"}
            </Typography>
          </>
        );
      case "poll":
        return (
          <>
            <Typography variant="subtitle1" sx={{ m: 1 }}>
              you just posted a poll
            </Typography>

            <Typography component="h2" variant="h3" sx={{ m: 1 }}>
              {activeSelection.pollQuestion}
            </Typography>
          </>
        );
      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 250,
            width: 250,
            mb: 5,
          }}
        >
          <img
            alt={"mainImage"}
            src={images[0]?.source || ""}
            style={{
              width: 250,
              height: "auto",
              objectFit: "cover",
              borderRadius: "50% 50% 0 0",
            }}
          />
        </Box>

        <Typography
          component="h1"
          variant="h3"
          sx={{ m: 1, maxWidth: 350 }}
          noWrap
        >
          {pageTitle}
        </Typography>

        {handleLabel()}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 5 }}
          onClick={() => handleOnClick()}
        >
          Close
        </Button>
      </Box>
    </Container>
  );
};
