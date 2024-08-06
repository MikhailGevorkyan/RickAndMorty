import { Box, CircularProgress } from "@mui/material";
import type { FC } from "react";

const LoadingIcon = () => (
  <Box sx={{ display: "flex" }}>
    <CircularProgress />
  </Box>
);

export default LoadingIcon;
