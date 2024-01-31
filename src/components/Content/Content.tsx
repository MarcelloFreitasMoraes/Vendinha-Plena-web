import React, { ReactNode } from 'react'
import { Grid, Typography } from '@mui/material'

interface HomeContentProps {
    title: string
    children: ReactNode
}
const Content: React.FC<HomeContentProps> = ({title, children}) => {
    return (
        <Grid            
            mt={8}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',    
            }}
        >
            <Grid >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    color={(theme) => theme.palette.secondary.main}
                >
                    {title}                 
                </Typography>
            </Grid>
            <Grid>
                {children}                
            </Grid>
        </Grid>
    )
}

export default Content
