import React from 'react'
import {Button} from '@material-ui/core';
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
         auth.signInWithPopup(provider)
         .then(result => {
             dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user,
             });
         })
         .catch((error) => alert(error.message));
    };

    return (
        <form className='login'>
            <div className='login_container'>
                <img src="https://www.vectorico.com/wp-content/uploads/2018/02/Whatsapp-Icon-300x300.png" alt=''></img>
                <div className='login_text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </form>
    )
}

export default Login
