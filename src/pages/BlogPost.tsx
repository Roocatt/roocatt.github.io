import { useLocation, useParams } from 'react-router-dom';
import BlogPostIndex, { type BlogPostIndexEntry } from "../components/BlogPostIndex.tsx";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import BackToProjects from "../components/projects/BackToProjects.tsx";
import PageContainer from "../components/PageContainer.tsx";

export default function BlogPost() {
    const {postId} = useParams();
    const [blogPostData, setBlogPostData] = useState<BlogPostIndexEntry | undefined>(undefined);
    const location = useLocation();
    const {projectCardId}: { projectCardId: string | undefined } = location.state || {};

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
        <BackToProjects backToProject={projectCardId}/>
        <PageContainer>
            <h1>{blogPostData?.title}</h1>
            <sub>{blogPostData?.date}</sub>
            <Markdown>{blogPostData?.content}</Markdown>
        </PageContainer>
    </>)
}