import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#d8649c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#9013fe',
            contrastText: '#fff',
        },
        text: {
            primary: '#000',
        }

    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
        button: {
            fontWeight: 700,
        }
    }
});

export default theme;
