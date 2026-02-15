import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (<>
            <Box component="main" sx={{p: 3}}>
                <h1>{t('page.about.title')}</h1>
                <p>TODO</p>
            </Box>
        </>
    )
}