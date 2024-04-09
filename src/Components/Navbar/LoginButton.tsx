import { useState } from "react";
import { Button } from "@mui/material";
import Logout from "../Logout/Logout";
import { LoginButtonProps } from "./Interfaces";

const LoginButton = ({ title }: LoginButtonProps) => {
  const [openLoguot, setOpenLoguot] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        sx={{ p: "5px 30px", fontWeight: 600 }}
        onClick={() => setOpenLoguot(true)}
      >
        {title}
      </Button>

      {title === "Logout" && (
        <Logout open={openLoguot} setOpen={setOpenLoguot} />
      )}
    </>
  );
};

export default LoginButton;
