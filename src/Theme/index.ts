import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    useful: true;
  }
}

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FCC822",
    },
    secondary: {
      main: "#D7E5CA",
    },
    text: {
      primary: "#FCC822",
      secondary: "#3B3B3B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          textTransform: "none",
          color: "#FCC822",
        },
      },
      variants: [
        {
          props: { variant: "useful" },
          style: {
            color: "#fff",
            backgroundColor: "#FCC822",
            "&:hover": { backgroundColor: "#F0B400" },
          },
        },
      ],
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9DB2BF",
    },
    secondary: {
      main: "#ccc",
    },
    text: {
      primary: "#FCC822",
      secondary: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          textTransform: "none",
          color: "#fff",
        },
      },
      variants: [
        {
          props: { variant: "useful" },
          style: {
            backgroundColor: "#9DB2BF",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#27374D",
            },
          },
        },
      ],
    },
  },
});
