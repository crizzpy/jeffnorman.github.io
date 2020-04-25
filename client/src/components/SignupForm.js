import React, { useRef, useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from "../App";

export const SignupForm = (usernameRef, passwordRef, passwordTwoRef, emailRef) => {

    const { userId, setUserId, 
            loggedIn, setLoggedIn, 
            showSignup, setShowSignup } = useContext(GlobalContext);
    
    const handlePost = e => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            passwordTwo: passwordTwoRef.current.value,
            email: emailRef.current.value
        };

        axios.post("/users/add", user)
            .then(console.log('posted'))
            .catch(err => console.log(`Please see the following error: ${err}`));
    }

    return(
        <div className="form_container">
            <div className="form_innercontainer">
                <form onSubmit={handlePost}>
                    <div className="input_wrapper">
                        <input
                            id="login_input"
                            placeholder="Email"
                            ref={emailRef}
                        />
                    </div>
                    <div className="input_wrapper">
                        <input
                            id="login_input"
                            placeholder="Username"
                            ref={usernameRef}
                        />
                    </div>
                    <div className="input_wrapper">
                        <input
                            id="login_input"
                            placeholder="Password"
                            type="password"
                            ref={passwordRef}
                        />
                    </div>
                    <div className="input_wrapper">
                        <input
                            id="login_input"
                            placeholder="Confirm Password"
                            type="password"
                            ref={passwordTwoRef}
                        />
                    </div>
                    <div className="button_wrapper" onClick={handlePost}>
                        <button type="submit" value="Submit" id="button">
                            Sign Up
                                </button>
                    </div>
                    <div
                        className="router_wrapper"
                        onClick={() => setShowSignup(false)}>
                        <button className="router">
                            Have an exisiting account? >> Log In
                                </button>
                    </div>
                </form>
            </div>
        </div>
    )
}