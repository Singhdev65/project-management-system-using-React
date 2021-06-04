import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './Login.css';
import {actionTypes} from '../../reducer';

const Login = () => {

    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        }))
        .catch((error) => alert(error.message));
}

    return (
        <div className="login">
            <div className="login__header">
                    <div className="login__headerLeft">
                        <h2><span>Project</span>Management</h2>
                    </div>

                    <div className="login__headerRight">
                        <p>login</p>
                        <p>Register</p>
                    </div>
            </div>

            <div className="login__body">
            
                <form>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="password"/>
                <div className="form__checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
                </div>
                <Button variant="contained"color="primary" style={{marginTop: "1rem", background:"#007bff"}} onClick={signIn}>Login</Button>
                <Button variant="contained"color="primary" style={{marginTop: "1rem", background:"#007bff"}} onClick={signIn}>Login with Facebook</Button>
                <Button variant="contained"color="primary" style={{marginTop: "1rem", background:"#007bff"}} onClick={signIn}>Login with Google</Button>
                </form>
                
            </div>
        </div>
    )
}

export default Login
