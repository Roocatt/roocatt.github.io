import BlogPostMarkdownLoader, { type MDLoad } from "../util/markdown.tsx";
import type { MouseEventHandler, ReactElement } from "react";

export type BlogPostIndexEntry = {
    title: string;
    date: string;
    description: string;
    content: () => Promise<MDLoad>;
};

const defaultStr = () => {
    return (async () => {
        return Promise.resolve({default: ''});
    })
}

const markdownData: Map<string, () => Promise<MDLoad>> = BlogPostMarkdownLoader();

const BlogPostIndex: Record<string, BlogPostIndexEntry> = {
    'blog-post-1': {
        title: "Blog Post 1",
        date: "2026-01-22",
        description: "This is a blog post.",
        content: markdownData.get('2026-01-22-Test-Post') ?? defaultStr()
    },
    'blog-post-2': {
        title: "Blog Post 2",
        date: "2026-02-14",
        description: "This is another blog post.",
        content: markdownData.get('2026-02-14-Test-Post') ?? defaultStr()
    },
    'blog-post-3': {
        title: "Blog Post 3",
        date: "2026-02-16",
        description: "This yet another blog post with a longer description to see if that causes any problems.",
        content: markdownData.get('2026-02-16-Test-Post') ?? defaultStr()
    },
    'blog-post-4': {
        title: "Blog Post 4",
        date: "2026-02-17",
        description: "This yet another blog post with a longer description to see if that causes any problems.",
        content: markdownData.get('2026-02-16-Test-Post') ?? defaultStr()
    },
    'blog-post-5': {
        title: "Blog Post 5",
        date: "2026-02-18",
        description: "This yet another blog post with a longer description to see if that causes any problems.",
        content: markdownData.get('2026-02-16-Test-Post') ?? defaultStr()
    },
};

interface BlogPostListItemProps {
    children?: ReactElement[] | ReactElement;
    key: string;
    itemDetails: BlogPostIndexEntry;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const BlogPostListItem = (props: BlogPostListItemProps) => {
    return (<>
        <div className="window blog-window" style={{minWidth: '250px', minHeight: '200px'}}>
            <div className="title-bar">
                <div className="title-bar-text">{props.itemDetails.title}</div>
            </div>
            <div className="window-body">
                <p>{props.itemDetails.description}</p>

            </div>
            <div className={'blog-window-status'}>
                <section className="field-row" style={{justifyContent: 'flex-end', marginBottom: '8px',
                        marginRight: '8px'}}>
                    <button className="default" onClick={props.onClick}>Read</button>
                </section>
                <div className="status-bar">
                    <p className="status-bar-field">Date:</p>
                    <p className="status-bar-field">{props.itemDetails.date}</p>
                </div>
            </div>
        </div>
    </>);
};

export default BlogPostIndex;