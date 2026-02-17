import { type MouseEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Fab } from "@mui/material";
import { useTranslation } from "react-i18next";

interface BackToProjectProps {
    backToProject: string | undefined
}

export default function BackToProjects(backToProjectProps: BackToProjectProps) {
    const { t } = useTranslation();
    const { backToProject } = backToProjectProps;
    const [projectNav, setProjectNav] = useState<string | null>(backToProject === undefined ? null : backToProject);
    const navigate = useNavigate();
    useEffect(() => {
        if (projectNav !== null) {
            setProjectNav(null);
        }
    }, [location]);
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        navigate('/projects');

        const anchor = projectNav === null ? null : (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(projectNav);

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };
    if (backToProject === undefined)
        return null;

    return (
        <>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{position: 'fixed', top: 100, left: 16}}>
                <Fab variant="extended" aria-label="scroll back to top" color="secondary">
                    <KeyboardArrowLeftIcon/>&nbsp;{t('components.backToProjects.back')}
                </Fab>

            </Box>
        </>
    );
}