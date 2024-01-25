import React, { ReactNode } from 'react'
import { Grid, Typography } from '@mui/material'

interface HomeContentProps {
    title: string
    children: ReactNode
}
const Content: React.FC<HomeContentProps> = ({title, children}) => {
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
            <Grid item xs={12} sm={3}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    color={(theme) => theme.palette.secondary.main}
                >
                    {title}                 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} paddingLeft={'0 !important'}>
                {children}                
            </Grid>
        </Grid>
    )
}

export default Content
