import { Container, Grid, ListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import Header from "../layout/Header"

const Home = () => {
    return (
        <div>
            <Header/>
            <Container maxWidth='lg' style={{marginTop: '20px'}}>
                <Box sx={{ flexGrow: 1 }, {border: 1}, {bgcolor: "#B4C6A6"}}> 
                    <Grid container spacing={1} style={{margin: "auto"}}>
                        <Grid item xs={6} md={2}>
                            <ListItem>Nama :</ListItem>
                            <ListItem>Wallet :</ListItem>
                        </Grid>
                        <Grid item xs={6} md={10}>
                            <ListItem>Orang hehe</ListItem>
                            <ListItem>270700</ListItem>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Home