import { Home, Logo, User } from '@/global/assets/icons'
import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <Grid
            container
            spacing={5}
                        sx={{
                backgroundColor: (theme) => theme.palette.common.black,
                height: '100px',
                margin: 0,
                justifyContent: 'space-between',
                alignItems: 'center',               
            }}
        >
            <Grid item xs={12} sm={3} sx={{ paddingTop: '0 !important' }}>
                <Logo width={80} height={80} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={3}
                sx={{ paddingTop: '0 !important'}}
            >
                <span style={{ margin: '0 80px' }}>
                  <Link href={'/'} >
                    <Home width={40} height={40} />
                    </Link>
                </span>
                <Link href={'/Client'} >
                <User width={40} height={40} />
                </Link>
            </Grid>
        </Grid>
    )
}

export default Header
