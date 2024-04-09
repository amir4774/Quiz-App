import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import Logout from "../Logout/Logout";
import { LoginTooltipProps } from "./Interfaces";

const LoginTooltip = ({ title, isLogin }: LoginTooltipProps) => {
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
