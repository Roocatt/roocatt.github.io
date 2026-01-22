import Typography from "@mui/material/Typography";

export default function Copyright() {
    return (
        <Typography variant="body2" align="center"
                    sx={{
                        color: 'text.secondary',
                    }}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Roos Catling-Tate'}.
        </Typography>
    );
}