import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import LazyLoading from "../LazyLoading";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <Box mt={3}>
        <Suspense fallback={<LazyLoading />}>
          <Outlet />
        </Suspense>
      </Box>
    </div>
  );
};

export default MainLayout;
