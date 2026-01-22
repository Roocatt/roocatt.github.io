import { Fade, useScrollTrigger } from "@mui/material";
import Box from "@mui/material/Box";
import type { ReactElement, MouseEvent } from "react";

export interface ScrollTopProps {
  children?: ReactElement<any>;
}

export default function ScrollTop(props: ScrollTopProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#scroll-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}