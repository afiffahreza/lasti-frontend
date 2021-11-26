import React from 'react';
import HeaderLogin from '../layout/HeaderLogin';
import '../layout/style.css';

const Login = () => {
        return (
            <div>
                <HeaderLogin/>
                <div className="body1">
                    <div className="container">
                        <form className="form" id="login">
                            <h1 className="form__title">Login</h1>
                            <div className="form__input-group">
                                <input type="text" className="form__input" autoFocus placeholder="Username or email" />
                            </div>
                            <div className="form__input-group">
                                <input type="password" className="form__input" autoFocus placeholder="Password" />
                            </div>
                            <button className="form__button" type="submit">Login</button>
                            <p className="form__text">
                                <a className="form__link" href="./signup" id="linkCreateAccount">Don't have an account? Create account</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default Login