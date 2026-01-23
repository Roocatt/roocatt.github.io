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
    },
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#9013fe'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#9013fe',
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000'
                    },
                    '&:focus': {
                        backgroundColor: '#d8649c'
                    },
                    '&:active': {
                        backgroundColor: '#d8649c'
                    },
                    '&:selected': {
                        backgroundColor: '#d8649c'
                    },
                    color: '#fff'
                }
            }
        }
    }
});

export default theme;
