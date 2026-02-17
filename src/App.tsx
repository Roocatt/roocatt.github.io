import Nav from "./components/top-bar/Nav.tsx";
import { Container, Fab, styled } from "@mui/material";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from "./components/bottom-bar/Footer.tsx";
import ScrollTop from "./components/ScrollTop.tsx";
import Background from "./components/background.tsx";

const Offset = styled('div')(
    ({theme}) => theme.mixins.toolbar
);

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <a id="scroll-top-anchor"/>
                <Background/>
                <Container sx={{minHeight: '100vh'}}>
                    <Offset/>
                    <Container maxWidth="md" sx={{flexGrow: 1}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/blog-post/:postId" element={<BlogPost/>}/>
                        </Routes>
                    </Container>
                </Container>
                <ScrollTop>
                    <Fab size="small" aria-label="scroll back to top" color="secondary">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
