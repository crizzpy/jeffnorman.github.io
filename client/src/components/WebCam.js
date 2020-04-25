// oooooo---oooooo-----oooo-oooooooooooo-oooooooooo.--------------.oooooo.---------.o.-------ooo--------ooooo-
// -`888.----`888.-----.8'--`888'-----`8-`888'---`Y8b------------d8P'--`Y8b-------.888.------`88.-------.888'-
// --`888.---.8888.---.8'----888----------888-----888-----------888--------------.8"888.------888b-----d'888--
// ---`888--.8'`888.-.8'-----888oooo8-----888oooo888'-----------888-------------.8'-`888.-----8-Y88.-.P--888--
// ----`888.8'--`888.8'------888----"-----888----`88b-----------888------------.88ooo8888.----8--`888'---888--
// -----`888'----`888'-------888-------o--888----.88P-----------`88b----ooo---.8'-----`888.---8----Y-----888--
// ------`8'------`8'-------o888ooooood8-o888bood8P'-------------`Y8bood8P'--o88o-----o8888o-o8o--------o888o-
import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const WebcamComponent = ({setWebCamOpen}) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <React.Fragment>
      <div className="webcam_container">
        <div className="view-wrap">
          <div className="camera-feed">  
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
            />
            <div className="camera-x-btn" onClick={e => {
              setWebCamOpen(false)
            }}>
              <FontAwesomeIcon icon="times" />
            </div>
          </div>
          <div className="webcam-btn-wrap">
            <div onClick={capture}>
              <FontAwesomeIcon icon="camera-retro" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};