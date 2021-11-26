import React, { useState } from 'react';
import { useHistory } from 'react-router';
import HeaderLogin from '../layout/HeaderLogin';
import '../layout/style.css';
import AccountService from '../services/account'

const Signup = () => {

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
        AccountService.signup(data).then( response => {
            console.log(response)
            history.push('/login')
        })
    }

    return (
        <div>
            <HeaderLogin/>
            <div className="body1">
                <div className="container">
                    <form className="form " id="createAccount">
                        <h1 className="form__title">Create Account</h1>
                        <div className="form__input-group">
                            <input type="text" id="signupUsername" className="form__input" autoFocus placeholder="Username" name="username" value={input.username} onChange={handleChange}/>
                        </div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" placeholder="Email Address" />
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" placeholder="Password" name="password" value={input.password} onChange={handleChange}/>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" placeholder="Confirm Password" />
                        </div>
                    </form>
                    <br/><br/>
                    <button className="form__button" type="submit" onClick={handleSubmit}>Create Account</button>
                    <p className="form__text">
                        <a className="form__link" href="./login" id="linkLogin">Already have an account? Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup