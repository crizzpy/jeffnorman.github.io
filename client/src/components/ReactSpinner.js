import React, {useState, useContext} from 'react'
import {useSpring, config} from 'react-spring'
import { Keyframes, Spring } from 'react-spring/renderprops'
import {GlobalContext} from '../App'

export const ReactSpinner = () => {
    // .spin{
    //     object-fit: contain;
    //     height: 80px;
    //     opacity: 0.2;
    // }
    // .spin.center{
    //     position: absolute;
    //     right: 43px;
    // }
    // .profileImgLrg: hover.spin{
    //     height: 90px;
    // }
    const {lastView} = useContext(GlobalContext)

    return(
        // <div className="profilepreview_infowrap">
            <img
                src={require("../svg/logo192.png")}
                className="spin"
            />
            // <p>Test</p>
        // </div>
    )
}