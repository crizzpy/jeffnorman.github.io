import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ProfileSettings = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            {/* <div className="settings-wrapper">
                <div className="settings-innerwrap">
                    <div className="return-btn-wrap">
                        <Link to="/profile">
                            <div className="return-btn">
                                <FontAwesomeIcon icon="arrow-circle-left" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div style={{background: "black", height: "100%", width: "100%"}}>
                <h1>
                    TESTING
                </h1>
            </div>
        </React.Fragment>
    );
};