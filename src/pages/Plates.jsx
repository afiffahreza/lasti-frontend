import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Header from "../layout/Header"
import AccountService from '../services/account'

const Plates = () => {

    useEffect(() => {
        AccountService.getByUsername(sessionStorage.getItem('username'))
        .then( response => {
            setPlates(response.data.plates)
        })
    }, [])

    const [submitted, setSubmitted] = useState(false)

    const [platesData, setPlates] = useState([])

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(input)
        setPlates(platesData => [...platesData, input])
        setSubmitted(true)
    }

    useEffect(() => {
        const data = {
            plates: platesData
        }
        AccountService.updatePlate(sessionStorage.getItem('username'), data).then(reponse => {
            console.log(reponse)
        })
    }, [submitted])

    return (
        <div className="body2">
            <Header/>
            <Container maxWidth='sm' style={{marginTop: '20px', background: "#B4DFA6"}}>
                <br/>
                <Typography variant="h6" style={{marginLeft: "30px"}}>
                    Tambah Plat Anda
                </Typography>
                <Grid container spacing={1} style={{margin: "auto"}}>
                    <Grid item xs={6} sm={8} md={8}>
                        <TextField id="plat" label="Plat" variant="outlined" helperText="Plat tanpa spasi" style={{margin: "20px"}}
                            type="string" required value={input} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Button color="success" variant="contained" style={{marginTop: "30px"}} onClick={handleSubmit} disabled={ input === '' || submitted}>Tambah</Button>
                    </Grid>
                </Grid>
                {submitted ? (
                    <div>
                        <Typography variant="h7" style={{marginLeft: "30px"}}>
                            Plat berhasil ditambahkan
                        </Typography>
                        <br/>
                        <br/>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </Container>
        </div>
    )
}

export default Plates
