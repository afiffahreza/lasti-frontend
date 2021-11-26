import React from 'react';
import HeaderLogin from '../layout/HeaderLogin';
import '../layout/style.css';

const Signup = () => {
        return (
            <div>
                <HeaderLogin/>
                <div className="body1">
                    <div className="container">
                        <form className="form " id="createAccount">
                            <h1 className="form__title">Create Account</h1>
                            <div className="form__input-group">
                                <input type="text" id="signupUsername" className="form__input" autoFocus placeholder="Username" />
                            </div>
                            <div className="form__input-group">
                                <input type="text" className="form__input" autoFocus placeholder="Email Address" />
                            </div>
                            <div className="form__input-group">
                                <input type="password" className="form__input" autoFocus placeholder="Password" />
                            </div>
                            <div className="form__input-group">
                                <input type="password" className="form__input" autoFocus placeholder="Confirm Password" />
                            </div>
                            <button className="form__button" type="submit">Create Account</button>
                            <p className="form__text">
                                <a className="form__link" href="./login" id="linkLogin">Already have an account? Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
                );
            }

export default Signup