import { Container, Grid, styled } from "@mui/material";
import Copyright from "./Copyright.tsx";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from "../../util/theme.tsx";

const FooterLink = styled(Button)({
    variant: 'contained',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
});

export default function Footer() {
    return (<>
        <footer>
            <Box sx={{p: 2, flexGrow: 1, backgroundColor: 'primary.main', display: {xs: 'none', sm: 'block'}}}>
                <Container maxWidth="md" sx={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Grid container justifyContent="center" spacing={2} sx={{mt: '2rem'}}>
                        <Box sx={{}}>
                            <FooterLink variant="contained"><LinkedInIcon/>&nbsp;LinkedIn</FooterLink>
                        </Box>
                        <Box sx={{}}>
                            <FooterLink variant="contained"><GitHubIcon/>&nbsp;GitHub</FooterLink>
                        </Box>
                    </Grid>
                    <Copyright/>
                </Container>
            </Box>
        </footer>
    </>);
}