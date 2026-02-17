import NavBar from "./components/NavBar.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import { ScrollTopAnchor } from "./components/ScrollProgress.tsx";

function App() {
    return (
        <>
            <ScrollTopAnchor/>
            <div className="title-bar site-banner">
                <div className="title-bar-text site-banner-text">My Personal Site</div>
                <div className="title-bar-controls">
                    <button aria-label="Ignore" className="minimize"></button>
                    <button aria-label="Ignore" className="maximize"></button>
                    <button aria-label="Ignore" className="close"></button>
                </div>
            </div>
            <BrowserRouter>
                <div className={'top-overflow-container'}/>
                <div className={'right-overflow-container'}/>
                <div className={'view-container'}/>
                <div className={'nav-container'}>
                    <NavBar/>
                </div>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/blog-post/:postId" element={<BlogPost/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
