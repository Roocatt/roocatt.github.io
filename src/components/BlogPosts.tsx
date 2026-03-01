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
    'first-post': {
        title: "Building my New Website",
        date: "2026-02-19",
        description: "My first blog post on my new personal site.",
        content: markdownData.get('2026-02-19-First-Post') ?? defaultStr()
    },
    'netbsd-pi400': {
        title: "Installing NetBSD on a Raspberry Pi 400",
        date: "2026-03-01",
        description: "Installing NetPSD on a Raspberry Pi 400 in 2026",
        content: markdownData.get('2026-03-01-NetBSD-on-a-pi400') ?? defaultStr()
    }
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