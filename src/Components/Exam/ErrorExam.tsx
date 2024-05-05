import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ErrorsTitle from "../Errors/ErrorsTitle";
import errorLogo from "../../assets/Error.png";
import ErrorsContainer from "../Errors/ErrorsContainer";
import ErrorsLogo from "../Errors/ErrorsLogo";

const ErrorExam = () => {
  return (
    <div>
      <ErrorsContainer margin={{ xs: -8, md: -3 }}>
        <>
          <ErrorsLogo imageSrc={errorLogo} />

          <Box mt={{ xs: -3, md: 0 }}>
            <ErrorsTitle />

            <Typography color="#828282" my={3}>
              Sorry! Something went wrong!
            </Typography>

            <Link to="/create-exam">
              <Button fullWidth>Back</Button>
            </Link>
          </Box>
        </>
      </ErrorsContainer>
    </div>
  );
};

export default ErrorExam;
