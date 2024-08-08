import { Button } from '@mui/material';

interface PageCounterProps {
  handleLoadMore: () => void;
}

const LoadMoreButton = ({ handleLoadMore }: PageCounterProps) => (
  <Button
    variant="contained"
    sx={{
      mt: 6,
      backgroundColor: 'rgba(242, 249, 254, 1)',
      color: 'rgba(33, 150, 243, 1)',
      width: '9.625rem',
      boxShadow: '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
    }}
    onClick={handleLoadMore}
  >
    Load More
  </Button>
);

export default LoadMoreButton;
