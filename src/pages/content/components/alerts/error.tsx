import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { usePopup } from "@pages/content/hooks/usePopup";

const Error: React.FC = () => {
  const { error } = usePopup();

  return (
    <Stack
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
      spacing={2}
    >
      <Alert variant="filled" severity="error">
        {error.message}
      </Alert>
    </Stack>
  );
};

export default Error;
