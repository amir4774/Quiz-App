import { useState } from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Logout from "../Logout/Logout";

interface Props {
  title: "Login" | "Logout";
}

const LoginListItem = ({ title }: Props) => {
  const [openLoguot, setOpenLoguot] = useState(false);

  return (
    <>
      <ListItem>
        <ListItemButton
          sx={{ textAlign: "center" }}
          onClick={() => setOpenLoguot(true)}
        >
          <ListItemText
            sx={{ fontWeight: 600, color: "text.primary" }}
            primary={title}
          />
        </ListItemButton>
      </ListItem>

      {title === "Logout" && (
        <Logout open={openLoguot} setOpen={setOpenLoguot} />
      )}
    </>
  );
};

export default LoginListItem;
