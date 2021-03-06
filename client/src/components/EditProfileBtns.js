import React, { useContext } from 'react'
import { Link, useHistory, __RouterContext, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'
import { ProfileImgIcon } from './ProfileImgIcon'

export const EditProfileBtns = ({ editProfileOpen, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, editProfileImgOpen, setEditProfileImgOpen, editProfileSettingsOpen, setEditProfileSettingsOpen, profileLink, setRenderUserProfile}) => {
    const history = useHistory()
    const { userId, setUserId,
        uniqueId, setUniqueId,
        setXCoordinate, setYCoordinate,
        setPreviewCardLabel, setPreviewCardOpen,
        hidePreview, setHidePreview,
        lastView, setLastView,
        cameFromProfile, setCameFromProfile } = useContext(GlobalContext)
    const {location} = useContext(__RouterContext)
    return(
        <React.Fragment>
            <div
                id="btn-1"
                onMouseEnter={() => {
                    if (!editProfileImgOpen && editProfileOpen) {
                        setPreviewCardOpen(true)
                        setPreviewCardLabel("Edit Photo")
                        let elem = document.getElementById("btn-1")
                        let coords = elem.getBoundingClientRect()
                        setXCoordinate(coords.left - 200 + "px")
                        setYCoordinate(coords.top - 105 + "px                                                                    ")
                    }
                }}
                onMouseLeave={() => {
                    setPreviewCardOpen(false)
                }}
                className="editprofile_btnwrap"
                onClick={() => {
                    if (editProfileImgOpen && (takePhotoOpen || addPhotoOpen)) {
                        setAddPhotoOpen(false)
                        setTakePhotoOpen(false)
                        setTimeout(() => {
                            setEditProfileImgOpen(!editProfileImgOpen)
                        }, 200)
                    } else {
                        setPreviewCardOpen(false)
                        setEditProfileImgOpen(!editProfileImgOpen)
                    }
                }}>
                <div className="profilebtn_innerwrap" id="top">
                    {/* <FontAwesomeIcon icon="camera" class="profileicon" id="top-btn" color={takePhotoOpen ? "white" : "lightgrey"} /> */}
                    <ProfileImgIcon className="profileicon" id="top-btn" />
                </div>
            </div>
            <div
                id="btn-2"
                onMouseEnter={() => {
                    if (editProfileOpen) {
                        setPreviewCardOpen(true)
                        setPreviewCardLabel("User Info")
                        let elem = document.getElementById("btn-2")
                        let coords = elem.getBoundingClientRect()
                        setXCoordinate(coords.left - 200 + "px")
                        setYCoordinate(coords.top - 105 + "px                                                                    ")
                    }
                }}
                onMouseLeave={() => {
                    setPreviewCardOpen(false)
                }}
                className="editprofile_btnwrap"
                onClick={e => {
                    e.preventDefault();
            }}>
                <div className="profilebtn_innerwrap" 
                    onClick={() => {
                        if (editProfileImgOpen && (takePhotoOpen || addPhotoOpen)) {
                            setAddPhotoOpen(false)
                            setTakePhotoOpen(false)
                            setPreviewCardOpen(false)
                            setCameFromProfile(true)
                            setTimeout(() => {
                                setEditProfileImgOpen(!editProfileImgOpen)
                                history.push(`${profileLink}/edit`)
                            }, 200)
                        } else {
                            setPreviewCardOpen(false)
                            setCameFromProfile(true)
                            if (editProfileImgOpen) {
                                setEditProfileImgOpen(false)
                            }
                            history.push(`${profileLink}/edit`)
                        }
                }}>
                    <FontAwesomeIcon icon="edit" class="profileicon" />
                </div>
            </div>
            <div
                className="editprofile_btnwrap"
                onClick={() => {
                    if (editProfileImgOpen && (takePhotoOpen || addPhotoOpen)) {
                        setAddPhotoOpen(false)
                        setTakePhotoOpen(false)
                        setPreviewCardOpen(false)
                        setCameFromProfile(true)
                        setTimeout(() => {
                            setEditProfileImgOpen(!editProfileImgOpen)
                            history.push(`${profileLink}/settings`)
                        }, 200)
                    } else {
                        setPreviewCardOpen(false)
                        setCameFromProfile(true)
                        if (editProfileImgOpen) {
                            setEditProfileImgOpen(false)
                        }
                        history.push(`${profileLink}/settings`)
                    }
                    // setEditProfileSettingsOpen(true)
                    // history.push(profileLink      + "/edit")
                    
                    // setRenderUserProfile(true)
                }}
                id="btn-3"
                onMouseEnter={() => {
                    if (editProfileOpen) {
                        setPreviewCardOpen(true)
                        setPreviewCardLabel("User Settings")
                        let elem = document.getElementById("btn-3")
                        let coords = elem.getBoundingClientRect()
                        setXCoordinate(coords.left - 200 + "px")
                        setYCoordinate(coords.top - 102 + "px                                                                    ")
                    }
                }}
                onMouseLeave={() => {
                    setPreviewCardOpen(false)
                }}    
            >
                <div className="profilebtn_innerwrap">
                    <FontAwesomeIcon icon="user-cog" class="profileicon" />
                </div>
            </div>
        </React.Fragment>
    )
} 