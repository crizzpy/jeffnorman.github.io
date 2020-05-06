import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeBtnIcon = ({ setHomeBtnOpen }) => {
    const history = useHistory()
    const { profileLink } = useContext(GlobalContext)
    return(
        <div className="return-btn-wrap">
            <div className="return-btn" onClick={() => {
                setHomeBtnOpen(false)
                history.push(`${profileLink}/info`)
            }}>
                <FontAwesomeIcon icon="arrow-circle-left" />
            </div>
        </div>
    )
}