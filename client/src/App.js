import React, {useState, useEffect, useCallback, useRef} from "react";
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
import {useSpring, animated} from 'react-spring'

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
  });

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

const Messages = ({activeComponent, setActiveComponent, messages}) => {
  useEffect(() => {
    retrieveMessages();
  }, []);
  
  const fadein = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

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
  );
}

// oooooooooo.--ooooo-----ooo-ooooo--------ooooo--------oooooooooooo-ooooooooooooo-ooooo-ooooo------ooo-----------oooooooooo.----.oooooo.---------.o.-------ooooooooo.---oooooooooo.---
// `888'---`Y8b-`888'-----`8'-`888'--------`888'--------`888'-----`8-8'---888---`8-`888'-`888b.-----`8'-----------`888'---`Y8b--d8P'--`Y8b-------.888.------`888---`Y88.-`888'---`Y8b--
// -888-----888--888-------8---888----------888----------888--------------888-------888---8-`88b.----8-------------888-----888-888------888-----.8"888.------888---.d88'--888------888-
// -888oooo888'--888-------8---888----------888----------888oooo8---------888-------888---8---`88b.--8-------------888oooo888'-888------888----.8'-`888.-----888ooo88P'---888------888-
// -888----`88b--888-------8---888----------888----------888----"---------888-------888---8-----`88b.8-------------888----`88b-888------888---.88ooo8888.----888`88b.-----888------888-
// -888----.88P--`88.----.8'---888-------o--888-------o--888-------o------888-------888---8-------`888-------------888----.88P-`88b----d88'--.8'-----`888.---888--`88b.---888-----d88'-
// o888bood8P'-----`YbodP'----o888ooooood8-o888ooooood8-o888ooooood8-----o888o-----o888o-o8o--------`8------------o888bood8P'---`Y8bood8P'--o88o-----o8888o-o888o--o888o-o888bood8P'---


const BulletinBoard = ({addPostOpen, setAddPostOpen, activeUser, setActiveUser, posts, setPosts}) => {
  
  useEffect(() => {
    retrievePosts()
  }, [])

  const fadein = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [postsLoaded, setPostsLoaded] = useState(false)

  const retrievePosts = () => {
    axios
      .get("/posts/retrieve")
      .then(res => {
        console.log(res.data)
        res.data.map(post => {
          posts.push(post)
        });
        
        setPostsLoaded(true);
      })
      .catch(err => console.log(err));
  }

  const submitPost = () => {
    if (postContent) {
      // console.log(postContent);
      // console.log(postAdminsOnly);
      const data = {
        userId: activeUser.id,
        postAdminsOnly,
        content: postContent
      }
      axios.post('/posts/add', data)
      .then(res=> {

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
    <animated.div className="component_container" style={fadein}>
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
            <div className="test">
              <ul>
                {console.log(posts)}
                {posts.map(post => {
                  return (
                    <React.Fragment>
                      <li key={post.id}>{post.content}</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
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
                    onClick={() => submitPost()}
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
  );
}

// ooooo----------.oooooo.-----.oooooo.----ooooo-ooooo------ooo-----------ooooooooo.---------.o.---------.oooooo.----oooooooooooo-
// `888'---------d8P'--`Y8b---d8P'--`Y8b---`888'-`888b.-----`8'-----------`888---`Y88.------.888.-------d8P'--`Y8b---`888'-----`8-
// -888---------888------888-888------------888---8-`88b.----8-------------888---.d88'-----.8"888.-----888------------888---------
// -888---------888------888-888------------888---8---`88b.--8-------------888ooo88P'-----.8'-`888.----888------------888oooo8----
// -888---------888------888-888-----ooooo--888---8-----`88b.8-------------888-----------.88ooo8888.---888-----ooooo--888----"----
// -888-------o-`88b----d88'-`88.----.88'---888---8-------`888-------------888----------.8'-----`888.--`88.----.88'---888-------o-
// o888ooooood8--`Y8bood8P'---`Y8bood8P'---o888o-o8o--------`8------------o888o--------o88o-----o8888o--`Y8bood8P'---o888ooooood8-


const LoginPage = ({showSignup, setShowSignup, loggedIn, setLoggedIn, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, errors, setErrors}) => {
  const handleGet = async (e) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    const response = await tryLogin(user)
    console.log(response._id)
    console.log(activeUser)
    // .catch(err => console.log(`Error encountered: ${err}`))
    // axios.get('/api/hello')
    // .then(res => console.log(res.data))
    console.log('login attempt')
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
  };

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  return (
    <div className="login_container" style={require("./style/login.css")}>
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
                Don't have an account? >> Create Account
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
            </form>
            <button
              className="router_wrapper"
              onClick={e => {
                e.preventDefault();
                setShowSignup(false);
              }}
            >
              Have an exisiting account? >> Log In
            </button>
          </div>
        )}
      </div>
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
    console.log(uploadedFile[0]);
    console.log(uploadedFile);
    const fd = new FormData() 
    // fd.set() 
    fd.append('file', uploadedFile[0]);
    // fd.append("files", uploadedFile, uploadedFile.name);
    console.log(fd.file)
    axios.post('/users/upload', fd)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }
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
      </div>
      {/* {addPhotoOpen && ( */}
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
              <input id="file-input" type="file" onChange={e => setUploadedFile(e.target.files[0])}/>
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
      {webCamOpen &&(
        <animated.div 
        className={webCamOpen ? "webcam_wrapper open" : "webcam_wrapper close"}
        style={webCamFade}
        >
          <WebcamComponent webCamOpen={webCamOpen} setWebCamOpen={setWebCamOpen} />
        </animated.div>
      )}
      
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




const NavBar = ({ navCollapse, setNavCollapse, activeComponent, setActiveComponent, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, activeUser, setActiveUser }) => {
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
  
  const { rotateZ } = useSpring({
    rotateZ: navCollapse ? 0 : 90 
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



const Dashboard = ({navCollapse, setNavCollapse, activeComponent, setActiveComponent, pageReady, setPageReady, addUserOpen, setAddUserOpen, errors, setErrors, addPostOpen, setAddPostOpen, renderUserProfile, setRenderUserProfile, renderBulletinBoard, setRenderBulletinBoard, activeUser, setActiveUser, posts, messages, renderMessages, setRenderMessages, renderTeamPage, setRenderTeamPage, addPhotoOpen, setAddPhotoOpen, takePhotoOpen, setTakePhotoOpen, uploadedFile, setUploadedFile, webCamOpen, setWebCamOpen}) => {
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
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
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
        {renderBulletinBoard && (
          <BulletinBoard
            addPostOpen={addPostOpen}
            setAddPostOpen={setAddPostOpen}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            posts={posts}
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
          />
        )}
        {renderMessages && (
          <Messages activeUser={activeUser} setActiveUser={setActiveUser} />
        )}
        {renderTeamPage && (
          <TeamPage activeUser={activeUser} setActiveUser={setActiveUser} />
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


// ------.o.-------ooooooooo.---ooooooooo.-------------ooooooooo.---oooooooooooo-ooooo------ooo-oooooooooo.---oooooooooooo-ooooooooo.---
// -----.888.------`888---`Y88.-`888---`Y88.-----------`888---`Y88.-`888'-----`8-`888b.-----`8'-`888'---`Y8b--`888'-----`8-`888---`Y88.-
// ----.8"888.------888---.d88'--888---.d88'------------888---.d88'--888----------8-`88b.----8---888------888--888----------888---.d88'-
// ---.8'-`888.-----888ooo88P'---888ooo88P'-------------888ooo88P'---888oooo8-----8---`88b.--8---888------888--888oooo8-----888ooo88P'--
// --.88ooo8888.----888----------888--------------------888`88b.-----888----"-----8-----`88b.8---888------888--888----"-----888`88b.----
// -.8'-----`888.---888----------888--------------------888--`88b.---888-------o--8-------`888---888-----d88'--888-------o--888--`88b.--
// o88o-----o8888o-o888o--------o888o------------------o888o--o888o-o888ooooood8-o8o--------`8--o888bood8P'---o888ooooood8-o888o--o888o-


const App = () => {

  const [testing, isTesting] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)
  const [activeUser, setActiveUser] = useState('')
  const [pageReady, setPageReady] = useState(false)
  const [navCollapse, setNavCollapse] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard')
  const [errors, setErrors] = useState(false) 
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [addPostOpen, setAddPostOpen] = useState(false)
  const [addPhotoOpen, setAddPhotoOpen] = useState(false)
  const [takePhotoOpen, setTakePhotoOpen] = useState(false);
  const [webCamOpen, setWebCamOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [renderUserProfile, setRenderUserProfile] = useState(false);
  const [renderBulletinBoard, setRenderBulletinBoard] = useState(true);
  const [renderMessages, setRenderMessages] = useState(false);
  const [renderTeamPage, setRenderTeamPage] = useState(false)
  
  // const [posts, setPosts] = useState('')
  const posts = []
  const messages = []

  return (
    <React.Fragment>
      <Router>
        <Route>
          {/* {isTesting && (
            <Testing testing={testing} isTesting={isTesting}/>
          )} */}
          {!loggedIn && (
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
          )}
          {!pageReady && (
            <LoadingScreen pageReady={pageReady} setPageReady={setPageReady} />
          )}
          {pageReady && loggedIn && (
            <React.Fragment>
              <Dashboard
                key={"key2"}
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
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
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                posts={posts}
                messages={messages}
                addPhotoOpen={addPhotoOpen}
                setAddPhotoOpen={setAddPhotoOpen}
                takePhotoOpen={takePhotoOpen}
                setTakePhotoOpen={setTakePhotoOpen}
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
                webCamOpen={webCamOpen}
                setWebCamOpen={setWebCamOpen}
                // setPosts={setPosts}
              />
            </React.Fragment>
          )}
        </Route>
      </Router>
    </React.Fragment>
  );
  
  
  
};

export default App;
