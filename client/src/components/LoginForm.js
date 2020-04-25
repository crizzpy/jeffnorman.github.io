import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { GlobalContext } from "../App";
import { UserLoginForm } from './UserLoginForm'
// import { SignupForm } from './SignupForm'


export const LoginForm = ({setPageReady, setRenderWelcome}) => {

    const { userId, setUserId,
            loggedIn, setLoggedIn,
            showSignup, setShowSignup } = useContext(GlobalContext);


    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordTwoRef = useRef(null)
    const emailRef = useRef(null)

    

    
    return (
        <UserLoginForm setPageReady={setPageReady} setRenderWelcome={setRenderWelcome} />
    )
}