import { Grid } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Grid sx={{backgroundColor:(theme) => theme.palette.primary.main, height: '50px' }}></Grid>
  )
}

export default Header;