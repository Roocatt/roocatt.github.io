import MarkdownLoader from "../util/markdown.tsx";

export type BlogPostIndexEntry = {
    title: string;
    date: string;
    description: string;
    content: string;
};

const markdownData: Map<string, string> = await MarkdownLoader();

const BlogPostIndex: Record<string, BlogPostIndexEntry> = {
    'blog-post-1': {
        title: "Blog Post 1",
        date: "2025-01-22",
        description: "This is a blog post.",
        content: markdownData.get('2025-01-22-Test-Post') ?? ''
    }
};

export default BlogPostIndex;