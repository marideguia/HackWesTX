import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
        <div className="login__title">login or register</div>
        <form className="login__form">
            <div className="login__email">
                <strong>email</strong><br />
                <input className="login__field" type="email" placeholder="enter your email..." />
            </div>
            <div className="login__password">
                <strong>password</strong><br />
                <input className="login__field" type="password" placeholder="enter your password..." />
            </div>
            <div className="login__split">
                <div className="login__columnOne">
                    <input type="checkbox" />
                    <div className="login__checkinfo">remember me.</div>
                    <button type="button">login</button>
                </div>
                <div className="login__columnTwo">
                    <input type="checkbox" />
                    <div className="login__checkinfo">i agree to the spottid terms and conditions.</div>
                    <button type="button">register</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login;