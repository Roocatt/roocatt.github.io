import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import BlogPostIndex, { type BlogPostIndexEntry } from "../components/BlogPosts.tsx";
import PageTitle from "../components/PageTitle.tsx";
import PageBodyContainer from "../components/PageBodyContainer.tsx";
import ScrollProgress from "../components/ScrollProgress.tsx";


export default function BlogPost() {
    const {postId} = useParams();
    const [blogPostData, setBlogPostData] = useState<BlogPostIndexEntry | undefined>(undefined);
    const [blogPostContent, setBlogPostContent] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (postId === undefined) {
            return; /* TODO 404 */
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBlogPostData(BlogPostIndex[postId]);

        const loadContent = async () => {
            const content = BlogPostIndex[postId].content;
            const loadedData = await content();
            setBlogPostContent(loadedData.default);
        };

        if (blogPostContent === undefined) {
            loadContent();
        }
    }, [blogPostContent, postId]);

    if (!blogPostData) {
        return <h1>Loading...</h1>;
    }

    return (<>
        <PageTitle>{blogPostData?.title}</PageTitle>
        <sub>{blogPostData?.date}</sub>
        <PageBodyContainer>
            <Markdown>{blogPostContent}</Markdown>
        </PageBodyContainer>
        <div className={'blog-post-scroll'}>
            <ScrollProgress/>
        </div>
    </>)
}