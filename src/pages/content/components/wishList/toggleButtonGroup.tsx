import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useWishList } from "@pages/content/hooks/useWishList";
import { setStateWithPrev } from "@pages/content/shared/setStateWithPrev";
import theme from "@pages/content/theme";

interface Buttons {
  value: string;
  label: string;
}

interface ToggleButtonGroupProps {
  buttons: Buttons[];
  selected: string;
  from: string;
  buttonSize?: "small" | "medium" | "large";
  groupStyles?: any;
}

const ToggleButtonGroupC: React.FC<ToggleButtonGroupProps> = ({
  buttons,
  selected,
  from,
  buttonSize = "small",
  groupStyles,
}) => {
  const { setActiveSelection } = useWishList();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newActive: string
  ) => {
    if (newActive != null) {
      setStateWithPrev(setActiveSelection, {
        [from]: newActive,
      });
    }
  };

  return (
    <>
      <ToggleButtonGroup
        sx={{ m: 1, ...groupStyles }}
        color="primary"
        value={selected}
        exclusive
        onChange={handleChange}
      >
        {buttons.map((button) => {
          return (
            <ToggleButton
              size={buttonSize}
              key={button.value}
              value={button.value}
            >
              {button.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
};

export default ToggleButtonGroupC;
