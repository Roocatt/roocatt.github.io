import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import projectIndex, { type ProjectInfo } from "../components/projects/ProjectIndex.tsx";
import Project from "../components/projects/Project.tsx";
import PageContainer from "../components/PageContainer.tsx";

export default function Projects() {
    const { t } = useTranslation();
    return (<>
            <PageContainer>
                <h1>{t('page.projects.title')}</h1>
                <Grid container spacing={4}>
                    {projectIndex.map((project: ProjectInfo) => (
                            <Project key={project.name} project={project} />
                        ))}
                </Grid>
            </PageContainer>
        </>
    )
}