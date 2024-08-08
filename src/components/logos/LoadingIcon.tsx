import { Box, CircularProgress } from '@mui/material';

const LoadingIcon = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingIcon;
