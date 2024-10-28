import { Theme, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F5F5F5",
      dark: "#5E5E5E",
    },
    secondary: {
      main: "#8EADFF", // Add this line
      light: "#EDEDED",
      contrastText: "#252525",
      dark: "#E0E3E8",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: "16px",
    },
    h2: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: "24px",
    },
    h3: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: "24px",
    },
    subtitle1: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: "16px",
    },
    body1: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: "12px",
    },
    body2: {
      fontSize: "14px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          textTransform: "none",
          borderRadius: "30px",
          padding: "6px 16px 8px",
          height: "52px",
          fontSize: "12px",
          color: props.theme.palette.secondary.contrastText,
          fontFamily: ["Montserrat"].join(","),
          position: "relative",
          "&:not(.MuiButton-text)": {
            fontSize: "14px",
            "&::after": {
              content: "''",
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              borderRadius: "30px",
              boxShadow:
                "inset rgb(214 201 201 / 20%) 2px 2px 10px 8px, inset rgb(214 197 197 / 2%) 4px 5px 18px 16px, inset rgb(47 35 35 / 29%) 9px 10px 16px 15px",
              transition: "opacity 0.3s ease-in-out",
            },
            "&:hover": {
              color: props.theme.palette.primary.main,
              "&::after": {
                opacity: 1,
              },
            },
            "&:not([disabled])": {
              backgroundColor: props.theme.palette.secondary.contrastText,
              color: props.theme.palette.primary.main,
            },
          },
          "& .MuiButton-text": {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
          },
          "& .MuiMenuItem-root": {},
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          minHeight: "36px",
          "&:hover": {
            backgroundColor: props.theme.palette.primary.light,
            color: props.theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          position: "relative",
          transform: "none",
          padding: "5px",
          "&.Mui-focused": {
            color: props.theme.palette.primary.dark,
          },
          "+ .MuiNativeSelect-root": {
            marginTop: "0",
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "50% 50% 0 0",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          borderRadius: "30px",
          border: "none",
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          color: props.theme.palette.primary.dark,
          backgroundColor: props.theme.palette.secondary.light,
          "& label.Mui-focused": {
            color: props.theme.palette.primary.dark,
          },
          "& label + MuiInput-root.MuiInput-underline": {
            marginTop: "0",
          },
          "& .MuiInput-underline::after, .MuiInput-underline::before": {
            borderBottom: 0,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            "&.Mui-focused fieldset": {
              borderColor: props.theme.palette.primary.main,
              border: "none",
              color: props.theme.palette.secondary.contrastText,
            },
          },
          "& .Mui-selected": {
            color: props.theme.palette.primary.dark,
          },
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          borderRadius: "30px",
          border: "none",
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          color: props.theme.palette.primary.dark,
          backgroundColor: props.theme.palette.secondary.light,
          height: "36px",
          "& label.Mui-focused": {
            color: props.theme.palette.primary.dark,
          },
          "&::after, .MuiInput-underline::before": {
            borderBottom: 0,
            content: "none",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            "&.Mui-focused fieldset": {
              borderColor: props.theme.palette.primary.main,
              border: "none",
              color: props.theme.palette.secondary.contrastText,
            },
          },
          "& .Mui-selected": {
            color: props.theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: () => ({
          paddingLeft: 15,
          "& ::after, ::before": {
            borderBottom: "0!important",
            content: "none!important",
          },
        }),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          textTransform: "lowercase",
          borderRadius: "30px!important",
          backgroundColor: props.theme.palette.secondary.light,
          "& .MuiToggleButton-root": {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            textTransform: "none",
            marginLeft: "0!important",
            fontSize: "12px",
            minWidth: "80px",
          },
          "& .MuiToggleButton-root.Mui-selected": {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            backgroundColor: props.theme.palette.secondary.main,
          },
          groupedHorizontal: {
            textTransform: "none",
            backgroundColor: props.theme.palette.secondary.light,
            "&:not(:first-of-type)": {
              backgroundColor: props.theme.palette.secondary.light,
            },
          },
          "&:hover": {
            transition: "all .3s ease-in",
          },
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: (props: { theme: Theme }) => ({
          borderRadius: "30px!important",
          border: "none",
          color: props.theme.palette.primary.dark,
          backgroundColor: props.theme.palette.secondary.light,
          fontFamily: ["Montserrat", "sans-serif"].join(","),
          "& label.Mui-focused": {
            color: props.theme.palette.primary.dark,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: props.theme.palette.primary.main,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            "&.Mui-focused fieldset": {
              borderColor: props.theme.palette.primary.main,
              border: "none",
              color: props.theme.palette.secondary.contrastText,
            },
          },
          "&.Mui-selected": {
            backgroundColor: props.theme.palette.secondary.main,
            color: props.theme.palette.primary.light,
            "&:hover": {
              backgroundColor: "#A0BAFF",
            },
          },
        }),
      },
    },
  },
});

export default theme;
