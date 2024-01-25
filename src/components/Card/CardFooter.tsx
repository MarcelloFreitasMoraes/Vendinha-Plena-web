import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import theme from '@/styles/themes/theme'

interface CardFooterProps {    
    titleDivida: string
    valorTotal: string
}


const CardFooter: React.FC<CardFooterProps> = ({ titleDivida, valorTotal }) => {
    return (
        <Grid display={'flex'} justifyContent={'space-between'} mt={2} borderTop={`1px solid ${theme.palette.primary.light}`}>
                <Typography color={theme.palette.secondary.main} mt={2}>{titleDivida}</Typography>
                <Typography mt={2}>{valorTotal}</Typography>
            </Grid>
    )
}

export default CardFooter;
