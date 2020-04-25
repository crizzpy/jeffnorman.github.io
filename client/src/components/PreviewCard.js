import React, {useContext} from 'react'
import { GlobalContext } from '../App'
import {animated, useTransition} from 'react-spring'

export const PreviewCard = ({addPostOpen}) => {
    
    const { previewCardOpen, previewCardLabel, previewCardDirection, xCoordinate, yCoordinate, hidePreview } = useContext(GlobalContext)
    
    const transition = useTransition(previewCardOpen && !hidePreview == true, null, {
        from: {opacity: 0, position: "absolute"},
        enter: {opacity: 1, position: "absolute"},
        leave: {opacity: 0, position: "absolute"}
    })

    return(
        transition.map(({item, props, key}) => (
            item && (
                <animated.div style={props}>
                    <div 
                        className="preview-card-container" 
                        style={{ 
                            position: "absolute",
                            zIndex: "100", 
                            background: "black", 
                            top: yCoordinate, 
                            left: xCoordinate, 
                            width: "auto",
                            // padding: "5px",
                            borderRadius: "5px", 
                            height: "25px"
                        }}
                    >
                        <div className="preview-inner" style={{margin: "3px", height: "100%", width: "100%"}}>
                            {previewCardLabel}
                        </div>
                    </div>    
                </animated.div>
            )
        ))
    )
}