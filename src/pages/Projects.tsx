import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import projectIndex, { type ProjectInfo } from "../components/projects/ProjectIndex.tsx";
import Project from "../components/projects/Project.tsx";

export default function Projects() {
    const { t } = useTranslation();
    return (<>
            <Box component="main" sx={{p: 3}}>
                <h1>{t('page.projects.title')}</h1>
                <Grid container spacing={4}>
                    {projectIndex.map((project: ProjectInfo) => (
                            <Project project={project} />
                        ))}
                </Grid>
            </Box>
        </>
    )
}