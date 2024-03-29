import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <Box mt={3}>
        <Suspense
          fallback={<Typography fontWeight={600}>Loading...</Typography>}
        >
          <Outlet />
        </Suspense>
      </Box>
    </div>
  );
};

export default MainLayout;
