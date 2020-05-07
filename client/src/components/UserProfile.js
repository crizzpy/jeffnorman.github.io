
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
import { GlobalContext } from '../App'
import { ProfileImg } from './ProfileImg'
import {useParams} from 'react-router-dom'
import { UserInfo } from './UserInfo'
import { ProfileSettings } from './ProfileSettings'
import { ProfileView } from './ProfileView'
import { PreviewCard } from './PreviewCard'
import { WebcamComponent } from './WebCam'
import { Switch, Route, __RouterContext, useHistory } from 'react-router-dom'

export const UserProfile = ({ userInfoReady, setUserInfoReady, activeUser, setActiveUser, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen, setRenderUserProfile}) => {
  const { userId, setUserId,
          history, setHistory,
          uniqueId, setUniqueId,
          ready, setReady,
          lastView, setLastView, profileLink,
          cameFromProfile, setCameFromProfile } = useContext(GlobalContext)

  useEffect(() => {
    // setHistory('/profile')
    loadUser()
    setTimeout(() => {
      setRenderUserProfile(true)
    }, 1000)
    // console.log(cameFromProfile)
    // setLastView('profile')
  }, [])

  const [viewId, setViewId] = useState({})
  const [homeBtnOpen, setHomeBtnOpen] = useState(false)

  const webCamTransition = useTransition(webCamOpen, null, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  }) 
  // const settingsTransition = useTransition(editProfileSettingsOpen, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // }) 

  // const profileTransitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate(0, -100%)' },
  //   enter: { opacity: 1, transform: 'translate(0, 0)' },
  //   leave: { opacity: 0, transform: 'translate(0, 100%)', margin: "0 -100% 0 0" }
  // })


  const loadUser = () => {
    // setTimeout(() => {
    setTimeout(() => {
      if (userId.id !== uniqueId) {
        const user = {
          uniqueId
        }
        axios.post('/users/load', user)
          .then(res => {
            setViewId(res.data)
          })
          .catch(err => console.log(err))
      } else {
        setViewId(userId)
      }
      setUserInfoReady(true)
      setCameFromProfile(true)
    }, 400)
    // }, 400)
  }

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

 

  const [aboutText, setAboutText] = useState('')
  const [showAboutMe, setShowAboutMe] = useState(false)
  return (
    <React.Fragment>
      <animated.div className="profilepage_wrapper" style={fade}>
        <div style={{ height: "auto", position: "absolute", zIndex: 100 }}>
          <PreviewCard />
        </div>
        <ProfileImg
          takePhotoOpen={takePhotoOpen}
          setTakePhotoOpen={setTakePhotoOpen}
          addPhotoOpen={addPhotoOpen}
          setAddPhotoOpen={setAddPhotoOpen}
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
          webCamOpen={webCamOpen}
          setWebCamOpen={setWebCamOpen}
          viewId={viewId}
          setViewId={setViewId}
          profileLink={profileLink}
          setRenderUserProfile={setRenderUserProfile}
        />
        <ProfileView 
          userInfoReady={userInfoReady}
          viewId={viewId}
          setViewId={setViewId}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          profileLink={profileLink}
          homeBtnOpen={homeBtnOpen}
          setHomeBtnOpen={setHomeBtnOpen}
        />
      </animated.div >
      {webCamTransition.map(({ item, props, key }) => (
          item && (
            <animated.div className="profilepage_wrapper" style={props}>
              {/* <div className="webcamwrap-inner"> */}
              <WebcamComponent
                setWebCamOpen={setWebCamOpen}
              />
              {/* </div> */}
            </animated.div>
      )))}

      {/* {settingsTransition.map(({item, props, key}) => (
        item && (
          <animated.div className="profilepage_wrapper" style={props}>
            <ProfileSettings 
              setEditProfileSettingsOpen={setEditProfileSettingsOpen}
            />
          </animated.div>
        )
      ))} */}
    </React.Fragment>
  );
}