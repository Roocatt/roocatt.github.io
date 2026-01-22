const MarkdownLoader = async () => {
    const markdownFiles = new Map<string, string>();
    const loadMarkdownFiles = async () => {
        const modules = import.meta.glob('/src/blog-posts/*.md', {query: '?raw'});
        for (const path in modules) {
            let normalizedPath = path.replace(/\/src\/blog-posts\//, '')
                .replace(/\.md$/, '');
            const mod: any = await modules[path]();
            markdownFiles.set(normalizedPath, mod.default);
        }
    };
    await loadMarkdownFiles();
    return (markdownFiles ?? new Map<string, string>()) as Map<string, string>;
};

export default MarkdownLoader;