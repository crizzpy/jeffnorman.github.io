import React from 'react'

export const ReactSpinner = ({navCollapse, renderUserProfile}) => {
    return(
        <div className={ navCollapse ? "profilepreview_infowrap shrink" : "profilepreview_infowrap"}>
            <img
                src={require("../svg/logo192.png")}
                className={renderUserProfile ? "spin center" : "spin"}
            />
        </div>
    )
}