import * as React from "react";
import { useWishList } from "@pages/content/hooks/useWishList";
import SelectOption from "@pages/content/components/wishList/selectOption";
import TextField from "@mui/material/TextField";
import { setStateWithPrev } from "@pages/content/shared/setStateWithPrev";

const Actions: React.FC = () => {
  const { activeSelection, setActiveSelection } = useWishList();
  const { postType, pollQuestion } = activeSelection;

  const handleChange = (event) => {
    setStateWithPrev(setActiveSelection, {
      pollQuestion: event.target.value,
    });
  };

  return (
    <>
      {(() => {
        switch (postType) {
          case "wishlist":
            return <SelectOption />;
          case "closet":
            break;
          case "poll":
            return (
              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="question"
                label="Ask a question (optional)"
                name="question"
                onChange={handleChange}
                value={pollQuestion}
              />
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Actions;
