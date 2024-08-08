import { Button } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface GoBackButtonProps {
  name: string;
}

const GoBackButton: FC<GoBackButtonProps> = ({ name }) => {
  return (
    <Link
      to={`/${name}`}
      style={{
        color: 'black',
        fontFamily: 'Karla',
        fontWeight: 700,
        fontSize: '1.125rem',
        textDecoration: 'none',
      }}
    >
      <Button variant="text" startIcon={<ArrowBackIcon />} color="inherit">
        GO BACK
      </Button>
    </Link>
  );
};

export default GoBackButton;
