import React, { useState } from 'react';
import { useHistory } from 'react-router';
import HeaderLogin from '../layout/HeaderLogin';
import '../layout/style.css';
import AccountService from '../services/account'

const Login = () => {

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
            }
        })
    }

    return (
        <div>
            <HeaderLogin/>
            <div className="body1">
                <div className="container">
                    <form className="form" id="login">
                        <h1 className="form__title">Login</h1>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Username" name="username" value={input.username} onChange={handleChange}/>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" autoFocus placeholder="Password" name="password" value={input.password} onChange={handleChange}/>
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