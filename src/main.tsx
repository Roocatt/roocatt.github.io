import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { isMobileOnly } from 'react-device-detect';
import '98.css'
import './css/index.css'
import App from './App.tsx'
import MobileApp from "./MobileApp.tsx";
/*import UnderDevelopmentApp from "./UnderDevelopmentApp.tsx";*/

/*if (import.meta.env.DEV) {*/
if (isMobileOnly) {
    await import('./css/mobile.css');
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <MobileApp/>
        </StrictMode>
    )
} else {
    await import('./css/default.css');
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App/>
        </StrictMode>
    )
}
/*} else {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <UnderDevelopmentApp/>
        </StrictMode>
    )
}*/