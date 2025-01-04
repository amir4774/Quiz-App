import { useState } from "react";
import { Button } from "@mui/material";
import Logout from "../../Logout/Logout";
import { LoginButtonProps } from "../Interfaces";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const LoginButton = ({ title }: LoginButtonProps) => {
  const [openLogout, setOpenLogout] = useState(false);

  const { t } = useGlobalTranslation();

  return (
    <>
      <Button
        variant="outlined"
        sx={{ p: "5px 30px", fontWeight: 600 }}
        onClick={() => setOpenLogout(true)}
      >
        {t(`${title}`)}
      </Button>

      {title === "Logout" && (
        <Logout open={openLogout} setOpen={setOpenLogout} />
      )}
    </>
  );
};

export default LoginButton;
