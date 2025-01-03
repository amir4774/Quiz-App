import { createContext, ReactNode } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";

interface TranslationContextProps {
  t: UseTranslationResponse<"translation", undefined>["t"];
  i18n: UseTranslationResponse<"translation", undefined>["i18n"];
}

const TranslationContext = createContext<TranslationContextProps | null>(null);

const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation("translation");

  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationProvider, TranslationContext };
