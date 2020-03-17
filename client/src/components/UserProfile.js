
// ooooo-----ooo--.oooooo..o-oooooooooooo-ooooooooo.-------------ooooooooo.---ooooooooo.-----.oooooo.---oooooooooooo-ooooo-ooooo--------oooooooooooo-
// `888'-----`8'-d8P'----`Y8-`888'-----`8-`888---`Y88.-----------`888---`Y88.-`888---`Y88.--d8P'--`Y8b--`888'-----`8-`888'-`888'--------`888'-----`8-
// -888-------8--Y88bo.-------888----------888---.d88'------------888---.d88'--888---.d88'-888------888--888----------888---888----------888---------
// -888-------8---`"Y8888o.---888oooo8-----888ooo88P'-------------888ooo88P'---888ooo88P'--888------888--888oooo8-----888---888----------888oooo8----
// -888-------8-------`"Y88b--888----"-----888`88b.---------------888----------888`88b.----888------888--888----"-----888---888----------888----"----
// -`88.----.8'--oo-----.d8P--888-------o--888--`88b.-------------888----------888--`88b.--`88b----d88'--888----------888---888-------o--888-------o-
// ---`YbodP'----8""88888P'--o888ooooood8-o888o--o888o-----------o888o--------o888o--o888o--`Y8bood8P'--o888o--------o888o-o888ooooood8-o888ooooood8-


import React, { useState, useEffect, useCallback, useRef, createContext, useContext, useMemo } from "react";
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
import { UserContext, PostsContext, PageIndexContext, ActiveComponentContext, HistoryContext, UniqueIdContext } from '../App'
import { WebcamComponent } from './WebCam'
import {useParams} from 'react-router-dom'


export const UserProfile = ({activeUser, setActiveUser, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen}) => {

  const {userId, setUserId} = useContext(UserContext)
  const { history, setHistory } = useContext(HistoryContext)
  const {uniqueId, setUniqueId} = useContext(UniqueIdContext)



  const [viewId, setViewId] = useState({})
  
  useEffect(() => {
    setHistory('/profile')
    if (!uniqueId) {
      setUniqueId(userId.id)
    }
    if (userId.id !== uniqueId) {
      const user = {
        uniqueId
      }
      axios.post('/users/load', user)
      .then(res => {
        setViewId(res.data)
        // console.log(res.data)
        // console.log(viewId)
      })
      .catch(err => console.log(err))
    } else {
      setViewId(userId)
    }
  }, [])

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const addPhotoFade = useSpring({
      opacity: addPhotoOpen ? 1 : 0,
  })

  const takePhotoFade = useSpring({
    opacity: takePhotoOpen ? 1 : 0,
  });

  const webCamFade = useSpring({
    opacity: webCamOpen ? 1 : 0,
    visibility: webCamOpen ? 'visible' : 'hidden'
  })

  const transition1 = useTransition(addPhotoOpen, null, {
    from: { opacity: 1, height: "0px" },
    enter: { opacity: 1, height: "120px" },
    leave: { opacity: 1, height: "0px" },
    config: {
      // default: config.wobbly,
      // duration: 200
    }
  })
  const transition2 = useTransition(takePhotoOpen, null, {
    from: { opacity: 1, height: "0px" },
    enter: { opacity: 1, height: "120px" },
    leave: { opacity: 1, height: "0px" },
    config: {
      // default: config.wobbly,
      // duration: 200
    }
  })

  const uploadHandler = async e => {
    // const fd = new FormData(myForm.files.File)
    // uploadedFile.map(file => {
    //   console.log(file)
    // })
    
    const fileName = `userimg-${viewId._id}-${Date.now()}`
    console.log(fileName)
    // fd.set() 
    const fileBlob = new Blob(document.getElementsByName("addPhoto")[0].files)
    const fd = new FormData()
    fd.append('files', fileBlob, fileName);
    // fd.append('test', 'test')
    console.log(fd)
    await axios.post('/images/upload', fd)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }
  const [aboutText, setAboutText] = useState('')
  const [showAboutMe, setShowAboutMe] = useState(false)
  return (
    <animated.div className="profilepage_wrapper" style={fade}>
      <div className="sidetop_wrapper">
        <div className="userimg_wrapper">
          <div className="splitterwrapper">
            <div className="imgcircle">
              <div className="image">
                <img src={require("../images/img.jpg")} className="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="profilebtn_wrap">
          <div
            className={takePhotoOpen ? "takepic_btn open" : "takepic_btn"}
            onClick={e => {
              e.preventDefault();
              setAddPhotoOpen(false);
              setTakePhotoOpen(!takePhotoOpen);
          }}>
            <div className="profilebtn_innerwrap">
              <FontAwesomeIcon icon="camera" class="profileicon" />
            </div>
          </div>
          <div
            className={addPhotoOpen ? "choosepic_btn open" : "choosepic_btn"}
            onClick={e => {
              e.preventDefault();
              setTakePhotoOpen(false);
              setAddPhotoOpen(!addPhotoOpen);
          }}>
            <div className="profilebtn_innerwrap">
              <FontAwesomeIcon icon="images" class="profileicon" />
            </div>
          </div>
        </div>
        <div className="slideouts_wrapper">
          {transition1.map(({item, props, key}) => (
            item && (
              <animated.div
                className="uploadwrap"
                id="shift"
                style={props}
              >
                <div className="addphoto-wrap">
                  <form id="upload1">
                    <div className="image-upload">
                      <label for="file-input">
                        <FontAwesomeIcon icon="plus-circle" class="uploadbtn" />
                      </label>
                      <input id="file-input" name="addPhoto" type="file" onChange={e => setUploadedFile(e.target.files[0])} />
                    </div>
                    <div className="image-upload" onClick={e => {
                      e.preventDefault()
                      uploadHandler()
                    }}>
                      <label for="file-input">
                        <FontAwesomeIcon icon="cloud-upload-alt" class="uploadbtn" />
                      </label>
                      <button id="file-input" type="submit" name="test" value="Submit" />
                    </div>
                  </form>
                </div>
              </animated.div>
            )
          ))}
          
          {transition2.map(({item, props, key}) => (
            item && (
              <animated.div className="uploadwrap" style={props}>
                <div className="addphoto-wrap">
                  <form onSubmit={uploadHandler} id="upload2">
                    <div className="image-upload" onClick={e => {
                      e.preventDefault()
                      setWebCamOpen(true);
                    }}>
                      <label for="file-input">
                        <FontAwesomeIcon icon="plus-circle" class="uploadbtn" />
                      </label>
                      <input id="file-input" type="file" />
                    </div>
                    <div className="image-upload">
                      <label for="file-input">
                        <FontAwesomeIcon icon="cloud-upload-alt" class="uploadbtn" />
                      </label>
                      <button id="file-input" type="submit" />
                    </div>
                  </form>
                </div>
              </animated.div>
            )
          ))}
          
        </div>
      </div>
      
      {webCamOpen &&(
        <animated.div 
        className={webCamOpen ? "webcam_wrapper open" : "webcam_wrapper close"}
        style={webCamFade}
        >
          <WebcamComponent webCamOpen={webCamOpen} setWebCamOpen={setWebCamOpen} />
        </animated.div>
      )}


      <div className="userinfo_outerwrapper">
        <div className="userinfo_innerwrapper">
          <div className="defaultinfo_wrap">
            <p className="profile_info-top">{viewId.firstName + ' ' + viewId.lastName}</p>
            <p><b>Department: </b>{viewId.department}</p>
            <p><b>Role: </b>{viewId.role}</p>
          </div>
          <div className="aboutme_outerwrapper">
            {showAboutMe && (
              <animated.div className="aboutme_textareawrap">
                <textarea />
              </animated.div>
            )}
            {!showAboutMe && (
              <div className="aboutme_innerwrapper">

              </div>
            )}
            
            </div>
          </div>
        </div>
      {/* )} */}
    </animated.div>
  );
}