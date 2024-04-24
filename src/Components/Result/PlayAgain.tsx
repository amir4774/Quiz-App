import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PlayAgain = () => {
  return (
    <Box>
      <Typography textAlign="center" mb={3} fontSize={20} fontWeight={600} color="text.secondary">Do you want to play again?</Typography>

      <Stack
        width="100%"
        mx="auto"
        direction={{ xs: "column-reverse", md: "row" }}
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Box width={{ xs: "90%", md: "30%" }}>
          <Link to="/">
            <Button variant="outlined" fullWidth>
              No
            </Button>
          </Link>
        </Box>

        <Box width={{ xs: "90%", md: "30%" }}>
          <Link to="/create-exam">
            <Button variant="useful" fullWidth>
              Yes
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default PlayAgain;
