import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import Logout from "../Logout/Logout";

interface Props {
  title: "Login" | "Logout";
  isLogin: boolean;
}

const LoginTooltip = ({ title, isLogin }: Props) => {
  const [openLoguot, setOpenLoguot] = useState(false);

  return (
    <div>
      <Tooltip title={title} onClick={() => setOpenLoguot(true)}>
        <IconButton>
          {isLogin ? <LogoutOutlined /> : <LoginOutlined />}
        </IconButton>
      </Tooltip>

      {title === "Logout" && (
        <Logout open={openLoguot} setOpen={setOpenLoguot} />
      )}
    </div>
  );
};

export default LoginTooltip;
