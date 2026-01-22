import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const navItems = [
    { link: '/', name: 'Home' },
    { link: '/blog', name: 'Blog' },
    { link: '/about', name: 'About' },
    { link: '/projects', name: 'Projects' }
];

export default function Nav() {
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
                            <Link key={'link-' + item.name} to={item.link}>
                                <Button key={'button-' + item.name} sx={{color: '#fff'}}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}