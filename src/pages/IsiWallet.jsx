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
import { useState } from 'react'
import { Text, StyleSheet } from "react";

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

    const handleChangeMetode = (event) => {
    setMetode(event.target.value);
    };
    const handleChangeTotal = (event) => {
    setTotal(event.target.value);
    };

    return (
        <><div>
            <Header />
        </div><Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            m={3}
        >
                <div>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Isi Ulang Dompetmu Sebelum Pergi! <br></br>
                        <br></br>
                        Isi Saldomu Sekarang: Rp. 53,700.00
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
                <div style={{position:'absolute', top:340, left:20}}>
                    <Button variant="contained" sx={{width:450}} href='./home' disabled={Total<1 || Metode === ''}>Top-Up</Button>
                </div>
            </Box></>
    )
    }

export default IsiWallet