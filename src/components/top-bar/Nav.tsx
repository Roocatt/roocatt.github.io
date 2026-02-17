import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageSelectMenu from "./LanguageSelectMenu.tsx";

const navItems = [
    {link: '/', name: 'nav.home'},
    {link: '/blog', name: 'nav.blog'},
    {link: '/about', name: 'nav.about'},
    {link: '/projects', name: 'nav.projects'}
];

export default function Nav() {
    const {t} = useTranslation();

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav" position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        Roos Catling-Tate
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Link key={'link-' + item.link.replace(/[^a-zA-Z0-9]/g, '')} to={item.link}>
                                <Button key={'button-' + item.link.replace(/[^a-zA-Z0-9]/g, '')} sx={{color: '#fff'}}>
                                    {t(item.name)}
                                </Button>
                            </Link>
                        ))}
                        <LanguageSelectMenu xs={{ml: 4}}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}