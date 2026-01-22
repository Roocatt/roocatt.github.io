import { Card, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import BlogPostIndex from "../components/BlogPostIndex.tsx";
import type { StyledComponent } from "@emotion/styled";
import { Link } from "react-router-dom";

const BlogPostListItem: StyledComponent<any> = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
}));

export default function Blog() {
    return (<>
            <Box component="main" sx={{p: 3}}>
                <h1>Blog</h1>
                <Stack spacing={2}>
                    {Object.entries(BlogPostIndex).map((postIndex) => {
                        const [postId, post] = postIndex;
                        return (
                            <Link key={'blog-post-link-' + postId} to={'/blog-post/' + postId} style={{ textDecoration: 'none' }}>
                            <BlogPostListItem key={post.title}>
                                <h2>{post.title}</h2>
                                <sub>{post.date}</sub>
                                <p>{post.description}</p>
                            </BlogPostListItem>
                            </Link>
                        );
                    })}
                </Stack>
            </Box>
        </>
    )
}