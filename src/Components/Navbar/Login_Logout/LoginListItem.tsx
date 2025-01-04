import { useState } from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Logout from "../../Logout/Logout";
import { LoginListItemProps } from "../Interfaces";
import useGlobalTranslation from "../../../Hooks/useGlobalTranslation";

const LoginListItem = ({ title }: LoginListItemProps) => {
  const [openLogout, setOpenLogout] = useState(false);

  const { t } = useGlobalTranslation();

  return (
    <>
      <ListItem>
        <ListItemButton
          sx={{ textAlign: "center" }}
          onClick={() => setOpenLogout(true)}
        >
          <ListItemText
            sx={{ fontWeight: 600, color: "text.primary" }}
            primary={t(title)}
          />
        </ListItemButton>
      </ListItem>

      {title === "Logout" && (
        <Logout open={openLogout} setOpen={setOpenLogout} />
      )}
    </>
  );
};

export default LoginListItem;
