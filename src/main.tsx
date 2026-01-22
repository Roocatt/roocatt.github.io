import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import UnderDevelopmentApp from './UnderDevelopmentApp.tsx'
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./util/theme.tsx";

/* Temporary condition to just render the actual page in development. */
if (import.meta.env.DEV) {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </StrictMode>,
    )
} else {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <UnderDevelopmentApp/>
        </StrictMode>,
    )
}
