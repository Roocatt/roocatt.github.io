import BlogPostIndex, { BlogPostListItem } from "../components/BlogPosts.tsx";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle.tsx";
import PageBodyContainer from "../components/PageBodyContainer.tsx";


const Blog = () => {
    const navigate = useNavigate();
    const handleClick = (destination: string) => {
        navigate(destination);
    };
    return (<>
        <PageTitle>Blog</PageTitle>
        <PageBodyContainer>
            <div className={'blog-container'}>
                {Object.entries(BlogPostIndex).map((postIndex) => {
                    const [postId, post] = postIndex;
                    return (
                        <BlogPostListItem key={post.title} itemDetails={post} onClick={() => {
                            handleClick('/blog-post/' + postId)
                        }}/>
                    );
                })}
            </div>
        </PageBodyContainer>
    </>)
}

export default Blog