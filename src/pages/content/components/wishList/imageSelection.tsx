import { IconButton, Typography } from "@mui/material";
import {
  PlusIcon,
  ExpandableIcon,
} from "@pages/content/components/mainIcon/imageSelectionIcons";
import { Box, Link } from "@mui/material";
import * as React from "react";
import theme from "@pages/content/theme";
import { Image } from "@pages/content/context/wishList/wishListContext";
import { useEffect, useState } from "react";
import { useWishList } from "@pages/content/hooks/useWishList";

interface ImageSelectionProps {
  images: Image[];
}

const ImageSelection: React.FC<
  ImageSelectionProps & {
    setIsSelectingImage: (state: boolean) => void;
    isSelectingImage: boolean;
  }
> = ({ images, isSelectingImage, setIsSelectingImage }) => {
  const [selecting, setSelecting] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const { activeSelection } = useWishList();

  useEffect(() => {
    setSelecting(false);
    setIsSelectingImage(false);
  }, [activeSelection]);

  const handleAddImageClick = (index) => {
    if (!isSelectingImage) {
      setIsSelectingImage(true);
    }

    setSelecting(true);
    setSelectedImageIndex(index);
    chrome.runtime.sendMessage({
      type: "activateImageSelection",
      imageIndex: index,
    });
  };

  const renderImageBox = (isMainImage: boolean, index: number) => {
    const height = isMainImage ? 160 : 60;
    const width = isMainImage ? 160 : 50;
    const margin = index === 2 ? { mt: "4px", mb: "4px" } : {};

    const image = images.find((image) => image.index == index);
    const [isHovered, setIsHovered] = useState(false);

    const isActive = selectedImageIndex === index;

    const filter = isActive ? { filter: "contrast(0.5)" } : {};
    const background =
      isActive && !isMainImage
        ? { backgroundColor: "#8EADFF!important", borderRadius: "4px" }
        : isMainImage
        ? { backgroundColor: theme.palette.secondary.light }
        : { backgroundColor: theme.palette.secondary.main };
    return (
      <Box
        sx={{
          height: `${height}px`,
          width: `${width}px`,
          ml: 1,
          mr: 1,
          ...margin,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isMainImage && (
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.secondary.contrastText,
              textAlign: "center",
            }}
          >
            Select Image
          </Typography>
        )}
        {image ? (
          <IconButton
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: isMainImage ? "50% 50% 0 0" : 1,
              border: `1px solid ${theme.palette.secondary.main}`,
              p: 0,
            }}
            disabled={selecting}
            onClick={() => handleAddImageClick(index)}
          >
            {isMainImage && isHovered && (
              <Link
                component="button"
                variant="subtitle1"
                className={isActive ? "activeImage" : ""}
                sx={{
                  color: theme.palette.secondary.light,
                  textDecoration: "underline",
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  backgroundColor: "rgba(0,0,0,0.6)",
                }}
              >
                Update Image
              </Link>
            )}
            <img
              alt={`image-${index}`}
              src={image.source || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: isMainImage ? "50% 50% 0 0" : 1,
                ...filter,
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            key={index}
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: isMainImage
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
              borderRadius: 1,
              ...filter,
              ...background,
            }}
            disabled={selecting}
            onClick={() => handleAddImageClick(index)}
          >
            {isMainImage ? (
              <Link
                component="button"
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.dark,
                  textDecoration: "underline",
                }}
              >
                Upload Image
              </Link>
            ) : (
              <PlusIcon />
            )}
          </IconButton>
        )}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        mt: 1,
        mb: isSelectingImage ? "32px" : 2,
      }}
    >
      {renderImageBox(true, 0)}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {[1, 2, 3].map((index) => {
          return renderImageBox(false, index);
        })}
      </Box>
      {isSelectingImage && (
        <ExpandableIcon
          onClick={() => setIsSelectingImage(false)}
          sx={{ position: "absolute", right: "10px", bottom: "10px" }}
        />
      )}
    </Box>
  );
};

export default ImageSelection;
