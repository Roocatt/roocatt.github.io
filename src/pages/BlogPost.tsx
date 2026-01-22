import { useParams } from 'react-router-dom';
import BlogPostIndex, { type BlogPostIndexEntry } from "../components/BlogPostIndex.tsx";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Box from "@mui/material/Box";

export default function BlogPost() {
    const {postId} = useParams();
    const [blogPostData, setBlogPostData] = useState<BlogPostIndexEntry | undefined>(undefined);

    useEffect(() => {
        if (postId === undefined) {
            return; /* TODO 404 */
        }
        setBlogPostData(BlogPostIndex[postId]);
    }, [postId]);

    if (!blogPostData) {
        return <h1>Loading...</h1>;
    }

    return (<>
        <Box component="main" sx={{p: 3}}>
            <h1>{blogPostData?.title}</h1>
            <sub>{blogPostData?.date}</sub>
            <Markdown>{blogPostData?.content}</Markdown>
        </Box>
    </>)
}