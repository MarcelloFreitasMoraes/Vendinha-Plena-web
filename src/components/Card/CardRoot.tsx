import { Box, Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

interface CardRootProps {
    children: ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children }) => {
    return (
        <Box sx={{ minWidth: 600 }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            >
                <CardContent>{children}</CardContent>
            </Card>
        </Box>
    )
}

export default CardRoot
