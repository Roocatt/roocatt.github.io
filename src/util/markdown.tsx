const MarkdownLoader = async () => {
    const markdownFiles = new Map<string, string>();
    const loadMarkdownFiles = async () => {
        const modules = import.meta.glob('/src/blog-posts/*.md', {query: '?raw'});
        for (const path in modules) {
            const mod: any = await modules[path]();
            markdownFiles.set(path, mod.default);
        }
    };
    await loadMarkdownFiles();
    return (markdownFiles ?? new Map<string, string>()) as Map<string, string>;
};

export default MarkdownLoader;