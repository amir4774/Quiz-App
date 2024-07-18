import { useState } from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Logout from "../../Logout/Logout";
import { LoginListItemProps } from "../Interfaces";

const LoginListItem = ({ title }: LoginListItemProps) => {
  const [openLogout, setOpenLogout] = useState(false);

  return (
    <>
      <ListItem>
        <ListItemButton
          sx={{ textAlign: "center" }}
          onClick={() => setOpenLogout(true)}
        >
          <ListItemText
            sx={{ fontWeight: 600, color: "text.primary" }}
            primary={title}
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
