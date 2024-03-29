import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouts from "./Routes/route";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./Theme";
import useStore from "./Zustand/Store";

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
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={mode === "light" ? "light" : "dark"}
        toastStyle={{
          backgroundColor: mode === "light" ? "#F9F9F9" : "#232D3F",
        }}
      />
    </div>
  );
};

export default App;
