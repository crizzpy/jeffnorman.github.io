import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'

export const ProfileSettings = ({ homeBtnOpen, setHomeBtnOpen }) => {
    
    useEffect(() => {
        loadHomeBtn()
    }, [])
    
    const loadHomeBtn = () => {
        console.log('user info')
        if (!homeBtnOpen) {
            setTimeout(() => {
                setHomeBtnOpen(true)
            }, 150)
        }
    }

    const history = useHistory()
    const { profileLink, setCameFromProfile } = useContext(GlobalContext)
    return (
        <React.Fragment>
            <div className="settings-wrapper">
                <div className="settings-innerwrap">
                    
                </div>
            </div>
        </React.Fragment>
    );
};