import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

interface CardResumosProps {
    title: string
    qtde: string
    qtdeValor: string | number
    titleTotal: string
    valorTotal: string
    clientJustify?: boolean
}

const CardResumos: React.FC<CardResumosProps> = ({
    title,
    qtde,
    qtdeValor,
    titleTotal,
    valorTotal,
    clientJustify,
}) => {
    return (
        <>
            <Grid>
                <Typography
                    fontWeight={700}
                    color={(theme) => theme.palette.secondary.main}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid
                display={'flex'}
                sx={{
                    justifyContent: clientJustify ? 'inherit' : 'space-between',
                }}
                mt={1}
            >
                <Typography fontWeight={700}>{qtde}</Typography>
                <Typography
                    sx={{ marginLeft: clientJustify ? '10px' : 'inherit' }}
                >
                    {qtdeValor}
                </Typography>
            </Grid>
            <Grid
                display={'flex'}
                sx={{
                    justifyContent: clientJustify ? 'inherit' : 'space-between',
                }}
                mt={1}
            >
                <Typography fontWeight={700}>{titleTotal}</Typography>
                <Typography
                    sx={{ marginLeft: clientJustify ? '10px' : 'inherit' }}
                >
                    {valorTotal}
                </Typography>
            </Grid>
        </>
    )
}

export default CardResumos
