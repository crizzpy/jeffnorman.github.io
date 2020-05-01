import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import axios from 'axios'
import { GlobalContext } from '../App'
import { EditProfileIcon } from './EditProfileIcon'
import { EditProfileBtns } from './EditProfileBtns'
import { TakePhoto } from './TakePhoto'
import { AddPhoto } from './AddPhoto'
import { UserImgEdit } from './UserImgEdit'
import { PreviewCard } from './PreviewCard'

export const ProfileImg = ({ addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen, viewId, setViewId, editProfileSettingsOpen, setEditProfileSettingsOpen, profileLink, setRenderUserProfile}) => {
  
  const { userId, setUserId, 
          uniqueId, setUniqueId,
          setXCoordinate, setYCoordinate,
          setPreviewCardLabel, setPreviewCardOpen } = useContext(GlobalContext)

  const [editProfileOpen, setEditProfileOpen] = useState(false)
  const [editProfileImgOpen, setEditProfileImgOpen] = useState(false)

    
  const transition = useTransition(editProfileOpen, null, {
    from: { opacity: 0, height: "0px", width: "45px", padding: "5px 25px 25px 5px", color: "black" },
    enter: { opacity: 1, height: "300px", width: "45px", padding: "5px 5px 5px 5px", color: "white" },
    leave: { opacity: 0, height: "0px", width: "45px", padding: "5px 25px 25px 5px", color: "black" },
  })

  const transition1 = useTransition(editProfileImgOpen, null, {
      from: { opacity: 0, height: "40px", width: "0px", padding: "5px 25px 25px 5px", color: "black" },
      enter: { opacity: 1, height: "40px", width: "50px", padding: "5px 5px 5px 5px", color: "white" },
      leave: { opacity: 0, height: "40px", width: "0px", padding: "5px 25px 25px 5px", color: "black" },
  })
  const transition2 = useTransition(takePhotoOpen, null, {
      from: { opacity: 0, height: "0px", width: "30px", padding: "5px 25px 25px 5px", color: "#4219f8", background: "#4219f8", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" },
      enter: { opacity: 1, height: "80px", width: "30px", padding: "5px 5px 5px 5px", color: "white", background: "black", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" },
      leave: { opacity: 0, height: "0px", width: "30px", padding: "5px 25px 25px 5px", color: "#4219f8", background: "#4219f8", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" },
  })
  const transition3 = useTransition(addPhotoOpen, null, {
    from: { opacity: 0, height: "0px", width: "30px", padding: "5px 25px 25px 5px", color: "#4219f8", background: "#4219f8", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" },
    enter: { opacity: 1, height: "80px", width: "30px", padding: "5px 5px 5px 5px", color: "white", background: "black", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" },
    leave: { opacity: 0, height: "0px", width: "30px", padding: "5px 25px 25px 5px", color: "#4219f8", background: "#4219f8", borderRadius: "20px", border: "white solid 2px", marginTop: "5px", overflow: "hidden" }
  })
  

    // const webCamFade = useSpring({
    //     opacity: webCamOpen ? 1 : 0,
    //     visibility: webCamOpen ? 'visible' : 'hidden'
    // })

    return(
      <React.Fragment>
        <div className="side_wrapper">
          {/* <PreviewCard /> */}
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
            {userId.id == uniqueId && (
              <EditProfileIcon
                editProfileOpen={editProfileOpen}
                setEditProfileOpen={setEditProfileOpen}
                addPhotoOpen={addPhotoOpen}
                setAddPhotoOpen={setAddPhotoOpen}
                takePhotoOpen={takePhotoOpen}
                setTakePhotoOpen={setTakePhotoOpen}
                editProfileImgOpen={editProfileImgOpen}
                setEditProfileImgOpen={setEditProfileImgOpen}
              />
            )}
          </div>
          <div className="edit-profile-btns">
            {transition.map(({ item, props, key }) => (
              item && (
                <animated.div style={props} className="editprofile_btns">
                  <EditProfileBtns 
                    editProfileOpen={editProfileOpen}
                    addPhotoOpen={addPhotoOpen}
                    setAddPhotoOpen={setAddPhotoOpen}
                    takePhotoOpen={takePhotoOpen}
                    setTakePhotoOpen={setTakePhotoOpen}
                    editProfileImgOpen={editProfileImgOpen}
                    setEditProfileImgOpen={setEditProfileImgOpen}
                    editProfileSettingsOpen={editProfileSettingsOpen}
                    setEditProfileSettingsOpen={setEditProfileSettingsOpen}
                    profileLink={profileLink}
                    setRenderUserProfile={setRenderUserProfile}
                  />
                </animated.div>
              )
            ))}
            <div className="expanded-btns">
              <div className="expanded-btns-inner">
                {transition1.map(({ item, props, key }) => (
                  item && (
                    <animated.div style={props} className="button-expanded" id="top-btn-exp"
                      // onMouseEnter={() => {
                      //   setPreviewCardOpen(true)
                      // }}
                      // onMouseLeave={() => {
                      //   setPreviewCardOpen(false)
                      // }}
                    >
                      <UserImgEdit 
                        takePhotoOpen={takePhotoOpen}
                        setTakePhotoOpen={setTakePhotoOpen}
                        addPhotoOpen={addPhotoOpen}
                        setAddPhotoOpen={setAddPhotoOpen}
                      />
                    </animated.div>
                  )
                ))}
                <div className="slideouts_wrapper">
                  <div className="slideout">
                    {transition2.map(({ item, props, key }) => (
                      item && (
                        <animated.div style={props} id="slideout">
                          <TakePhoto
                            viewId={viewId}
                            setWebCamOpen={setWebCamOpen}
                            setUploadedFile={setUploadedFile}
                          />
                        </animated.div>
                      )
                    ))}
                  </div>
                  <div className="slideout">
                    {transition3.map(({ item, props, key }) => (
                      item && (
                        <animated.div style={props} id="slideout">
                          <AddPhoto
                            viewId={viewId}
                            setUploadedFile={setUploadedFile}
                          />
                        </animated.div>
                      )
                    ))}
                  </div>
                </div>
              </div>

              <div className="expanded-btns-inner">
                
              </div>
              <div className="expanded-btns-inner">

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
          // {/* <div
          //   className={takePhotoOpen ? "takepic_btn open" : "takepic_btn"}
          //   onClick={e => {
          //     e.preventDefault();
          //     setAddPhotoOpen(false);
          //     setTakePhotoOpen(!takePhotoOpen);
          // }}>
          //   <div className="profilebtn_innerwrap">
          //     <FontAwesomeIcon icon="camera" class="profileicon" />
          //   </div>
          // </div>
          // <div
          //   className={addPhotoOpen ? "choosepic_btn open" : "choosepic_btn"}
          //   onClick={e => {
          //     e.preventDefault();
          //     setTakePhotoOpen(false);
          //     setAddPhotoOpen(!addPhotoOpen);
          // }}>
          //   <div className="profilebtn_innerwrap">
          //     <FontAwesomeIcon icon="images" class="profileicon" />
          //   </div>
          // </div> */}
         
        // {/* <div className="slideouts_wrapper">
        //   
          
        //   {transition2.map(({item, props, key}) => (
        //     item && (
        //       <animated.div className="uploadwrap" style={props}>
        //         
        //       </animated.div>
        //     )
        //   ))}
        // {webCamOpen && (
        //     <animated.div
        //         className={webCamOpen ? "webcam_wrapper open" : "webcam_wrapper close"}
        //         style={webCamFade}
        //     >
        //         <WebcamComponent webCamOpen={webCamOpen} setWebCamOpen={setWebCamOpen} />
        //     </animated.div>
        // )}
        // </div> */}
      
    )
}