import ReactDOM from "react-dom/client";
import "./translation/i18n.ts";
import App from "./App.tsx";
import "./index.css";
import { TranslationProvider } from "./Store/TranslationProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
