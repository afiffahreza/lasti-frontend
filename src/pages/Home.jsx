import { Container, Grid, ListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, {useState, useEffect} from "react"
import HeaderHome from "../layout/HeaderHome"
import AccountService from '../services/account'

const Home = () => {

    const [user, setUser] = useState({
        username: "",
        money: 0,
        plates: [""]
    })

    useEffect(() => {
        AccountService.getByUsername(sessionStorage.getItem('username'))
        .then( response => {
            setUser({
                username: response.data.username,
                money: response.data.money,
                plates: response.data.plates
            })
        })
    })

    return (
        <div>
            <HeaderHome/>
            <Container maxWidth='lg' style={{marginTop: '20px'}}>
                <Box sx={{ flexGrow: 1 }, {border: 1}, {bgcolor: "#B4C6A6"}}> 
                    <Grid container spacing={1} style={{margin: "auto"}}>
                        <Grid item xs={6} md={2}>
                            <ListItem>User :</ListItem>
                            <ListItem>Wallet :</ListItem>
                        </Grid>
                        <Grid item xs={6} md={10}>
                            <ListItem>{user.username}</ListItem>
                            <ListItem>{user.money}</ListItem>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Home