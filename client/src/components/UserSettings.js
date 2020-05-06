import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'

export const UserSettings = ({ homeBtnOpen, setHomeBtnOpen }) => {
    
    useEffect(() => {
        loadHomeBtn()
    }, [])

    const loadHomeBtn = () => {
        console.log('user settings')
        if (!homeBtnOpen) {
            setTimeout(() => {
                setHomeBtnOpen(true)
            }, 150)
        }
    }


    const history = useHistory()
    const { profileLink, setCameFromProfile } = useContext(GlobalContext)
    
    return(
        <React.Fragment>
            <div className="settings-wrapper"> 
                
            </div>
        </React.Fragment>
    )
}