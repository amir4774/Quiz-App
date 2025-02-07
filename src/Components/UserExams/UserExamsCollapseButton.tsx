import {Button} from "@mui/material";
import ExpandCircleDownSharpIcon from "@mui/icons-material/ExpandCircleDownSharp";
import useGlobalTranslation from "../../Hooks/useGlobalTranslation.tsx";
import {UserExamsCollapseButtonProps} from "./Interfaces.ts";

const UserExamsCollapseButton = ({text, open, toggleOpen}: UserExamsCollapseButtonProps) => {
    const {t} = useGlobalTranslation();

    const handleClick = () => {
        toggleOpen();
    };

    return (
        <Button
            endIcon={
                open ? (
                    <ExpandCircleDownSharpIcon sx={{rotate: "180deg"}}/>
                ) : (
                    <ExpandCircleDownSharpIcon/>
                )
            }
            onClick={handleClick}
            sx={{color: "text.secondary"}}
        >
            {t(text)}
        </Button>
    )
}

export default UserExamsCollapseButton