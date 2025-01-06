import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation";

const currentLang = localStorage.getItem("i18nextLng") || "en";

const ChangeLang = () => {
  const [lang, setLang] = useState(currentLang);
  const { t, i18n } = useGlobalTranslation();

  const handleChangeLang = async (event: SelectChangeEvent) => {
    const newLang = event.target.value;
    await i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        size="small"
        value={lang}
        onChange={handleChangeLang}
        sx={{ color: "text.secondary", textAlign: "center" }}
      >
        <MenuItem sx={{ color: "text.secondary" }} value="en">{t("en")}</MenuItem>
        <MenuItem sx={{ color: "text.secondary" }} value="fa">{t("fa")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChangeLang;
