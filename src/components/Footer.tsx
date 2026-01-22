import Copyright from "./Copyright.tsx";
import Box from "@mui/material/Box";

export default function Footer() {
    return (<>
        <footer>
            <Box sx={{p: 2, flexGrow: 1, backgroundColor: 'primary.main', display: {xs: 'none', sm: 'block'}}}>
                <Copyright/>
            </Box>
        </footer>
    </>);
}