import {useState} from "react";
import {Link} from "react-router-dom";
import {Box, Collapse, Stack, Typography} from "@mui/material";
import UserExamsCollapseButton from "./UserExamsCollapseButton.tsx";
import useLearnMore from "../../Hooks/useLearnMore.tsx";
import {LearnMoreProps} from "./Interfaces.ts";


const LearnMore = ({category}: LearnMoreProps) => {
    const {links} = useLearnMore(category)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <UserExamsCollapseButton open={open} toggleOpen={handleClick} text="Learn More"/>
            <Collapse in={open} timeout="auto" sx={{pl: 1}}>
                {links.map((link) => (
                    <Stack spacing={2} mt={1} key={link.text} width="fit-content">
                        <Link to={link.link} target="_blank">
                            <Typography color="text.secondary"
                                        sx={{"&:hover": {textDecoration: "underline"},}}>{link.text}</Typography>
                        </Link>
                    </Stack>
                ))}
            </Collapse>
        </Box>
    )
}

export default LearnMore;