import type { ReactNode } from "react";

interface PageTitleProps {
    children?: ReactNode;
}

const PageTitle = (props: PageTitleProps) => {
    return (<>
        <h1 className={'page-title'}>{props.children}</h1>
        <hr className={'page-title-divider'}/>
    </>)
}

export default PageTitle