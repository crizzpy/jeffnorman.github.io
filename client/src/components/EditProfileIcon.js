import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'


export const EditProfileIcon = ({ editProfileOpen, setEditProfileOpen, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, editProfileImgOpen, setEditProfileImgOpen}) => {

    const { userId, setUserId,
        uniqueId, setUniqueId,
        setXCoordinate, setYCoordinate,
        setPreviewCardLabel, setPreviewCardOpen,
        hidePreview, setHidePreview } = useContext(GlobalContext)
    
    return(
        <div className="profilebtn_wrap"
            id="ed-profile"
            onMouseEnter={() => {
                if (!editProfileOpen) {
                    setPreviewCardOpen(true)
                    setPreviewCardLabel("Edit Profile")
                    let elem = document.getElementById("ed-profile")
                    let coords = elem.getBoundingClientRect()
                    setXCoordinate(coords.left - 245 + "px")
                    setYCoordinate(coords.top - 90 + "px")
                }
            }}
            onMouseLeave={() => {
                setPreviewCardOpen(false)
            }}
        >
            <div className={editProfileOpen ? "edit_btn open" : "edit_btn"}
                onClick={e => {
                    e.preventDefault();
                    if (editProfileOpen && editProfileImgOpen && (!addPhotoOpen && !takePhotoOpen)) {
                        setEditProfileImgOpen(false)
                        setTimeout(() => {
                            setEditProfileOpen(!editProfileOpen);
                        }, 200)
                    } else if (editProfileOpen && editProfileImgOpen && (addPhotoOpen || takePhotoOpen)) {
                        setTakePhotoOpen(false)
                        setAddPhotoOpen(false)
                        setTimeout(() => {
                            setEditProfileImgOpen(false)
                        },200)
                        setTimeout(() => {
                            setEditProfileOpen(!editProfileOpen)
                        },400)
                    } else {
                        setEditProfileOpen(!editProfileOpen)
                        setPreviewCardOpen(false)
                    }
                }}>
                <div className="profilebtn_innerwrap">
                    <FontAwesomeIcon icon="user-edit" class="profileicon" />
                </div>
            </div>
        </div>
    )
}