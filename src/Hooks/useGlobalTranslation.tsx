import { useContext } from "react";
import { TranslationContext } from "../Store/TranslationProvider.tsx";

const useGlobalTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useGlobalTranslation must be used within a TranslationProvider"
    );
  }
  return context;
};

export default useGlobalTranslation;
