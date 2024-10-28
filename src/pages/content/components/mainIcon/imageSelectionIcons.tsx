import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
import theme from "@pages/content/theme";

const PlusSvg = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke={theme.palette.secondary.contrastText}
  >
    <path d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  "PlusIcon"
);

const ExpandableSvg = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.08 494.08">
    <g>
      <path
        d="M247.04 0C110.604 0 0 110.604 0 247.04s110.604 247.04 247.04 247.04 247.04-110.604 247.04-247.04C493.962 110.652 383.428.118 247.04 0zm-108.8 139.093h60.8v21.333h-24.747l33.92 34.347a10.026 10.026 0 0 1 .213 13.653l-.213.213a10.241 10.241 0 0 1-7.253 2.987 9.81 9.81 0 0 1-7.253-2.987l-34.133-34.56v24.96H138.24v-59.946zm70.121 160.936-.148.131-33.92 34.133h24.747v21.333h-59.947V295.04h21.333V320l34.347-34.133c3.884-3.947 10.232-3.998 14.179-.114l.114.114c3.717 4.105 3.401 10.446-.705 14.162zm77.079-105.896 34.347-34.347h-24.96v-21.333h59.947v60.8H333.44v-24.96l-33.28 34.347a11.09 11.09 0 0 1-7.253 2.987 11.308 11.308 0 0 1-7.467-2.987 10.668 10.668 0 0 1 0-14.507zm69.333 160.854h-59.947v-21.333h24.747l-34.347-34.133a10.668 10.668 0 0 1 0-14.507c4.075-4.04 10.645-4.04 14.72 0l34.347 34.133V295.04h21.333l-.853 59.947z"
        fill="#8eadff"
        opacity="1"
        data-original="#000000"
        className=""
      ></path>
    </g>
  </svg>,
  "Expandable"
);

const PlusIcon = (props) => (
  <PlusSvg
    sx={{ fontSize: 32, color: theme.palette.secondary.contrastText }}
    {...props}
  />
);

const ExpandableIcon = (props) => (
  <ExpandableSvg
    sx={{ fontSize: 40, color: theme.palette.secondary.contrastText }}
    {...props}
  />
);

export { PlusIcon, ExpandableIcon };
