import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ProfileSettings = ({ setEditProfileSettingsOpen }) => {

    return (
        <React.Fragment>
            <div className="settings-wrapper">
                <div className="settings-innerwrap">
                    <div className="return-btn-wrap">
                        <div className="return-btn" onClick={() => setEditProfileSettingsOpen(false)}>
                            <FontAwesomeIcon icon="arrow-circle-left" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};