import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from '../App'

export const UserImgEdit = ({ takePhotoOpen, setTakePhotoOpen, addPhotoOpen, setAddPhotoOpen }) => {
    const { userId, setUserId,
        uniqueId, setUniqueId,
        setXCoordinate, setYCoordinate,
        setPreviewCardLabel, setPreviewCardOpen,
        hidePreview, setHidePreview } = useContext(GlobalContext)

    
    return (
        <React.Fragment>
            <div id="user-img-exp"> 
            {/* <div className="inner_btn-overlay"> </div> */}
                <div className="inner_btn" onClick={e => { 
                        setAddPhotoOpen(false)
                        setTakePhotoOpen(!takePhotoOpen)
                        setPreviewCardOpen(false)
                    }}
                    id="cam-btn"
                >
                    {/* <div> */}
                        <FontAwesomeIcon icon="camera" class="inner_btn" 
                            onMouseEnter={() => {
                                if (!takePhotoOpen) {
                                    setPreviewCardOpen(true)
                                    setPreviewCardLabel("Take a Photo")
                                    let elem = document.getElementById("cam-btn")
                                    let coords = elem.getBoundingClientRect()
                                    setXCoordinate(coords.left - 250 + "px")
                                    setYCoordinate(coords.top - 100 + "px")
                                }
                            }}
                            onMouseLeave={() => {
                                // setTimeout(() => {
                                setPreviewCardOpen(false)
                                console.log('mouseOut')
                                // }, 500)
                            }}
                        />
                    {/* </div> */}
                </div>
                <div className="inner_btn" onClick={e => {
                        setTakePhotoOpen(false)
                        setAddPhotoOpen(!addPhotoOpen)
                        setPreviewCardOpen(false)
                    }}
                    id="pic-btn"
                >
                    {/* <div> */}
                        <FontAwesomeIcon icon="images" class="inner_btn" 
                            onMouseEnter={() => {
                                if (!addPhotoOpen) {
                                    setPreviewCardOpen(true)
                                    setPreviewCardLabel("Upload a photo")
                                    let elem = document.getElementById("pic-btn")
                                    let coords = elem.getBoundingClientRect()
                                    setXCoordinate(coords.left - 250 + "px")
                                    setYCoordinate(coords.top - 100 + "px")
                                }
                            }}
                            onMouseLeave={() => {
                                // setTimeout(() => {
                                setPreviewCardOpen(false)
                                console.log('mouseOut')
                                // }, 500)
                            }}
                        />
                    {/* </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}