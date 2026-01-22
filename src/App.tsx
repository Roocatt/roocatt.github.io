import Typography from '@mui/material/Typography';
import Nav from "./Nav.tsx";
import { styled } from "@mui/material";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects.tsx";
import Blog from "./pages/Blog.tsx";

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

function Copyright() {
    return (
        <Typography variant="body2" align="center"
                    sx={{
                        color: 'text.secondary',
                    }}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Roos Catling-Tate'}.
        </Typography>
    );
}

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Offset />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Copyright />
            </BrowserRouter>
        </>
    )
}
