import Typography from "@mui/material/Typography";
import theme from "../util/theme.tsx";

export default function Home() {
    return (<>
            <Typography color={'primary'} variant={'h1'} sx={{mt: '10vh', ml: '-15vw',
        textShadow: '-2px 2px 6px ' + theme.palette.secondary.main}}>Home Page.</Typography>
        </>
    )
}