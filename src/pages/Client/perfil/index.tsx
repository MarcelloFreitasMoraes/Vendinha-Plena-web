import { InputField } from '@/components';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

// import { Container } from './styles';

const Perfil: React.FC = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <Grid
    container
    spacing={5}
    mt={1}
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',          
    }}
>
    <Grid item xs={12} sm={8}>
      <InputField name={'teste'} />
    </Grid>
    </Grid>
  );
}

export default Perfil