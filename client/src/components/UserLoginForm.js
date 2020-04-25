import React, { useRef, useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from "../App";

export const UserLoginForm = ({setPageReady, setRenderWelcome}) => {
    // const forwardedRef = React.forwardRef(UserLoginForm)
    const { userId, setUserId,
            loggedIn, setLoggedIn,
            showSignup, setShowSignup,
            history, setHistory,
            activeComponent, setActiveComponent } = useContext(GlobalContext);

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleGet = async (e) => {
        e.preventDefault()
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        axios.post('/users/login', user)
            .then(res => {
                // setActiveUser(res.data._id);
                setUserId(res.data)
                setRenderWelcome(true)
                setActiveComponent('welcome')
                setLoggedIn(true)
                setPageReady(false)
                setHistory([...history, '/login'])
            })
            .catch(err => console.log(err))
        
        // console.log(userId)
        // .catch(err => console.log(`Error encountered: ${err}`))

    }

    return(
        <div className="form_container">
            <div className="form_innercontainer" id="login">
                <form onSubmit={handleGet}>
                    <div className="input_wrapper" onClick={() => usernameRef.current.focus()}>
                        <input
                            placeholder="Username or Email"
                            ref={usernameRef}
                            id="login_input"
                        />
                    </div>
                    <div className="input_wrapper" onClick={() => passwordRef.current.focus()}>
                        <input
                            placeholder="Password"
                            type="password"
                            ref={passwordRef}
                            id="login_input"
                        />
                    </div>
                    <div className="button_wrapper" onClick={handleGet}>
                        <button type="submit" value="Submit" id="button">Log In</button>
                    </div>
                    <div className="router_wrapper" onClick={() => setShowSignup(true)}>
                        <button className="router">
                            Don't have an account? >> Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}