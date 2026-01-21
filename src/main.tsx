import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UnderDevelopmentApp from './UnderDevelopmentApp.tsx'

/* Temporary condition to just render the actual page in development. */
if (import.meta.env.DEV) {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
} else {
        createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <UnderDevelopmentApp />
        </StrictMode>,
    )
}
