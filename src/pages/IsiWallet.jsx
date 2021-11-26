import Header from "../layout/Header IsiWallet"
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
import '../layout/style.css';

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

    const handleChange = (event) => {
    setMetode(event.target.value);
    };
    return (
        <><div>
            <Header />
        </div>
        <div sx={{bgcolor:"#ffffff"}}><Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                bgcolor:'#ffffff',
            }}
            noValidate
            autoComplete="off"
        >
                <div>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1}} p={3}>
                        Isi Ulang Dompetmu Sebelum Pergi! <br></br>
                        <br></br>
                        Isi Saldomu Sekarang: Rp. 53,700.00
                    </Typography>
                </div>
                <div>
                    <TextField id="Jumlah-basic" label="Jumlah Uang" variant="outlined" helperText="Satuan Rupiah, jangan pakai tanda titik/koma" required='true' />
                    <TextField id="MetodePembayaran-basic" label="Metode Pembayaran" variant="outlined"
                        select value={Metode} onChange={handleChange} helperText="Pilih Metode Pembayaran" required='true'>
                        {MetodePembayaran.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div style={{ display: "flex", justifyContent: 'flex-end',padding:10 }}>
                    <Button variant="contained" p={3}>Top-Up</Button>
                </div>
                <div>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1}} p={1}>
                       <br></br>
                    </Typography>
                </div>
            </Box>
            </div></>
    )
    }

export default IsiWallet