import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HeaderHome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#009579' }}>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                JasaMarga Toll Service
            </Typography>
            <Button color="inherit" href='/'>Log Out</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default HeaderHome
