import { Badge, Card, CardActions, CardContent, Grid, Menu, MenuItem } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import type { ProjectInfo } from "./ProjectIndex.tsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from '@mui/icons-material/Article';
import BlogPostIndex from "../BlogPostIndex.tsx";

const toId = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const GitHubButton = ({project}: { project: ProjectInfo }): (null | React.JSX.Element) => {
    if (project.github === null) {
        return null;
    }
    return <>
        <Button href={project.github} target="_blank" rel="noopener noreferrer" variant='contained'>
            <GitHubIcon/>&nbsp;&nbsp;GitHub
        </Button>
    </>;
};

const RelatedBlogPostsMenu = ({project}: { project: ProjectInfo }): null | React.JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    if (project.relatedBlogPosts === null || project.relatedBlogPosts.length === 0) {
        return null;
    }
    const handleNavigate = (dest: string, cardId: string) => {
        navigate(dest, {state: {projectCardId: cardId}});
    };
    let idStr = toId(project.name);
    return <>

        <Button id={"project-related-blog-" + idStr}
                variant={'contained'}
                aria-controls={open ? 'project-related-blog-menu-' + idStr : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
            <Badge badgeContent={project.relatedBlogPosts?.length} color="secondary" anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}>
                <ArticleIcon/>
            </Badge>
            &nbsp;&nbsp;Related Blog Posts
        </Button>

        <Menu
            id={'project-related-blog-menu-' + idStr}
            aria-labelledby={"project-related-blog-" + idStr}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}>
            {project.relatedBlogPosts.map((post: string) => (
                <MenuItem key={idStr + '-menu-item-' + post}
                          onClick={() => {
                              handleClose();
                              handleNavigate('/blog-post/' + post, 'project-card-' + idStr);
                          }}>{BlogPostIndex[post].title}</MenuItem>
            ))}
        </Menu>
    </>;
};

export default function Project({project}: { project: ProjectInfo }) {
    return (<>
        <Grid size={{xs: 12, sm: 12, md: 6, lg: 6}}>
            <Card id={'project-card-' + toId(project.name)} elevation={3}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <GitHubButton project={project}/>
                    <RelatedBlogPostsMenu project={project}/>
                </CardActions>
            </Card>
        </Grid>
    </>);
}