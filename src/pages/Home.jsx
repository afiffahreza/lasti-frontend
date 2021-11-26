import { Button, Container, Grid, List, ListItem, Typography } from "@mui/material"
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
    }, [])

    return (
        <div className="body2">
            <HeaderHome/>
            <Container maxWidth='md' style={{marginTop: '20px', background: "#B4DFA6"}}>
                <br/>
                <Box sx={{ flexGrow: 1, border: 1, bgcolor: "#B4DFA6"}}> 
                    <Grid container spacing={1} style={{margin: "auto"}}>
                        <Grid item xs={6} md={2}>
                            <ListItem>User :</ListItem>
                            <ListItem>Wallet :</ListItem>
                            <br/>
                        </Grid>
                        <Grid item xs={6} md={7}>
                            <ListItem>{user.username}</ListItem>
                            <ListItem>Rp {user.money}</ListItem>
                            <br/>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <br/>
                            <br/>
                            <Button variant="contained" color="success" href="/wallet">Top Up Wallet</Button>
                        </Grid>
                    </Grid>  
                </Box>
                <br/>
                <Box>
                    <Grid container spacing={1} style={{margin: "auto"}}>
                        <Grid item xs={6} md={9}>
                            <Typography variant="h6" margin="auto">
                                Coba smart calculator untuk perjalanan anda!
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Button variant="contained" href="/toll-calculator">Toll Calculator</Button>
                        </Grid>
                    </Grid>
                </Box>
                <br/>
                <Box sx={{ flexGrow: 1,border: 1,bgcolor: "#B4DFA6"}} marginTop="10px">
                    <br/>
                    <Typography variant="h6" marginLeft="15px" marginTop="1px" marginBottom="6px">
                        Plat Anda:
                    </Typography>
                    <List>
                        {user.plates.length === 0 ? (
                            <div style={{marginLeft: "15px"}}>
                            Belum ada plat nomor tersimpan
                            </div>
                        ) : user.plates.map((plate,index) => (
                            <ListItem divider key={index}>
                                {plate}
                            </ListItem>
                        ))}   
                    </List>
                    <Button variant="contained" color="success" style={{margin:"20px"}} href='/plates'>Tambah Plat</Button>
                </Box>
                <br/>
            </Container>
        </div>
    )
}

export default Home