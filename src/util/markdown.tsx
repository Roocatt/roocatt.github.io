
export interface MDLoad {
    default: string;
}

const BlogPostMarkdownLoader = () => {
    const modules: Record<string, any> = import.meta.glob('/src/blog-posts/*.md', {query: '?raw'});
    const markdownFiles = new Map<string, () => Promise<MDLoad>>();
    const loadMarkdownFiles = () => {
        for (const path in modules) {
            const normalizedPath = path.replace(/\/src\/blog-posts\//, '')
                .replace(/\.md$/, '');
            markdownFiles.set(normalizedPath, modules[path]);
        }
    };
    loadMarkdownFiles();
    return markdownFiles;
};

export const AboutTabMarkdownLoader = () => {
    const glob: Record<string, MDLoad> = import.meta.glob('/src/about-tabs/*.md', {query: '?raw', eager: true});
    const markdownFiles = new Map<string, string>();
    const modules = glob;

    for (const path in modules) {
        const normalizedPath = path.replace(/\/src\/about-tabs\//, '')
            .replace(/\.md$/, '');
        markdownFiles.set(normalizedPath, modules[path].default);
    }
    return (markdownFiles ?? new Map<string, string>()) as Map<string, string>;
};

export default BlogPostMarkdownLoader;