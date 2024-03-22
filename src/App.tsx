import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./Theme";
import useStore from "./Zustand/Store";
import AppRouts from "./Routes/route";

const App = () => {
  const { mode } = useStore();

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div>
      <ThemeProvider theme={mode === "light" ? LightTheme : DarkTheme}>
        <BrowserRouter>
          <AppRouts />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
