import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import UserContext from '../App'
import LoginContext from '../App'
import SignupContext from '../App'

const LoginForm = ({ loggedIn, setLoggedIn }) => {

    const { userId, setUserId } = useContext(UserContext);
    const { showSignup, setShowSignup } = useContext(SignupContext)
    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        passwordTwo,
        setPasswordTwo
    } = useContext(LoginContext);
    const handleGet = async (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        const response = await tryLogin(user)
        setUserId(response)
        // console.log(userId)
        // .catch(err => console.log(`Error encountered: ${err}`))

    }
    const tryLogin = async user => {
        return await axios.post('/users/login', user)
            .then(res => {
                // setActiveUser(res.data._id);
                setLoggedIn(true)
                return res.data
            })
            .catch(err => console.log(err))
    }
    const handlePost = e => {
        e.preventDefault();
        const user = {
            username,
            password,
            passwordTwo,
            email
        };

        axios.post("/users/add", user)
            .then(console.log('posted'))
            .catch(err => console.log(`Please see the following error: ${err}`));

        // setUsername('')
        // setPassword('')
        // setPasswordTwo('')
        // setEmail('')
    }
    return (
        <div className="form_container">
            {!showSignup && (
                <div className="form_innercontainer" id="login">
                    <form onSubmit={handleGet}>
                        <div className="input_wrapper">
                            <input
                                placeholder="Username or Email"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input_wrapper">
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="button_wrapper" onClick={handleGet}>
                            <button type="submit" value="Submit" id="button">
                                Log In
                </button>
                        </div>
                        <button
                            className="router_wrapper"
                            onClick={e => {
                                e.preventDefault();
                                setShowSignup(true);
                            }}
                        >
                            Don't have an account? >> Sign Up
              </button>
                    </form>
                </div>
            )}

            {showSignup && (

                <div className="form_innercontainer">
                    <form onSubmit={handlePost}>
                        <div className="input_wrapper">
                            <input
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input_wrapper">
                            <input
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input_wrapper">
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input_wrapper">
                            <input
                                placeholder="Confirm Password"
                                type="password"
                                value={passwordTwo}
                                onChange={e => setPasswordTwo(e.target.value)}
                            />
                        </div>
                        <div className="button_wrapper" onClick={handlePost}>
                            <button type="submit" value="Submit" id="button">
                                Sign Up
                </button>
                        </div>
                        <button
                            className="router_wrapper"
                            onClick={e => {
                                e.preventDefault();
                                setShowSignup(false);
                            }}>
                            Have an exisiting account? >> Log In
            </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default LoginForm