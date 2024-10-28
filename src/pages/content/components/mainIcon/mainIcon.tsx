import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { usePopup } from "@pages/content/hooks/usePopup";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const MainIcon: React.FC = () => {
  const { popupOpen, setOpenPopup } = usePopup();

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoFlow: "column",
        position: "fixed",
        zIndex: 999999,
        width: "64px",
        height: "64px",
      }}
    >
      <IconButton
        sx={{
          display: "flex",
          p: 0,
        }}
        aria-label="logo"
        onClick={() => setOpenPopup(!popupOpen)}
      >
        <img
          src={
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjOGVhZGZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMyNTI1MjU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgcnk9IjIwIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNzMuNDksNTguMzZjLTEuMTgtMy4yMS0yLjczLTYuMDEtOS4wNi03LjM0LDYuMjEtMS41Niw5LjU2LTYuMjUsOS41My0xMy40NiwxLjExLTI4LjU4LTUzLjQ1LTI1LjkzLTQ4LjYsNy4wNmgxMS42MmMtMTUuNjQtOC4zOS0yLjM5LTI0LjA5LDEyLjIyLTI0LjMuMywxNS4zMiw0Ljc1LDU0LjE4LTUuNjUsNTUuNjMtOC41OC0uMS0xMy45OC0xMy45Ny0xNS44MS0yMS45MiwxMC40My4wNCw5LjIyLS4wMiwxNS4wOC0uMTd2LTMuNDFjLTYuNTMuMDYtMTIuODEuMjktMTkuMzkuMS43OSw5LjQ3LDIuMzksMjYuOTgsMi4xNywyOS4yMSwxLjc1LDAsMy4zLDAsNS4wMSwwLTEuOTItNC4xOS0xLjY4LTYuOTMsMi4xMy0zLjc5LDI5LjM1LDE3Ljg2LDIwLjc3LTM3LjExLDIwLjMxLTU1LjY4LDIzLjI3LDIuOSwyMS41NCwzMC4yMyw0LjUyLDMwLjE3djMuNDFjMy4zOS4yNSw3LjU2LTEuMDMsOS43NSwyLjI0LDUuMTksNi45OSwyLjk3LDE5Ljk1LTMuMjUsMjMuNjVoMTEuMzJjLS4wMy02Ljk5LjU0LTE0LjczLTEuOS0yMS4zOVoiLz4KPC9zdmc+\n"
          }
          alt={"main-logo"}
          width="100%"
          height="100%"
        />
      </IconButton>
      <DragIndicatorIcon
        sx={{
          cursor: "grab",
          position: "absolute",
          top: "22px",
          right: "-20px",
          fontSize: "20px",
          backgroundColor: "white",
          fill: "black",
          borderRadius: "50%",
        }}
        className="drag-handle"
      ></DragIndicatorIcon>
    </Box>
  );
};

export default MainIcon;
