import React from 'react';
import '../layout/style.css';

const Signup = () => {
        return (
            <div>
                <div class="container">
                    <form class="form " id="createAccount">
                        <h1 class="form__title">Create Account</h1>
                        <div class="form__input-group">
                            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username" />
                        </div>
                        <div class="form__input-group">
                            <input type="text" class="form__input" autofocus placeholder="Email Address" />
                        </div>
                        <div class="form__input-group">
                            <input type="password" class="form__input" autofocus placeholder="Password" />
                        </div>
                        <div class="form__input-group">
                            <input type="password" class="form__input" autofocus placeholder="Confirm Password" />
                        </div>
                        <button class="form__button" type="submit">Create Account</button>
                        <p class="form__text">
                            <a class="form__link" href="./" id="linkLogin">Already have an account? Login</a>
                        </p>
                    </form>
                </div>
            </div>
                );
            }

export default Signup