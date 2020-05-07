import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeBtnIcon = ({ setHomeBtnOpen }) => {
    const history = useHistory()
    const { userId, setUserId,
        uniqueId, setUniqueId,
        setXCoordinate, setYCoordinate,
        setPreviewCardLabel, setPreviewCardOpen, profileLink,
        hidePreview, setHidePreview } = useContext(GlobalContext)

        return(
        <div className="return-btn-wrap">
            <div className="return-btn" id="back-to-profile"
                onClick={() => {
                    setHomeBtnOpen(false)
                    setPreviewCardOpen(false)
                    history.push(`${profileLink}/info`)
                }}
                onMouseEnter={() => {
                    setPreviewCardOpen(true)
                    setPreviewCardLabel("Back to profile")
                    let elem = document.getElementById("back-to-profile")
                    let coords = elem.getBoundingClientRect()
                    setXCoordinate(coords.left - 260 + "px")
                    setYCoordinate(coords.top - 90 + "px")
                }}
                onMouseLeave={() => {
                    setPreviewCardOpen(false)
                }}
            >
                <FontAwesomeIcon icon="arrow-circle-left" id="return-btn-profile" />
            </div>
        </div>
    )
}