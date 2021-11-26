import React from 'react';
import '../layout/style.css';

const Login = () => {
        return (
            <div>
                <div class="container">
                    <form class="form" id="login">
                        <h1 class="form__title">Login</h1>
                        <div class="form__input-group">
                            <input type="text" class="form__input" autofocus placeholder="Username or email" />
                        </div>
                        <div class="form__input-group">
                            <input type="password" class="form__input" autofocus placeholder="Password" />
                        </div>
                        <button class="form__button" type="submit">Login</button>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
                        </p>
                    </form>
                </div>
            </div>
                );
            }

export default Login