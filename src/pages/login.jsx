import React, { useState } from 'react';
import { useHistory } from 'react-router';
import HeaderLogin from '../layout/HeaderLogin';
import '../layout/style.css';
import AccountService from '../services/account'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { AlertTitle } from '@mui/material';

const Login = () => {

    const [open, setOpen] = React.useState(false)

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
    }

    let history = useHistory()

    const handleSubmit = (event) => {
        console.log(input)
        const data = {
            username: input.username,
            password: input.password
        }
        AccountService.login(data).then( response => {
            console.log(response)
            if (response.data.message) {
                console.log("hehe")
                sessionStorage.setItem('username', input.username)
                history.push('/home')
            }
            else {
                console.log(":(")
                setOpen(true)
            }
        })
    }

    return (
        <div>
            <HeaderLogin/>
            <div className="body1">
                <div className="container">
                    <Collapse in={open}>
                        <Alert severity="error"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                            <AlertTitle>Error</AlertTitle>
                            Incorrect username/password!
                        </Alert>
                    </Collapse>
                    <form className="form" id="login">
                        <h1 className="form__title">Login</h1>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Username" name="username" value={input.username} onChange={handleChange}/>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" placeholder="Password" name="password" value={input.password} onChange={handleChange}/>
                        </div>
                    </form>
                    <br/>
                    <br/>
                    <button className="form__button" onClick={handleSubmit}>Login</button>
                    <p className="form__text">
                        <a className="form__link" href="./signup" id="linkCreateAccount">Don't have an account? Create account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login