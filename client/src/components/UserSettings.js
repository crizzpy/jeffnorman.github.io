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
            }, 250)
        }
    }


    const history = useHistory()
    const { profileLink, setCameFromProfile } = useContext(GlobalContext)
    
    return(
        <React.Fragment>
            <div className="settings-wrapper"> 
                <div className="settings-innerwrap">
                    <div className="settings-top-banner">
                        <div className="settings-top-banner-accent" />
                        <div className="settings-title">
                            Settings
                        </div>
                        <div className="iconwrap">
                            <div className="msgimgcircle">
                                <div className="msgimage">
                                    <FontAwesomeIcon icon="user-cog" class="msgimage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}