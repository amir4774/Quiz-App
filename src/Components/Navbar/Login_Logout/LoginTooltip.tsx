import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import Logout from "../../Logout/Logout";
import { LoginTooltipProps } from "../Interfaces";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const LoginTooltip = ({ title, isLogin }: LoginTooltipProps) => {
  const [openLogout, setOpenLogout] = useState(false);

  const { t } = useGlobalTranslation();

  return (
    <div>
      <Tooltip title={t(title)} onClick={() => setOpenLogout(true)}>
        <IconButton>
          {isLogin ? <LogoutOutlined /> : <LoginOutlined />}
        </IconButton>
      </Tooltip>

      {title === "Logout" && (
        <Logout open={openLogout} setOpen={setOpenLogout} />
      )}
    </div>
  );
};

export default LoginTooltip;
