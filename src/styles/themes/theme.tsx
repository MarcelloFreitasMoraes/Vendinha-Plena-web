import { createTheme } from '@mui/material'

const THEME = createTheme({
    palette: {
        primary: {
            main: '#62A856',
            light: '#E8E8E8',
            dark: '#707070',
        },
        secondary: {
            main: '#AFDA51',
            light: '#FFFFFF',
            dark: '#404040',
        },
        background: {
            default: '#FAFAFA',
        },
        common: {
            black: 'rgba(0, 0, 0, 0.3)',
        },
    },
    typography: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 16,
    },
    components: {
        MuiAppBar: {
            variants: [
                {
                    props: { variant: 'elevation' },
                    style: {
                        height: '10vh',
                        justifyContent: 'center',
                    },
                },
            ],
        },
    },
})

export default THEME
