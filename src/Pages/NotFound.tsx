import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ErrorsTitle from "../Components/Errors/ErrorsTitle";
import ErrorsContainer from "../Components/Errors/ErrorsContainer";
import ErrorsLogo from "../Components/Errors/ErrorsLogo";
import notFoundLogo from "../assets/NotFound.png";

const NotFound = () => {
  return (
    <div>
      <ErrorsContainer margin={{ xs: -5, md: -3 }}>
        <>
          <ErrorsLogo imageSrc={notFoundLogo} />

          <Box mt={{ xs: -3, md: 0 }}>
            <ErrorsTitle />

            <Typography color="text.secondary" fontSize={20} mb={2}>
              Page not found
            </Typography>

            <Typography color="#828282" my={3}>
              This Page doesn`t exist or was removed! <br /> We suggest you back
              to home.
            </Typography>

            <Link to="/">
              <Button fullWidth sx={{ mb: { xs: 5, md: 0 } }}>
                Back to home
              </Button>
            </Link>
          </Box>
        </>
      </ErrorsContainer>
    </div>
  );
};

export default NotFound;
