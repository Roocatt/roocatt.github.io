import { useParams } from 'react-router-dom';
import BlogPostIndex, { type BlogPostIndexEntry } from "../components/BlogPostIndex.tsx";
import { useEffect, useState } from "react";

export default function BlogPost() {
    const {postId} = useParams();
    const [blogPostData, setBlogPostData] = useState<BlogPostIndexEntry | undefined>(undefined);

    useEffect(() => {
        if (postId === undefined) {
            return; /* TODO */
        }
        setBlogPostData(BlogPostIndex[postId]);
    }, [postId]);

    if (!blogPostData) {
        return <h1>Loading...</h1>;
    }

    return (<>
        <h1>{blogPostData?.title}</h1>
        <sub>{blogPostData?.date}</sub>
        <div>{blogPostData?.content}</div>
    </>)
}