import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '98.css'
import './index.css'
import App from './App.tsx'
/*import UnderDevelopmentApp from "./UnderDevelopmentApp.tsx";*/

/*if (import.meta.env.DEV) {*/
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
                <App/>
        </StrictMode>
    )
/*} else {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <UnderDevelopmentApp/>
        </StrictMode>
    )
}*/