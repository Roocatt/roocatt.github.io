import { useTranslation } from "react-i18next";
import PageContainer from "../components/PageContainer.tsx";

export default function About() {
    const { t } = useTranslation();
    return (<>
            <PageContainer>
                <h1>{t('page.about.title')}</h1>
                <p>TODO</p>
            </PageContainer>
        </>
    )
}