import { createTheme } from "@mui/material";

const THEME = createTheme({
  palette: {
    primary: {
      main: '#62A856',
      light: '#E8E8E8',
      dark: '#707070',  
    },
    secondary: {
      main: '#AFDA51',
      light: '#E8E8E8',
      dark: '#404040',  
    },
    background: {
      default: '#E8E8E8',   
    },
    common: {
      black: 'rgba(0, 0, 0, 0.3)'
    }
  },
  typography: {
    h3: {
      fontSize: '2.5rem',
    }
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            height: '10vh',
            justifyContent: 'center',
          }
        }
      ]
    }
  }
})

export default THEME