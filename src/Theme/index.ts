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
      main: "#fff",
    },
    text: {
      primary: "#FCC822",
      secondary: "#333",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          boxShadow: "0 5px 10px rgba(252, 200, 34, 0.5)",
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "useful" },
          style: {
            boxShadow: "0 5px 10px #FCC822",
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
      main: "#27374D",
    },
    secondary: {
      main: "#ccc",
    },
    text: {
      primary: "#fff",
      secondary: "#ddd",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          textTransform: "none",
          color: "#333",
          backgroundColor: "#DDE6ED",
          "&:hover": {
            backgroundColor: "#9DB2BF",
          }
        },
      },
      variants: [
        {
          props: { variant: "useful" },
          style: {
            boxShadow: "0 5px 10px rgba(11, 27, 43, 0.5)",
            backgroundColor: "#040f1a",
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
