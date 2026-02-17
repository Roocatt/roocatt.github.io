import type { ReactElement } from "react";

interface PageBodyControllerProps {
    children?: ReactElement | ReactElement[];
}

const PageBodyContainer = (props: PageBodyControllerProps) => {
    return (<>
        <div className={'page-container'}>
            {props.children}
        </div>
    </>)
}

export default PageBodyContainer