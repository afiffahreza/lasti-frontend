import Header from "../layout/Header"
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react'
import { Text, StyleSheet } from "react";
import AccountService from '../services/account'

const MetodePembayaran = [
    {
        value:"m-banking bca",
        label:"M-Banking BCA",
    },
    {
        value:"mobile banking bni",
        label:"Mobile Banking BNI",
    },
    {
        value:"mobile banking bri",
        label:"Mobile Banking BRI",
    },
    {
        value:"mobile banking cimb niaga",
        label:"Mobile Banking CIMB NIAGA",
    }
];

const IsiWallet = () => {
    const [Metode, setMetode] = React.useState('');
    const [Total, setTotal] = React.useState(0);
    const [saldo, setSaldo] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const handleChangeMetode = (event) => {
    setMetode(event.target.value);
    };
    const handleChangeTotal = (event) => {
    setTotal(event.target.value);
    };

    useEffect(() => {
        AccountService.getByUsername(sessionStorage.getItem('username'))
        .then( response => {
            setSaldo(response.data.money)
        })
    }, [])

    const handleSubmit = (event) => {
        const newbal = Number(saldo) + Number(Total)
        console.log(newbal)
        const data = {
            money: newbal
        }
        AccountService.updateMoney(sessionStorage.getItem('username'), data).then(response => {
            console.log(response)
            setSubmitted(true)
        })
    }

    return (
        <><div className="body3">
            <Header />
        <Container maxWidth='sm' style={{marginTop: '20px', background: "#B4DFA6"}}>
        <br/>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch'},
            }}
            noValidate
            autoComplete="off"
            m={3}
        >
                <div>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Isi Ulang Dompetmu Sebelum Pergi! <br></br>
                        <br></br>
                        Isi Saldomu Sekarang: Rp{saldo}
                        <br></br>
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <br></br>
                    </Typography>
                    <TextField id="Jumlah-basic" label="Jumlah Uang" variant="outlined" helperText="Satuan Rupiah, jangan pakai tanda titik/koma"
                    type="number" min="1" required value={Total} onChange={handleChangeTotal}/>
                    <TextField id="MetodePembayaran-basic" label="Metode Pembayaran" variant="outlined"
                        select value={Metode} onChange={handleChangeMetode} helperText="Pilih Metode Pembayaran" required >
                        {MetodePembayaran.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div sx={{ display: "flex", justifyContent: 'flex-end'}}>
                    <Button variant="contained" sx={{width:450}} onClick={handleSubmit} disabled={Total<1 || Metode === '' || submitted}>Top-Up</Button>
                </div>
                <div><br/></div>
                {submitted ? (
                    <div>
                        <Typography variant="h7" style={{marginLeft: "30px"}}>
                            Wallet berhasil ditambahkan
                        </Typography>
                        <br/>
                        <br/>
                    </div>
                ) : (
                    <div></div>
                )}

            </Box>
            </Container>
            </div></>
    )
    }

export default IsiWallet