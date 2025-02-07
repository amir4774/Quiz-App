import {useState} from "react";
import {Box, Collapse} from "@mui/material";
import UserExamsResult from "./UserExamsResult";
import {UserExamsResultProps} from "./Interfaces";
import UserExamsCollapseButton from "./UserExamsCollapseButton.tsx";

const UserExamsMoreDetails = ({
                                  corrects,
                                  question_numbers,
                              }: UserExamsResultProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box mb={1}>
            <UserExamsCollapseButton open={open} toggleOpen={handleClick} text='More Details'/>
            <Collapse in={open} timeout="auto" sx={{pl: 1}}>
                <UserExamsResult
                    corrects={corrects}
                    question_numbers={question_numbers}
                />
            </Collapse>
        </Box>
    );
};

export default UserExamsMoreDetails;
