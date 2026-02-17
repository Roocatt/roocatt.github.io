import Box from "@mui/material/Box";
import type { ReactElement } from "react";

export interface PageContainerProps {
  children?: ReactElement<any> | ReactElement<any>[];
}

export default function PageContainer(props: PageContainerProps) {
    return (<>
        <Box component="main" sx={{p: 3, backgroundColor: '#fff', minHeight: "100vh", borderLeft: 1, borderRight: 1, zindex: 500}}>
            {props.children}
        </Box>
    </>);
}