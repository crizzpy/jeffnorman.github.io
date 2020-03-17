import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

export const AbsoluteWrapper = ({ children }) => {
    return <div style={{position: "absolute", top: "0px", left: "0px", zIndex: 1}}>{children}</div>;
    // return <div className="position-absolute w-100">{children}</div>;
};

