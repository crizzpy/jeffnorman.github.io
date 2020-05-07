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
            }, 250)
        }
    }

    const history = useHistory()
    const { profileLink, setCameFromProfile } = useContext(GlobalContext)
    return (
        <React.Fragment>
            <div className="settings-wrapper">
                <div className="settings-innerwrap">
                    <div className="settings-top-banner-accent" />
                    <div className="settings-top-banner">
                        <div className="settings-title">
                            Edit User Info
                        </div>
                        <div className="iconwrap">
                            <div className="msgimgcircle">
                                <div className="msgimage">
                                    <FontAwesomeIcon icon="edit" class="msgimage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="settings-edit-container">
                        <div className="settings-edit-inner">
                            <div className="edit-item-container">
                                <div className="edit-item">
                                    First Name
                                </div>
                                <input className="edit-item input_wrapper"></input> 
                            </div>
                            <div className="edit-item-container">
                                <div className="edit-item">
                                    Last Name
                                </div>
                                <input className="edit-item input_wrapper"></input> 

                            </div>
                            <div className="edit-item-container">
                                <div className="edit-item">
                                    About Me
                                </div>
                                <input className="edit-item input_wrapper"></input> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};