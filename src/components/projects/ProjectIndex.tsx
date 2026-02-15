
export interface ProjectInfo {
    name: string,
    description: string,
    github: string | null,
    relatedBlogPosts: string[] | null
}

const ProjectIndex: ProjectInfo[] = [
    {
        name: "piMCP2515",
        description: "A library for interacting with the MCP2515 CAN bus controller via SPI.",
        github: "https://github.com/Roocatt/piMCP2515",
        relatedBlogPosts: ['blog-post-1']
    }
];

export default ProjectIndex;