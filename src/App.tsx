import Nav from "./components/Nav.tsx";
import { Container, styled } from "@mui/material";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects.tsx";
import Blog from "./pages/Blog.tsx";
import Copyright from "./components/Copyright.tsx";
import BlogPost from "./pages/BlogPost.tsx";

const Offset = styled('div')(
    ({theme}) => theme.mixins.toolbar
);

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Offset/>
                <Container maxWidth="md">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/blog-post/:postId" element={<BlogPost/>}/>
                    </Routes>
                </Container>
                <Copyright/>
            </BrowserRouter>
        </>
    )
}
