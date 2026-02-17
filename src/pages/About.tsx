import { useEffect, useId, useState } from "react";
import PageBodyContainer from "../components/PageBodyContainer.tsx";
import PageTitle from "../components/PageTitle.tsx";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { AboutTabMarkdownLoader } from "../util/markdown.tsx";

interface TabComponentProps {
    id: string;
    label: string;
    isSelected: boolean;
    onSelect: React.Dispatch<React.SetStateAction<string>>;
}

const TabComponent = ({id, label, isSelected, onSelect}: TabComponentProps) => {
    const tabId = useId();
    const panelId = useId();

    return (
        <li id={tabId}
            aria-controls={panelId} // Links the tab to its content panel
            aria-selected={isSelected} // Value is controlled by React state
            onClick={() => onSelect(id)}
            role="tab">
            <a href="#tabs">{label}</a>
        </li>
    );
};

const About = () => {
    const [selectedTabId, setSelectedTabId] = useState('about-tab-the-basics');
    const [aboutTabData, setAboutTabData] = useState<string | undefined>(undefined);
    const markdownData: Map<string, string> = AboutTabMarkdownLoader();

    useEffect(() => {
        const tab = selectedTabId.replace(/about-tab-/, '');
        setAboutTabData(markdownData.get(tab));
    }, [selectedTabId]);

    const tabData = [
        {id: 'about-tab-the-basics', label: 'The Basics'},
        {id: 'about-tab-professional-software', label: 'Professional - Software'},
        {id: 'about-tab-professional-infrastructure', label: 'Professional - Infrastructure'},
        {id: 'about-tab-hobbies-personal', label: 'Hobbies and Personal'},
        {id: 'about-tab-this-site', label: 'This Site'}
    ];

    return (<>
        <PageTitle>About Me</PageTitle>
        <PageBodyContainer>
            <div className="status-field-border" style={{padding: '8px', marginBottom: '1rem'}}>
                Hi, I'm Roos! I'm a software/infrastructure/all-around-whatever-technical-stuff engineer based in
                Canada. Click through the tabs below to learn more about me.
            </div>
            <menu role="tablist">
                {tabData.map((tab) => (
                    <TabComponent key={tab.id}
                                  id={tab.id}
                                  label={tab.label}
                                  isSelected={selectedTabId === tab.id}
                                  onSelect={setSelectedTabId}/>
                ))}
            </menu>
            <div className="window about-tab-window" role="tabpanel">
                <div className="window-body about-window-body">
                    <Markdown remarkPlugins={[remarkGfm]}>{aboutTabData}</Markdown>
                </div>
            </div>
        </PageBodyContainer>
    </>)
}

export default About