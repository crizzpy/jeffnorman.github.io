import React, {useState, useEffect, useCallback, useRef, createContext, useContext, useMemo} from "react";
import Webcam from "react-webcam";

// import express from 'express'
// import io from 'socket.io-client'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring} from 'react-spring/renderprops'
import delay from 'delay'
import uuid from 'uuid'
// import formidable from 'formidable'
// import './server/routes/users'
// import mongoose from 'mongoose'
// const express = require('express')
// const http = require('http')
// const DB = require('./config/keys').MongoURI
// const app = express();
// app.use('/?/users', require('./server/routes/users'))

// mongoose.connect(DB, {useNewUrlParser: true})
// .then(()=> console.log('connected to DB'))

library.add(fab, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane, faUserPlus, faCamera, faImages, faPlusCircle, faCloudUploadAlt)


// user credentials context state declaration

const UserContext = createContext(null)
const LoginContext = createContext(null)
const SignupContext = createContext(null);
const PostsContext = createContext(null);
const ActiveComponentContext = createContext(null)



const Welcome = () => {
  return(
    <div className="component_container">
      <h1>welcome</h1>
    </div>  
  )
}


// ooooooooooooo-oooooooooooo-------.o.-------ooo--------ooooo-----------ooooooooo.---------.o.---------.oooooo.----oooooooooooo-
// 8'---888---`8-`888'-----`8------.888.------`88.-------.888'-----------`888---`Y88.------.888.-------d8P'--`Y8b---`888'-----`8-
// -----888-------888-------------.8"888.------888b-----d'888-------------888---.d88'-----.8"888.-----888------------888---------
// -----888-------888oooo8-------.8'-`888.-----8-Y88.-.P--888-------------888ooo88P'-----.8'-`888.----888------------888oooo8----
// -----888-------888----"------.88ooo8888.----8--`888'---888-------------888-----------.88ooo8888.---888-----ooooo--888----"----
// -----888-------888-------o--.8'-----`888.---8----Y-----888-------------888----------.8'-----`888.--`88.----.88'---888-------o-
// ----o888o-----o888ooooood8-o88o-----o8888o-o8o--------o888o-----------o888o--------o88o-----o8888o--`Y8bood8P'---o888ooooood8-

const TeamPage = () => {
  useEffect(() => {
    retrieveUsers();
  }, []);

  const fadein = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const [usersLoaded, setUsersLoaded] = useState(false);

  const retrieveUsers = () => {
    axios
      .get("/messages/retrieve")
      .then(res => {
        console.log(res.data);
        // res.data.map(message => {
        //   messages.push(message);
        // });

        setUsersLoaded(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <animated.div className="messagespage_wrapper" style={fadein}>
      <div className="messages_innerwrapper">
        <div className="iconwrap">
          <div className="msgimgcircle">
            <div className="msgimage">
              <FontAwesomeIcon icon="user-friends" class="msgimage" />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

// ooo--------ooooo-oooooooooooo--.oooooo..o--.oooooo..o-------.o.---------.oooooo.----oooooooooooo--.oooooo..o-
// `88.-------.888'-`888'-----`8-d8P'----`Y8-d8P'----`Y8------.888.-------d8P'--`Y8b---`888'-----`8-d8P'----`Y8-
// -888b-----d'888---888---------Y88bo.------Y88bo.----------.8"888.-----888------------888---------Y88bo.------
// -8-Y88.-.P--888---888oooo8-----`"Y8888o.---`"Y8888o.-----.8'-`888.----888------------888oooo8-----`"Y8888o.--
// -8--`888'---888---888----"---------`"Y88b------`"Y88b---.88ooo8888.---888-----ooooo--888----"---------`"Y88b-
// -8----Y-----888---888-------o-oo-----.d8P-oo-----.d8P--.8'-----`888.--`88.----.88'---888-------o-oo-----.d8P-
// o8o--------o888o-o888ooooood8-8""88888P'--8""88888P'--o88o-----o8888o--`Y8bood8P'---o888ooooood8-8""88888P'--

const Messages = ({messages}) => {
  useEffect(() => {
    retrieveMessages();
  }, []);
  
  const fadein = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const slideIn = useTransition({
    from: {
      transform: "translateX(1200px)"
    },
    enter: {
      transform: "translateX(0px)"
    },
    leave: {
      transform: "translateX(-1200px)"
    }
  })

  const [messagesLoaded, setMessagesLoaded] = useState(false)

  const retrieveMessages = () => {
    axios
      .get("/messages/retrieve")
      .then(res => {
        console.log(res.data);
        res.data.map(message => {
          messages.push(message);
        });

        setMessagesLoaded(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="component_container">
      <animated.div className="messagespage_wrapper" style={fadein}>
        <div className="messages_innerwrapper">
          <div className="iconwrap">
            <div className="msgimgcircle">
              <div className="msgimage">
                <FontAwesomeIcon
                  icon="comment-alt"
                  class="msgimage"
                  id="chat"
                />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

// oooooooooo.--ooooo-----ooo-ooooo--------ooooo--------oooooooooooo-ooooooooooooo-ooooo-ooooo------ooo-----------oooooooooo.----.oooooo.---------.o.-------ooooooooo.---oooooooooo.---
// `888'---`Y8b-`888'-----`8'-`888'--------`888'--------`888'-----`8-8'---888---`8-`888'-`888b.-----`8'-----------`888'---`Y8b--d8P'--`Y8b-------.888.------`888---`Y88.-`888'---`Y8b--
// -888-----888--888-------8---888----------888----------888--------------888-------888---8-`88b.----8-------------888-----888-888------888-----.8"888.------888---.d88'--888------888-
// -888oooo888'--888-------8---888----------888----------888oooo8---------888-------888---8---`88b.--8-------------888oooo888'-888------888----.8'-`888.-----888ooo88P'---888------888-
// -888----`88b--888-------8---888----------888----------888----"---------888-------888---8-----`88b.8-------------888----`88b-888------888---.88ooo8888.----888`88b.-----888------888-
// -888----.88P--`88.----.8'---888-------o--888-------o--888-------o------888-------888---8-------`888-------------888----.88P-`88b----d88'--.8'-----`888.---888--`88b.---888-----d88'-
// o888bood8P'-----`YbodP'----o888ooooood8-o888ooooood8-o888ooooood8-----o888o-----o888o-o8o--------`8------------o888bood8P'---`Y8bood8P'--o88o-----o8888o-o888o--o888o-o888bood8P'---


const BulletinBoard = ({addPostOpen, setAddPostOpen, activeUser, setActiveUser, postsLoaded, setPostsLoaded}) => {
  const { userId, setUserId } = useContext(UserContext)
  const { posts, setPosts } = useContext(PostsContext)

  const fadein = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const slideIn = useTransition({
    from: {
      transform: "translateX(1200px)"
    },
    enter: {
      transform: "translateX(0px)"
    },
    leave: {
      transform: "translateX(-1200px)"
    }
  })
  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  

  

  const submitPost = () => {
    console.log('submit post')
    console.log(postContent)
    if (postContent) {
      // console.log(postContent);
      // console.log(postAdminsOnly);
      const data = {
        userId: userId._id,
        id: uuid.v4(),
        postAdminsOnly,
        content: postContent
      }
      axios.post('/posts/add', data)
      .then(res=> {
        console.log(res.data)
      })
      .catch(err => console.log(err))
      
      setPostContent("");
      setPostAdminsOnly(false);
      setAddPostOpen(false); 
    }
    else{
      return
    }
  }

  return (
    <div className="component_container">
      {slideIn.map(({item, props, key}) => {
        return(
          <animated.div style={props} key={key}>
            <div
              className="addPost"
              onClick={e => {
                e.preventDefault();
                setAddPostOpen(!addPostOpen);
              }}
            >
              <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
            </div>
            <div className="posts_window">
              <div className="posts_innerwrap">
                {postsLoaded && (
                  <ul>
                    {console.log(posts)}
                    {posts.map(post => {
                      return (
                        <li key={post.id}>
                          <div className="renderedpost_wrapper">
                            {post.content}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {!postsLoaded && <div className="test">Loading</div>}
              </div>
            </div>
            {addPostOpen && (
              <div className="postbuilder">
                <div className="postbuilder_innercontainer">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      submitPost();
                    }}
                  >
                    <div
                      contentEditable="true"
                      className="post_compose"
                      value={postContent}
                      onChange={e => setPostContent(e.target.value)}
                    />
                    <div className="postbuilder_bottomwrapper">
                      <div className="bottomicon_wrap">
                        <FontAwesomeIcon icon="bold" class="bottomicon" />
                      </div>
                      <div className="bottomicon_wrap">
                        <FontAwesomeIcon icon="italic" class="bottomicon" />
                      </div>
                      <div className="bottomicon_wrap" id="send">
                        <FontAwesomeIcon
                          icon="paper-plane"
                          class="bottomicon"
                          onClick={(e) => {
                            e.preventDefault()
                            submitPost()
                          }}
                        />
                      </div>

                      <div
                        className="bottomicon_wrap"
                        onClick={e => {
                          setPostAdminsOnly(!postAdminsOnly);
                        }}
                      >
                        <input
                          type="checkbox"
                          id="checkbox"
                          checked={postAdminsOnly ? true : false}
                          onChange={e => setPostAdminsOnly(!postAdminsOnly)}
                        />
                        <p>Admins only</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </animated.div>
        )
      })}
    </div>
  );
}



// ooooo----------.oooooo.---------.o.-------oooooooooo.---ooooo-ooooo------ooo---.oooooo.---------------.oooooo..o---.oooooo.---ooooooooo.---oooooooooooo-oooooooooooo-ooooo------ooo-
// `888'---------d8P'--`Y8b-------.888.------`888'---`Y8b--`888'-`888b.-----`8'--d8P'--`Y8b-------------d8P'----`Y8--d8P'--`Y8b--`888---`Y88.-`888'-----`8-`888'-----`8-`888b.-----`8'-
// -888---------888------888-----.8"888.------888------888--888---8-`88b.----8--888---------------------Y88bo.------888-----------888---.d88'--888----------888----------8-`88b.----8--
// -888---------888------888----.8'-`888.-----888------888--888---8---`88b.--8--888----------------------`"Y8888o.--888-----------888ooo88P'---888oooo8-----888oooo8-----8---`88b.--8--
// -888---------888------888---.88ooo8888.----888------888--888---8-----`88b.8--888-----ooooo----------------`"Y88b-888-----------888`88b.-----888----"-----888----"-----8-----`88b.8--
// -888-------o-`88b----d88'--.8'-----`888.---888-----d88'--888---8-------`888--`88.----.88'------------oo-----.d8P-`88b----ooo---888--`88b.---888-------o--888-------o--8-------`888--
// o888ooooood8--`Y8bood8P'--o88o-----o8888o-o888bood8P'---o888o-o8o--------`8---`Y8bood8P'-------------8""88888P'---`Y8bood8P'--o888o--o888o-o888ooooood8-o888ooooood8-o8o--------`8--

const LoadingScreen = ({pageReady, setPageReady}) => {
  document.addEventListener("DOMContentLoaded", event => {
    setTimeout(() => {
      setPageReady(true);
    }, 230);
    
  });
  return (
    <React.Fragment>
      <div
        className="page_wrapper"
        style={require("./style/loading-screen.css")}
      >
        <div className="spinner_wrap">
          <FontAwesomeIcon icon="spinner" className="spinner" />
        </div>
      </div>
    </React.Fragment>
  );
}


const AddUser = ({errors, setErrors, addUserOpen, setAddUserOpen}) => {


// ------.o.-------oooooooooo.---oooooooooo.-------------ooooo-----ooo--.oooooo..o-oooooooooooo-ooooooooo.---
// -----.888.------`888'---`Y8b--`888'---`Y8b------------`888'-----`8'-d8P'----`Y8-`888'-----`8-`888---`Y88.-
// ----.8"888.------888------888--888------888------------888-------8--Y88bo.-------888----------888---.d88'-
// ---.8'-`888.-----888------888--888------888------------888-------8---`"Y8888o.---888oooo8-----888ooo88P'--
// --.88ooo8888.----888------888--888------888------------888-------8-------`"Y88b--888----"-----888`88b.----
// -.8'-----`888.---888-----d88'--888-----d88'------------`88.----.8'--oo-----.d8P--888-------o--888--`88b.--
// o88o-----o8888o-o888bood8P'---o888bood8P'----------------`YbodP'----8""88888P'--o888ooooood8-o888o--o888o-

  const addUser =  (e,data) => {
    e.preventDefault()
    const {firstName, lastName, password1, password2, isAdmin} = data
    console.log(data)
    console.log(firstName, lastName, password1, password2, isAdmin)
    if (firstName === "" || lastName === "" || password1 === "" || password2 === ""){
      data.map(({field, value}) => {
        console.log('mapping')
        if (field.value === "") {
          console.log(field, ': error found')
          let error = {
            field: 'unfilled'
          }
          console.log(error)
          errors.push(error)
          console.log(errors)
        }
      })
    }
    // else {
    //   if(password1 !== password2) {
    //     let error = {
    //       'password': 'noMatch'
    //     }
    //     setErrors([...errors, error])
    //     return(errors)
    //   }
    //   else {
    //     return true
    //   }
    // }
    if (errors) {
      alert(`Please review the following errors: ${errors}`)
      console.log(errors)
      setErrors([])
      return
    }
    else{
      setFirstName('')
      setLastName('')
      setPassword1('')
      setPassword2('')
      setIsAdmin(false)
      return(
        alert('No errors')
      )
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  if (!addUserOpen) {
    return (
      <div className="addUser_wrapper">
        <div
          className="addUser"
          onClick={e => {
            e.preventDefault();
            setAddUserOpen(!addUserOpen);
          }}
        >
          <div className="addUserAltWrap">
            <div className="addUserAlt">
              <p>Add User</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
        
        <div className="addUser_wrapper">
          <div
            className="addUser"
            onClick={e => {
              e.preventDefault();
              setAddUserOpen(!addUserOpen);
            }}
          >
          </div>
        </div>

        <div className="component_window">
          <div className="outer_wrapper">
            <form noValidate onSubmit={e => {
              e.preventDefault()
              addUser([{firstName, lastName, password1, password2, isAdmin}])
            }} className="addUserForm">
              <p>Please fill out the new user's information below:</p>
              <br></br>
              <br></br>
              <input
                id="firstName"
                type="text"
                value={firstName}
                placeHolder="First Name"
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                id="lastName"
                type="text"
                value={lastName}
                placeHolder="Last Name"
                onChange={e => setLastName(e.target.value)}
              />
              <input
                id="password1"
                type="password"
                value={password1}
                placeHolder="Enter Password"
                onChange={e => setPassword1(e.target.value)}
              />
              <input
                id="password2"
                type="password"
                value={password2}
                placeHolder="Confirm Password"
                onChange={e => setPassword2(e.target.value)}
              />
              <label><b>Admin access:</b></label>
              <input type="checkbox" onChange={e => setIsAdmin(!isAdmin)}/>
              <button type="submit" value="Submit">Add New User</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

// oooooo---oooooo-----oooo-oooooooooooo-oooooooooo.--------------.oooooo.---------.o.-------ooo--------ooooo-
// -`888.----`888.-----.8'--`888'-----`8-`888'---`Y8b------------d8P'--`Y8b-------.888.------`88.-------.888'-
// --`888.---.8888.---.8'----888----------888-----888-----------888--------------.8"888.------888b-----d'888--
// ---`888--.8'`888.-.8'-----888oooo8-----888oooo888'-----------888-------------.8'-`888.-----8-Y88.-.P--888--
// ----`888.8'--`888.8'------888----"-----888----`88b-----------888------------.88ooo8888.----8--`888'---888--
// -----`888'----`888'-------888-------o--888----.88P-----------`88b----ooo---.8'-----`888.---8----Y-----888--
// ------`8'------`8'-------o888ooooood8-o888bood8P'-------------`Y8bood8P'--o88o-----o8888o-o8o--------o888o-
  

const WebcamComponent = () => {
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
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};



// ooooo-----ooo--.oooooo..o-oooooooooooo-ooooooooo.-------------ooooooooo.---ooooooooo.-----.oooooo.---oooooooooooo-ooooo-ooooo--------oooooooooooo-
// `888'-----`8'-d8P'----`Y8-`888'-----`8-`888---`Y88.-----------`888---`Y88.-`888---`Y88.--d8P'--`Y8b--`888'-----`8-`888'-`888'--------`888'-----`8-
// -888-------8--Y88bo.-------888----------888---.d88'------------888---.d88'--888---.d88'-888------888--888----------888---888----------888---------
// -888-------8---`"Y8888o.---888oooo8-----888ooo88P'-------------888ooo88P'---888ooo88P'--888------888--888oooo8-----888---888----------888oooo8----
// -888-------8-------`"Y88b--888----"-----888`88b.---------------888----------888`88b.----888------888--888----"-----888---888----------888----"----
// -`88.----.8'--oo-----.d8P--888-------o--888--`88b.-------------888----------888--`88b.--`88b----d88'--888----------888---888-------o--888-------o-
// ---`YbodP'----8""88888P'--o888ooooood8-o888o--o888o-----------o888o--------o888o--o888o--`Y8bood8P'--o888o--------o888o-o888ooooood8-o888ooooood8-



const UserProfile = ({activeUser, setActiveUser, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen}) => {

  const {userId, setUserId} = useContext(UserContext)
  
  
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

  const uploadHandler = e => {
    // console.log(uploadedFile.name);
    // console.log(uploadedFile);
    const myForm = document.getElementsByName("addPhoto")[0].files
    // console.log(myForm[0].files)
    console.log(myForm)
    // const fd = new FormData(myForm.files.File)
    // uploadedFile.map(file => {
    //   console.log(file)
    // })
    const fd = new FormData()
    fd.append('files', myForm) 
    // fd.set() 
    // fd.append('files', uploadedFile.values);
    // fd.append('test', 'test')
    axios.post('/users/upload', fd)
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
                <img src={require("./images/img.jpg")} className="image" />
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
            }}
          >
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
            }}
          >
            <div className="profilebtn_innerwrap">
              <FontAwesomeIcon icon="images" class="profileicon" />
            </div>
          </div>
        </div>
        <div className="slideouts_wrapper">
          <animated.div
            className={addPhotoOpen ? "uploadwrap fadein" : "uploadwrap fadeout"}
            id="shift"
            style={addPhotoFade}
          >
            <div className="addphoto-wrap">
              <form>
                <div className={addPhotoOpen ? "image-upload open" : "image-upload"}>
                  <label for="file-input">
                    <FontAwesomeIcon icon="plus-circle" class={addPhotoOpen ? "uploadbtn open" : "uploadbtn"} />
                  </label>
                  <input id="file-input" name="addPhoto" type="file" onChange={e => setUploadedFile(e.target.files[0])} />
                </div>
                <div className={addPhotoOpen ? "image-upload open" : "image-upload"} onClick={e => {
                  e.preventDefault()
                  uploadHandler()
                }}>
                  <label for="file-input">
                    <FontAwesomeIcon icon="cloud-upload-alt" class={addPhotoOpen ? "uploadbtn open" : "uploadbtn"} />
                  </label>
                  <button id="file-input" type="submit" name="test" value="Submit" />
                </div>
              </form>
            </div>
          </animated.div>
          {/* )} */}
          {/* {takePhotoOpen && ( */}
          <animated.div
            className={takePhotoOpen ? "uploadwrap fadein" : "uploadwrap fadeout"}
            style={takePhotoFade}
          >
            <div className="addphoto-wrap">
              <form onSubmit={uploadHandler}>
                <div className={takePhotoOpen ? "image-upload open" : "image-upload"} onClick={e => {
                  e.preventDefault()
                  setWebCamOpen(true);
                }}>
                  <label for="file-input">
                    <FontAwesomeIcon icon="plus-circle" class={takePhotoOpen ? "uploadbtn open" : "uploadbtn"} />
                  </label>
                  <input id="file-input" type="file" />
                </div>
                <div className={takePhotoOpen ? "image-upload open" : "image-upload"}>
                  <label for="file-input">
                    <FontAwesomeIcon icon="cloud-upload-alt" class={takePhotoOpen ? "uploadbtn open" : "uploadbtn"} />
                  </label>
                  <button id="file-input" type="submit" />
                </div>
              </form>
            </div>
          </animated.div>
        </div>
      </div>
      {/* {addPhotoOpen && ( */}
      
      
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
            <p>{userId.firstName + ' ' + userId.lastName}</p>
            <p>{userId.department}</p>
            <p>{userId.role}</p>
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


// ooooo------ooo-------.o.-------oooooo-----oooo-----------oooooooooo.--------.o.-------ooooooooo.---
// `888b.-----`8'------.888.-------`888.-----.8'------------`888'---`Y8b------.888.------`888---`Y88.-
// -8-`88b.----8------.8"888.-------`888.---.8'--------------888-----888-----.8"888.------888---.d88'-
// -8---`88b.--8-----.8'-`888.-------`888.-.8'---------------888oooo888'----.8'-`888.-----888ooo88P'--
// -8-----`88b.8----.88ooo8888.-------`888.8'----------------888----`88b---.88ooo8888.----888`88b.----
// -8-------`888---.8'-----`888.-------`888'-----------------888----.88P--.8'-----`888.---888--`88b.--
// o8o--------`8--o88o-----o8888o-------`8'-----------------o888bood8P'--o88o-----o8888o-o888o--o888o-




const NavBar = ({ navCollapse, setNavCollapse, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, activeUser, setActiveUser }) => {
  // useEffect(() => {
  //   axios.get('/users/login')
  //   .then(res => {
  //     res.data.map(user => {
  //       console.log(user)
  //       //capture user profile preview info
        
  //     })
  //   })
  // })

  // const spin = useSpring({
  //   transform: navCollapse ? 'rotateZ(0deg)'  : 'rotateZ(90deg)'
  // })

  const {activeComponent, setActiveComponent} = useContext(ActiveComponentContext)
  
  const { rotateZ } = useSpring({
    rotateZ: navCollapse ? 0 : 90,
    config: {
      duration: 200
    }
  });

  // const transitions = useTransition(location, location => location.pathname => {
  //   from: {opacity: 0, transform: "translate(100%, 0)"}
  //   enter: {opacity: 1, transform: "translate(0, 0)"}
  //   leave: {opacity: 0, transform: "translate(-50%, 0)"}
  // })

  // {transitions.map(({item, props, key}) => {
  //   <animated.div key = key style={props}>
  //     [pages list i.e. "<Dashboard> <UserProfile>" etc]
  //   </animated.div>
  // })}

// *** might need to make a custom CSS wrapper class to make individual components position -> absolute
// to avoid having components load in and push eachother while on the same page as they transition

  return (
    <div className={navCollapse ? "nav_wrapper shrink" : "nav_wrapper"}>
      <div className="sidebar_top">
        <animated.div
          className={navCollapse ? "hamburger shrink" : "hamburger"}
          // className="hamburger"
          onClick={e => {
            e.preventDefault();
            setNavCollapse(!navCollapse);
          }}
          style={{ 
            transform: rotateZ.interpolate(z => `rotateZ(${z}deg)`),
          }}
        >
          <FontAwesomeIcon
            icon="bars"
            className={navCollapse ? "rotate90" : "rotatefrom90"}
          />
        </animated.div>
      </div>
      <div
        className={
          navCollapse ? "buttons_outerwrapper shrink" : "buttons_outerwrapper"
        }
      >
        <div
          className={navCollapse ? "wrapper_window shrink" : "wrapper_window"}
        >
          <div
            className={
              navCollapse ? "sidebar_topline one shrink" : "sidebar_topline one"
            }
          ></div>
          <div
            className={
              navCollapse ? "buttons_wrapper fadeout" : "buttons_wrapper fadein"
            }
          >
            <div className={navCollapse ? "buttons fadeout" : "buttons fadein"}>
              <FontAwesomeIcon
                icon="user"
                class={navCollapse ? "button shrink" : "button"}
                onClick={e => {
                  e.preventDefault();
                  setRenderBulletinBoard(false);
                  setRenderUserProfile(true);
                  setRenderMessages(false);
                  setRenderTeamPage(false);
                  setActiveComponent("profile");
                }}
              />
              <FontAwesomeIcon
                icon="check-square"
                class={navCollapse ? "button shrink" : "button"}
              />
              <FontAwesomeIcon
                icon="envelope-square"
                class={navCollapse ? "button shrink" : "button"}
              />
            </div>
          </div>
          <div
            className={
              navCollapse ? "sidebar_topline two shrink" : "sidebar_topline two"
            }
          ></div>
        </div>
      </div>

      <div
        className={
          navCollapse ? "profilepreview_wrap shrink" : "profilepreview_wrap"
        }
      >
        {!renderUserProfile && (
          <div
            className={
              navCollapse ? "profileImgInset shrink" : "profileImgInset"
            }
          >
            <div
              className={navCollapse ? "profileImgLrg shrink" : "profileImgLrg"}
            >
              <img
                src={require("./images/img.jpg")}
                className={navCollapse ? "imageLrg shrink" : "imageLrg"}
                onClick={e => {
                  e.preventDefault();
                  setRenderBulletinBoard(false);
                  setRenderUserProfile(true);
                  setRenderMessages(false);
                  setRenderTeamPage(false);
                  setActiveComponent("profile");
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={
          navCollapse
            ? "profilepreview_infowrap shrink"
            : "profilepreview_infowrap"
        }
      >
        <img
          src={require("./svg/logo192.png")}
          className={renderUserProfile ? "spin center" : "spin"}
        />
      </div>
      <div className={navCollapse ? "sidebar_body shrink" : "sidebar_body"}>
        <div
          className={
            navCollapse ? "sidenav_container shrink" : "sidenav_container"
          }
        >
          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon
                  icon="clipboard"
                  class="sidenav_buttonicon"
                  onClick={e => {
                    e.preventDefault();
                    setRenderUserProfile(false);
                    setRenderBulletinBoard(true);
                    setRenderMessages(false);
                    setRenderTeamPage(false);
                    setActiveComponent("dashboard");
                  }}
                />
              </div>
              <div className="component_preview"></div>
            </div>
          </div>

          {/* <img src={require('./svg/clipboard-regular.svg')} className="sidenav_buttonicon" /> */}

          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon
                  icon="comment-alt"
                  class="sidenav_buttonicon"
                  id="chat"
                  onClick={e => {
                    e.preventDefault();
                    setRenderUserProfile(false);
                    setRenderBulletinBoard(false);
                    setRenderMessages(true);
                    setRenderTeamPage(false);
                    setActiveComponent("messages");
                  }}
                />
              </div>
              <div className="component_preview"></div>
            </div>
          </div>

          <div
            className={
              navCollapse
                ? "component_previewwrap shrink"
                : "component_previewwrap"
            }
          >
            <div className="componentpreview_buttonbuffer"></div>
            <div className="sidenav_buttoncontainer">
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon
                  icon="user-friends"
                  class="sidenav_buttonicon"
                  onClick={e => {
                    e.preventDefault();
                    setRenderBulletinBoard(false);
                    setRenderUserProfile(false);
                    setRenderMessages(false);
                    setRenderTeamPage(true);
                    setActiveComponent("team");
                  }}
                />
              </div>
              <div className="component_preview"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// oooooooooo.---------.o.--------.oooooo..o-ooooo---ooooo-oooooooooo.----.oooooo.---------.o.-------ooooooooo.---oooooooooo.---
// `888'---`Y8b-------.888.------d8P'----`Y8-`888'---`888'-`888'---`Y8b--d8P'--`Y8b-------.888.------`888---`Y88.-`888'---`Y8b--
// -888------888-----.8"888.-----Y88bo.-------888-----888---888-----888-888------888-----.8"888.------888---.d88'--888------888-
// -888------888----.8'-`888.-----`"Y8888o.---888ooooo888---888oooo888'-888------888----.8'-`888.-----888ooo88P'---888------888-
// -888------888---.88ooo8888.--------`"Y88b--888-----888---888----`88b-888------888---.88ooo8888.----888`88b.-----888------888-
// -888-----d88'--.8'-----`888.--oo-----.d8P--888-----888---888----.88P-`88b----d88'--.8'-----`888.---888--`88b.---888-----d88'-
// o888bood8P'---o88o-----o8888o-8""88888P'--o888o---o888o-o888bood8P'---`Y8bood8P'--o88o-----o8888o-o888o--o888o-o888bood8P'---



const Dashboard = ({loggedIn, setLoggedIn, navCollapse, setNavCollapse, pageReady, setPageReady, addUserOpen, setAddUserOpen, errors, setErrors, addPostOpen, setAddPostOpen, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen, userProfileRendered, setUserProfileRendered, bulletinBoardRendered, setBulletinBoardRendered, teamPageRendered, setTeamPageRendered, messagesPageRendered, setMessagesPageRendered, postsLoaded, setPostsLoaded, renderWelcome, setRenderWelcome}) => {
  useEffect(() => {
    retrievePosts()
  }, [])

  const { activeComponent, setActiveComponent } = useContext(ActiveComponentContext)

  const {posts, setPosts} = useContext(PostsContext)
  const retrievePosts = () => {
    axios
      .get("/posts/retrieve")
      .then(res => {
        console.log(res.data)
        res.data.map(post => {
          console.log(post)
          // setPosts([...posts, post]);
          posts.push(post)
          
        });
        console.log(posts, 'hello')
        setPostsLoaded(true);
      })
      .catch(err => console.log(err));
  }

  const{userId, setUserId} = useContext(UserContext)

  const handleLogout = () => {
    setUserId(null)
    setLoggedIn(false)
    // window.location.reload();
  }

  if(!userId) {
    setUserId({
         hasAdmin: true,
        isAdmin: true,
        date: "2020 - 02 - 25T00: 08: 31.591Z",
        _id: "5e4188831c9d4400000ba31e",
        username: 'chrispy',
        firstName: 'Jeff',
        lastName: 'Norman',
        password: 'hallybird101',
        email: 'jeff_norman@live.com',
        department: 'A',
        role: 'Analyst'           
    })
  }
  
  return (
    <div
      style={require("./style/dashboard.css")}
      className={navCollapse ? "main_container shrink" : "main_container"}
    >
      <div className="addUserBtn">
        <FontAwesomeIcon
          icon="plus"
          className="plus_icon"
          onClick={e => {
            e.preventDefault();
            setAddUserOpen(!addUserOpen);
          }}
        />
        <AddUser
          addUserOpen={addUserOpen}
          setAddUserOpen={setAddUserOpen}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <NavBar
        navCollapse={navCollapse}
        setNavCollapse={setNavCollapse}
        renderBulletinBoard={renderBulletinBoard}
        setRenderBulletinBoard={setRenderBulletinBoard}
        renderUserProfile={renderUserProfile}
        setRenderUserProfile={setRenderUserProfile}
        renderMessages={renderMessages}
        setRenderMessages={setRenderMessages}
        renderTeamPage={renderTeamPage}
        setRenderTeamPage={setRenderTeamPage}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <div
        className={navCollapse ? "container_window shrink" : "container_window"}
      >
        <h1>{activeComponent}</h1>
      </div>
      <div
        className={
          navCollapse ? "content_container shrink" : "content_container"
        }
      >
        {/* <div className="active_comp"><UserProfile /></div> */}
        {renderWelcome && (
          <Welcome />
        )}
        {renderBulletinBoard && (
          <BulletinBoard
            addPostOpen={addPostOpen}
            setAddPostOpen={setAddPostOpen}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            userProfileRendered={userProfileRendered}
            setUserProfileRendered={setUserProfileRendered}
            bulletinBoardRendered={bulletinBoardRendered}
            setBulletinBoardRendered={setBulletinBoardRendered}
            teamPageRendered={teamPageRendered}
            setTeamPageRendered={setTeamPageRendered}
            messagesPageRendered={messagesPageRendered}
            setMessagesPageRendered={setMessagesPageRendered}
            postsLoaded={postsLoaded}
            setPostsLoaded={setPostsLoaded}
            // setPosts={setPosts}
          />
        )}
        {renderUserProfile && (
          <UserProfile
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            addPhotoOpen={addPhotoOpen}
            setAddPhotoOpen={setAddPhotoOpen}
            takePhotoOpen={takePhotoOpen}
            setTakePhotoOpen={setTakePhotoOpen}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            webCamOpen={webCamOpen}
            setWebCamOpen={setWebCamOpen}
            userProfileRendered={userProfileRendered}
            setUserProfileRendered={setUserProfileRendered}
            bulletinBoardRendered={bulletinBoardRendered}
            setBulletinBoardRendered={setBulletinBoardRendered}
            teamPageRendered={teamPageRendered}
            setTeamPageRendered={setTeamPageRendered}
            messagesPageRendered={messagesPageRendered}
            setMessagesPageRendered={setMessagesPageRendered}
          />
        )}
        {renderMessages && (
          <Messages 
            activeUser={activeUser} 
            setActiveUser={setActiveUser}
            userProfileRendered={userProfileRendered}
            setUserProfileRendered={setUserProfileRendered}
            bulletinBoardRendered={bulletinBoardRendered}
            setBulletinBoardRendered={setBulletinBoardRendered}
            teamPageRendered={teamPageRendered}
            setTeamPageRendered={setTeamPageRendered}
            messagesPageRendered={messagesPageRendered}
            setMessagesPageRendered={setMessagesPageRendered} 
          />
        )}
        {renderTeamPage && (
          <TeamPage 
            activeUser={activeUser} 
            setActiveUser={setActiveUser}
            userProfileRendered={userProfileRendered}
            setUserProfileRendered={setUserProfileRendered}
            bulletinBoardRendered={bulletinBoardRendered}
            setBulletinBoardRendered={setBulletinBoardRendered}
            teamPageRendered={teamPageRendered}
            setTeamPageRendered={setTeamPageRendered}
            messagesPageRendered={messagesPageRendered}
            setMessagesPageRendered={setMessagesPageRendered}
          />
        )}
      </div>
    </div>
  );  
}

const Testing = () =>{
  return(
    <>
    <div className="login_container" style={require('./style/testing.css')}>
      <div className="background">
        <img src={require("./images/marble-background.jpg")}  />
      </div>
      <div className="form_container">
        <div className="form_innercontainer">
          <div className="input_wrapper">
            <input placeholder="Username" />
          </div>
          <div className="input_wrapper">
            <input placeholder="Password" type="password" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const LoginForm = ({loggedIn, setLoggedIn}) => {

  const { userId, setUserId } = useContext(UserContext);
  const { showSignup, setShowSignup } = useContext(SignupContext)
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    passwordTwo,
    setPasswordTwo
  } = useContext(LoginContext);
  const handleGet = async (e) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    const response = await tryLogin(user)
    setUserId(response)
    // console.log(userId)
    // .catch(err => console.log(`Error encountered: ${err}`))

  }
  const tryLogin = async user => {
    return await axios.post('/users/login', user)
      .then(res => {
        // setActiveUser(res.data._id);
        setLoggedIn(true)
        return res.data
      })
      .catch(err => console.log(err))
  }
  const handlePost = e => {
    e.preventDefault();
    const user = {
      username,
      password,
      passwordTwo,
      email
    };

    axios.post("/users/add", user)
      .then(console.log('posted'))
      .catch(err => console.log(`Please see the following error: ${err}`));

    // setUsername('')
    // setPassword('')
    // setPasswordTwo('')
    // setEmail('')
  }
  return(
    <div className="form_container">
      {!showSignup && (
        <div className="form_innercontainer" id="login">
          <form onSubmit={handleGet}>
            <div className="input_wrapper">
              <input
                placeholder="Username or Email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="button_wrapper" onClick={handleGet}>
              <button type="submit" value="Submit" id="button">
                Log In
                </button>
            </div>
            <button
              className="router_wrapper"
              onClick={e => {
                e.preventDefault();
                setShowSignup(true);
              }}
            >
              Don't have an account? >> Sign Up
              </button>
          </form>
        </div>
      )}

      {showSignup && (
        
        <div className="form_innercontainer">
          <form onSubmit={handlePost}>
            <div className="input_wrapper">
              <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <input
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <input
                placeholder="Confirm Password"
                type="password"
                value={passwordTwo}
                onChange={e => setPasswordTwo(e.target.value)}
              />
            </div>
            <div className="button_wrapper" onClick={handlePost}>
              <button type="submit" value="Submit" id="button">
                Sign Up
                </button>
            </div>
            <button
              className="router_wrapper"
              onClick={e => {
                e.preventDefault();
                setShowSignup(false);
            }}>
              Have an exisiting account? >> Log In
            </button>
          </form>
        </div>
      )}
    </div>
  )
}


// ooooo----------.oooooo.-----.oooooo.----ooooo-ooooo------ooo-----------ooooooooo.---------.o.---------.oooooo.----oooooooooooo-
// `888'---------d8P'--`Y8b---d8P'--`Y8b---`888'-`888b.-----`8'-----------`888---`Y88.------.888.-------d8P'--`Y8b---`888'-----`8-
// -888---------888------888-888------------888---8-`88b.----8-------------888---.d88'-----.8"888.-----888------------888---------
// -888---------888------888-888------------888---8---`88b.--8-------------888ooo88P'-----.8'-`888.----888------------888oooo8----
// -888---------888------888-888-----ooooo--888---8-----`88b.8-------------888-----------.88ooo8888.---888-----ooooo--888----"----
// -888-------o-`88b----d88'-`88.----.88'---888---8-------`888-------------888----------.8'-----`888.--`88.----.88'---888-------o-
// o888ooooood8--`Y8bood8P'---`Y8bood8P'---o888o-o8o--------`8------------o888o--------o88o-----o8888o--`Y8bood8P'---o888ooooood8-


const LoginPage = ({ showSignup, setShowSignup, loggedIn, setLoggedIn, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, errors, setErrors }) => {
  
  // const breeze = useSpring({
  //   from: { transform: "translate3d(0,0,0)" },
  //   to: { transform: "translate3d(5px,0,0)"},
  //   reset: true
  // })

  // const {xy} = useSpring({
  //   config: {
  //     mass: 1,
  //     tension: 80,
  //     friction: 7,
  //     clamp: false
  //   },
  //   from: { xy: [0, 0] },
  //   to: { xy: [800, 800] },

  //   delay: 2000,
  //   onRest: () => {
  //     console.log('done')
  //   }
  // })

  // const Script = Keyframes.Spring(async next =>
  // while (true)
  //   await next({ opacity: 1, from: { opacity: 0 }, reset: true })
  // )


  const Script1 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)"}, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)"}, reset: true });
    }

  })
  const Script2 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script3 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(800)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script4 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script5 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(2200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script6 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(400)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script7 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(800)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script8 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1600)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script9 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script10 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(900)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script11 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1300)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script12 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1100)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script13 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(900)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script14 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script15 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script16 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1700)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script17 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(1400)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script18 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script19 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(700)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script20 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(350)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script21 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(200)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })
  const Script22 = Keyframes.Spring(async next => {
    while (true) {
      // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
      // await next({ opacity: 0, from: { opacity: 1 }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true })
      await delay(500)
      await next({ transform: "translateX(-83px) translateY(35px)", from: { transform: "translateX(-78px) translateY(35px)" }, reset: true });
      await next({ transform: "translateX(-78px) translateY(35px)", from: { transform: "translateX(-83px) translateY(35px)" }, reset: true });
    }

  })

  const CloudScript1 = Keyframes.Spring(async next => {
    while(true) {
      await next({transform: "translateX(1200px)", from: {transform: "translateX(0px)"}, reset: true})
      await next({transform: "translateX(0px)", from: {transform: "translateX(-1200px)"}, reset: true})
    }
  })
  const CloudScript2 = Keyframes.Spring(async next => {
    while(true) {
      await next({transform: "translateX(0px) translateY(60px)", from: {transform: "translateX(-1200px) translateY(60px)"}, reset: true})
      await next({transform: "translateX(1200px) translateY(60px)", from: {transform: "translateX(0px) translateY(60px)"}, reset: true})
    }
  })



  
  return (
    <React.Fragment>
    <div className="login_container" style={require("./style/login.css")}>
      <div className="moon">
        <svg width="119" height="123" viewBox="0 0 119 123" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <defs>
            <clipPath id="clipPath1">
              <ellipse cx="41.5" cy="44.5" rx="59.5" ry="59.5" fill="#001970" />
            </clipPath>
          </defs>
          <ellipse cx="59.5" cy="61.5" rx="59.5" ry="59.5" fill="#FFE68F" />
          <ellipse cx="41.5" cy="44.5" rx="59.5" ry="59.5" fill="#001970" style={{ clipPath: "url(#clipPath1)" }}/> */}
            <path stroke="#000" transform="rotate(-134 67.58161163330078,68.32870483398438) " id="svg_3" d="m99.186113,130.951092l0,0c-34.906272,0 -63.209006,-28.032067 -63.209006,-62.62238c0,-34.585881 28.302735,-62.62238 63.209006,-62.62238l0,0c-19.893102,14.782639 -31.602332,37.984648 -31.602332,62.62238s11.709231,47.835309 31.602332,62.62238z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#FFE68F" />

        </svg>
      </div>
      <div className="cloudrear">
        <CloudScript1
          config={{duration: 40000}}
        >
          {style => (
            <svg style={style} width="120" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="9" rx="6" fill="#B7B5A4"/>
              <ellipse cx="11" cy="1" rx="7" ry="5" fill="#B7B5A4"/>
            </svg>
          )}
        </CloudScript1>
        <CloudScript2
          config={{duration: 40000}}
        >
          {style => (
            <svg style={style} width="120" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="9" rx="6" fill="#B7B5A4"/>
              <ellipse cx="11" cy="1" rx="7" ry="5" fill="#B7B5A4"/>
            </svg>
          )}
        </CloudScript2>
        
      </div>
      <div className="cloudmid">
        <CloudScript1
          config={{duration: 60000}}
        >
          {style => (
            <svg style={style} width="140" height="100" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="8" rx="6" fill="#B7B5A4" />
              <ellipse cx="9" cy="1" rx="6" ry="4" fill="#B7B5A4" />
              <ellipse cx="14" cy="3" rx="5" ry="5" fill="#B7B5A4" />
            </svg>
          )}
        </CloudScript1>
      </div>
      <div className="hillback">
        <div className="hillbackrear">
          <svg width="94" height="300" viewBox="0 0 94 164" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="94" height="164" fill="#340088" />
            <circle cx="47" cy="0" r="47" fill="#340088" />
          </svg>
        </div>
        <div className="hillbackmid">
          <svg width="115" height="350" viewBox="0 0 115 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="115" height="164" fill="#3C009E" />
            <ellipse cx="57.5" cy="0" rx="57.5" ry="56" fill="#3C009E" />
          </svg>
        </div>
        <div className="hillbackfront">
          <svg width="107" height="330" viewBox="0 0 107 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="107" height="194" fill="#4302AC" />
            <ellipse cx="53.5" cy="0" rx="53.5" ry="55.5" fill="#4302AC" />
          </svg>

        </div>
      </div>
      <div className="cloudfront">
        <CloudScript1
          config={{duration: 80000}}
        >
          {style => (
            <svg style={style} width="140" height="120" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="15" rx="10" fill="#B7B5A4"/>
              <ellipse cx="12" cy="1" rx="7" ry="5" fill="#B7B5A4"/>
            </svg>
          )}
        </CloudScript1>
        <CloudScript2
          config={{duration: 80000}}
        >
          {style => (
            <svg style={style} width="140" height="120" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="15" rx="10" fill="#B7B5A4"/>
              <ellipse cx="12" cy="1" rx="7" ry="5" fill="#B7B5A4"/>
            </svg>
          )}
        </CloudScript2>
      </div>
      <div className="treesback">
        <svg width="1450" height="123" viewBox="0 0 400 123" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* <animated.ellipse cx="-100" cy="49.5" rx="48" ry="49.5" fill="#5E51AA" /> */}
            {/* <Script
              config={config.molasses}
            >
              {style => (
                <svg height="100" width="200" viewbox="0 0 100 100" fill="#5E51AA">
                  <animated.ellipse style={style} cx="20" cy="30" rx="48" ry="49.5" fill="#5E51AA"/>
                </svg>
              )}
            </Script> */}
          {/* <animated.ellipse cx="-100" cy="49.5" rx="48" ry="49.5" fill="#5E51AA" state="showAndHide" style={{ 
            transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
          }}/> */}
          
          {/*  BACK TREES  */}

          <Script5 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="250" cy="30" rx="47.5" ry="49.5" fill="#473A94"  />}
          </Script5>
          <Script8 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="400" cy="25" rx="47.5" ry="49" fill="#473A94" />}
          </Script8>
          
          <Script13 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="650" cy="19" rx="47.5" ry="49" fill="#473A94" />}
          </Script13>
          
          <Script16 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="800" cy="19" rx="47.5" ry="49" fill="#473A94" />}
          </Script16>
          
          <Script17 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="850" cy="28" rx="47.5" ry="49" fill="#473A94" />}
          </Script17>
          
          <Script19 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="950" cy="27" rx="47.5" ry="49" fill="#473A94" />}
          </Script19>
          <Script20 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="1000" cy="25" rx="47.5" ry="49" fill="#473A94" />}
          </Script20>



          {/*  MID TREES  */}



          <Script1 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
            {style => <animated.ellipse style={style} cx="50" cy="20" rx="48" ry="49.5" fill="#4C4093" />}
          </Script1>
          
          <Script4 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="200" cy="25" rx="47.5" ry="49" fill="#4C4093"  />}
          </Script4>
          <Script9 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="450" cy="22" rx="47.5" ry="49" fill="#4C4093" />}
          </Script9>
          <Script11 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="550" cy="18" rx="48" ry="49.5" fill="#4C4093" />}
          </Script11>
          <Script12 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="600" cy="21" rx="48" ry="49" fill="#4C4093" />}
          </Script12>

          {/*  FRONT TREES  */}
          <Script2 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="100" cy="18" rx="48" ry="49.5" fill="#5E51AA" />}
          </Script2>
          <Script3 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="150" cy="22" rx="48" ry="49" fill="#5E51AA"  />}
          </Script3>
          <Script6 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="300" cy="24" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script6>
          <Script7 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="350" cy="20" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script7>
          <Script10 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="500" cy="20" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script10>
          <Script14 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="700" cy="17" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script14>
          <Script15 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="750" cy="21" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script15>
          
              
          <Script18 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="900" cy="25" rx="47.5" ry="49" fill="#5E51AA" />}
          </Script18>
        </svg>
      </div>
      <div className="lake">
        <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <path d="M85.9737 54.5021L130.585 66.6617L167.761 72.3362H214.496L289.91 66.6617H371.698L499.158 76.3894L700.971 96.6553L818.871 103.14L1009 96.6553V382H1V1L85.9737 54.5021Z" fill="#6E6CD6" stroke="#6E6CD6" /> */}
          <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="#6E6CD6" stroke="#6E6CD6" />
          <defs>
            <clipPath id="clipPath4">
              <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="#6E6CD6" stroke="#6E6CD6" />
              {/* <rect x="-300" y="60" width="200" height="40" /> */}
            </clipPath>
          </defs>
          <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg" style={{clipPath: "url(#clipPath4)"}}>
            
            {/*  BACK TREES  */}

            <Script5 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="510" cy="42" rx="47.5" ry="49.5" fill="#473A94" />}
            </Script5>
            <Script8 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="660" cy="44" rx="47.5" ry="49" fill="#473A94" />}
            </Script8>
            <Script13 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="910" cy="72" rx="47.5" ry="49" fill="#473A94" />}
            </Script13>
            <Script16 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1060" cy="105" rx="47.5" ry="49" fill="#473A94" />}
            </Script16>
            <Script17 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1110" cy="103" rx="47.5" ry="49" fill="#473A94" />}
            </Script17>
            <Script19 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1210" cy="99" rx="47.5" ry="49" fill="#473A94" />}
            </Script19>
            <Script20 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1260" cy="99" rx="47.5" ry="49" fill="#473A94" />}
            </Script20>

            {/*  MID TREES  */}


            <Script1 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
                {style => <animated.ellipse style={style} cx="310" cy="48" rx="48" ry="49.5" fill="#4C4093" />}
            </Script1>
            <Script4 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
                {style => <animated.ellipse style={style} cx="460" cy="45" rx="47.5" ry="49" fill="#4C4093"  />}
            </Script4>
            <Script9 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="710" cy="48" rx="47.5" ry="49" fill="#4C4093" />}
            </Script9>
            <Script11 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="810" cy="67" rx="48" ry="49.5" fill="#4C4093" />}
            </Script11>
            <Script12 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="860" cy="70" rx="48" ry="49" fill="#4C4093" />}
            </Script12>

            {/*  FRONT TREES  */}

            <Script2 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="360" cy="48" rx="48" ry="49.5" fill="#5E51AA" />}
            </Script2>
            <Script3 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="410 " cy="45" rx="48" ry="49" fill="#5E51AA" />}
            </Script3>
            
            
            <Script6 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="560" cy="45" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script6>
            <Script7 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="610" cy="50" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script7>
            
            
            <Script10 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="760" cy="62" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script10>
            
            
            <Script14 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="960" cy="85" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script14>
            <Script15 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1010" cy="105" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script15>
            
            
            <Script18 config={{
              mass: 1,
              tension: 20,
              velocity: 130,
              friction: 150,
              clamp: false,
              duration: 1000
            }}>
              {style => <animated.ellipse style={style} cx="1160" cy="108" rx="47.5" ry="49" fill="#5E51AA" />}
            </Script18>
            
          </svg>
            <svg width="1371" height="383" viewBox="0 0 1371 383" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="Gradient"
                  cx="0.8" cy="0.5" r="0.5" fx="1.29" fy="0.4">
                  <stop offset="0%" stop-color="#ffe554" />
                  <stop offset="100%" stop-color="#5553d1" />
                </radialGradient>
              </defs>
              <path d="M116.406 54.5021L176.994 66.6617L227.484 72.3362H290.957L393.379 66.6617H504.457L677.566 76.3894L951.654 96.6553L1111.78 103.14L1370 96.6553V382H1V1L116.406 54.5021Z" fill="url(#Gradient)" stroke="#6E6CD6" opacity="0.7" />
          </svg>
        </svg>
        
      </div>
      <div className="hillmidrear">
        <svg width="115" height="350" viewBox="0 0 115 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="115" height="194" fill="#671FFF" />
          <ellipse cx="57.5" cy="0" rx="57.5" ry="56" fill="#671FFF" />
        </svg>
      </div>
      <div className="hillmidfront">
        <svg width="116" height="330" viewBox="0 0 116 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="116" height="194" fill="#5B04E9" />
          <ellipse cx="58" cy="0" rx="58" ry="55.5" fill="#5B04E9" />
        </svg>
      </div>
      <div className="treesfront">
        <svg width="500" height="320" viewBox="0 0 241 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Script21 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="300" cy="127" rx="120.5" ry="127" fill="#621AFB" />}
          </Script21>
          <Script22 config={{
            mass: 1,
            tension: 20,
            velocity: 130,
            friction: 150,
            clamp: false,
            duration: 1000
          }}>
              {style => <animated.ellipse style={style} cx="380" cy="100" rx="121" ry="127.5" fill="#7230FF" />}
          </Script22>
        </svg>
      </div>
      <div className="hillfrontrear">
        <svg width="115" height="600" viewBox="0 0 115 277" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="115" height="277" fill="#6E23E8" />
          <ellipse cx="5" cy="5" rx="110" ry="112" fill="#6E23E8"/>
        </svg>

      </div>
      <div className="hillfrontfront">
        <svg width="258" height="800" viewBox="0 0 258 411" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="258" height="411" fill="#7230FF" />
          <ellipse cx="138" cy="0" rx="120.5" ry="127" fill="#7230FF" />
        </svg>
      </div>
    </div>
    {/* <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> */}
    </React.Fragment>
  );
  
  
}





// ------.o.-------ooooooooo.---ooooooooo.-------------ooooooooo.---oooooooooooo-ooooo------ooo-oooooooooo.---oooooooooooo-ooooooooo.---
// -----.888.------`888---`Y88.-`888---`Y88.-----------`888---`Y88.-`888'-----`8-`888b.-----`8'-`888'---`Y8b--`888'-----`8-`888---`Y88.-
// ----.8"888.------888---.d88'--888---.d88'------------888---.d88'--888----------8-`88b.----8---888------888--888----------888---.d88'-
// ---.8'-`888.-----888ooo88P'---888ooo88P'-------------888ooo88P'---888oooo8-----8---`88b.--8---888------888--888oooo8-----888ooo88P'--
// --.88ooo8888.----888----------888--------------------888`88b.-----888----"-----8-----`88b.8---888------888--888----"-----888`88b.----
// -.8'-----`888.---888----------888--------------------888--`88b.---888-------o--8-------`888---888-----d88'--888-------o--888--`88b.--
// o88o-----o8888o-o888o--------o888o------------------o888o--o888o-o888ooooood8-o8o--------`8--o888bood8P'---o888ooooood8-o888o--o888o-


const App = () => {

  const [testing, isTesting] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [activeUser, setActiveUser] = useState('')
  const [pageReady, setPageReady] = useState(false)
  const [navCollapse, setNavCollapse] = useState(false);
  const [errors, setErrors] = useState(false) 
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [addPostOpen, setAddPostOpen] = useState(false)
  const [addPhotoOpen, setAddPhotoOpen] = useState(false)
  const [takePhotoOpen, setTakePhotoOpen] = useState(false);
  const [webCamOpen, setWebCamOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [renderWelcome, setRenderWelcome] = useState(true)
  const [renderUserProfile, setRenderUserProfile] = useState(false);
  const [renderBulletinBoard, setRenderBulletinBoard] = useState(false)
  const [renderMessages, setRenderMessages] = useState(false);
  const [renderTeamPage, setRenderTeamPage] = useState(false)
  const [userProfileRendered, setUserProfileRendered] = useState(false)
  const [bulletinBoardRendered, setBulletinBoardRendered] = useState(false)
  const [messagesPageRendered, setMessagesPageRendered] = useState(false)
  const [teamPageRendered, setTeamPageRendered] = useState(false)
  const [postsLoaded, setPostsLoaded] = useState(false)
  // const posts = []
  const messages = []
  
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwordTwo, setPasswordTwo] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [posts, setPosts] = useState([])
  const [activeComponent, setActiveComponent] = useState(null)
  const userProviderValue = useMemo(
    () => ({
      userId,
      setUserId,
    }),
    [
      userId,
      setUserId,
    ]
  );
  const loginProviderValue = useMemo(
    () => ({
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo
    }),
    [
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      passwordTwo,
      setPasswordTwo
    ]
  );
  const signupProviderValue = useMemo(() => ({
    showSignup,
    setShowSignup
    }),
    [
      showSignup,
      setShowSignup
    ]
  )
  const postsProviderValue = useMemo(
    () => ({
      posts,
      setPosts
    }),
    [posts, setPosts]
  )
  const activeComponentProviderValue = useMemo(
    () => ({
      activeComponent,
      setActiveComponent
    }),
    [
      activeComponent,
      setActiveComponent
    ]
  );

  return (
    <React.Fragment>
      <Router>
        <Route>
          <UserContext.Provider value={userProviderValue}>
            {/* {isTesting && (
              <Testing testing={testing} isTesting={isTesting}/>
            )} */}
            {!loggedIn && (
              <LoginContext.Provider value={loginProviderValue}>
                <SignupContext.Provider value={signupProviderValue}>
                  <LoginPage
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    showSignup={showSignup}
                    setShowSignup={setShowSignup}
                    renderBulletinBoard={renderBulletinBoard}
                    setRenderBulletinBoard={setRenderBulletinBoard}
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                    errors={errors}
                    setErrors={setErrors}
                  />
                </SignupContext.Provider>
              </LoginContext.Provider>
            )}
            {!pageReady && (
              <LoadingScreen
                pageReady={pageReady}
                setPageReady={setPageReady}
              />
            )}
            {pageReady && loggedIn && (
              <React.Fragment>
                <PostsContext.Provider value={postsProviderValue}>
                  <ActiveComponentContext.Provider value={activeComponentProviderValue}>
                    <Dashboard
                      key={"key2"}
                      loggedIn={loggedIn}
                      setLoggedIn={setLoggedIn}
                      navCollapse={navCollapse}
                      setNavCollapse={setNavCollapse}
                      pageReady={pageReady}
                      setPageReady={setPageReady}
                      addUserOpen={addUserOpen}
                      setAddUserOpen={setAddUserOpen}
                      errors={errors}
                      setErrors={setErrors}
                      addPostOpen={addPostOpen}
                      setAddPostOpen={setAddPostOpen}
                      renderBulletinBoard={renderBulletinBoard}
                      setRenderBulletinBoard={setRenderBulletinBoard}
                      renderUserProfile={renderUserProfile}
                      setRenderUserProfile={setRenderUserProfile}
                      renderMessages={renderMessages}
                      setRenderMessages={setRenderMessages}
                      renderTeamPage={renderTeamPage}
                      setRenderTeamPage={setRenderTeamPage}
                      renderWelcome={renderWelcome}
                      setRenderWelcome={setRenderWelcome}
                      activeUser={activeUser}
                      setActiveUser={setActiveUser}
                      addPhotoOpen={addPhotoOpen}
                      setAddPhotoOpen={setAddPhotoOpen}
                      takePhotoOpen={takePhotoOpen}
                      setTakePhotoOpen={setTakePhotoOpen}
                      uploadedFile={uploadedFile}
                      setUploadedFile={setUploadedFile}
                      webCamOpen={webCamOpen}
                      setWebCamOpen={setWebCamOpen}
                      userProfileRendered={userProfileRendered}
                      setUserProfileRendered={setUserProfileRendered}
                      bulletinBoardRendered={bulletinBoardRendered}
                      setBulletinBoardRendered={setBulletinBoardRendered}
                      teamPageRendered={teamPageRendered}
                      setTeamPageRendered={setTeamPageRendered}
                      messagesPageRendered={messagesPageRendered}
                      setMessagesPageRendered={setMessagesPageRendered}
                      postsLoaded={postsLoaded}
                      setPostsLoaded={setPostsLoaded}
                      // setPosts={setPosts}
                    />
                  </ActiveComponentContext.Provider>
                </PostsContext.Provider>
              </React.Fragment>
            )}
          </UserContext.Provider>
        </Route>
      </Router>
    </React.Fragment>
  );
  
  
  
};


// const DELAY = 3000

// let items = [['Apples', 'Oranges', 'Kiwis'], ['Apples', 'Kiwis']]

// function App() {
//   const [itemIdx, set] = useState([])
//   const intervalRef = useRef()
//   const transitions = useTransition(items[itemIdx], null, {
//     from: { opacity: 0, height: 0, innerHeight: 0, transform: 'translateX(60px)', color: '#8fa5b6' },
//     enter: [
//       { opacity: 1, height: 80, innerHeight: 80 },
//       { transform: 'translateX(40px)', color: '#28d79f' },
//       { transform: 'translateX(40px)' },
//     ],
//     leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
//     update: { color: '#28b4d7' },
//   })

//   const start = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => set((itemIdx + 1) % items.length), DELAY)
//     }
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//         intervalRef.current = undefined
//       }
//     }
//   }
//   const reset = useCallback(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//       intervalRef.current = undefined
//       set(0)
//     }
//   }, [])

//   useEffect(start)

//   return (
//     <div>
//       {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
//         <animated.svg height="100" width="100" viewBox="0 0 94 164" fill="black" className="transitions-item" key={key} style={rest} onClick={reset}>
//           {/* <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div> */}
//           <animated.ellipse style={{background: "blue", height: innerHeight}} cx="5" cy="30" rx="25" ry="25">Hi</animated.ellipse>
//         </animated.svg>
//       ))}
//     </div>
//   )
// }

export default App;
