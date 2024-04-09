import { Dispatch, SetStateAction } from "react";

export interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
