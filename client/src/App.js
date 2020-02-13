import React, {useState, useEffect} from "react";
// import express from 'express'
// import io from 'socket.io-client'
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './server/models/User'
// import './server/routes/users'
// import mongoose from 'mongoose'
// const express = require('express')
// const http = require('http')
// const DB = require('./config/keys').MongoURI
// const app = express();
// app.use('/?/users', require('./server/routes/users'))

// mongoose.connect(DB, {useNewUrlParser: true})
// .then(()=> console.log('connected to DB'))

library.add(fab, faCheckSquare, faCoffee, faUser, faEnvelopeSquare, faSpinner, faBars, faPlus, faUserFriends, faUsersCog, faCommentDots, faClipboard, faCommentAlt, faPencilAlt, faItalic, faBold, faPaperPlane)

const BulletinBoard = ({addPostOpen, setAddPostOpen}) => {
  const [postAdminsOnly, setPostAdminsOnly] = useState(false)
  const [postContent, setPostContent] = useState('')
  const submitPost = () => {
    if (postContent) {
      console.log(postContent);
      console.log(postAdminsOnly);
      setPostContent("");
      setPostAdminsOnly(false);
      setAddPostOpen(false); 
    }
    else{
      return
    }
  }
  if (addPostOpen) {
    return (
      <div className="component_container">
        <div
          className="addPost"
          onClick={e => {
            e.preventDefault();
            setAddPostOpen(!addPostOpen);
          }}
        >
          <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
        </div>
        <div className="posts_window"></div>
        <div className="postbuilder">
          <div className="postbuilder_innercontainer">
            <form onSubmit={e => {
                e.preventDefault()
                submitPost()
              }}>
              <textarea contentEditable="true" className="post_compose" value={postContent} onChange={e => setPostContent(e.target.value)} />
              <div className="postbuilder_bottomwrapper">
                <div className="bottomicon_wrap">
                  <FontAwesomeIcon icon="bold" class="bottomicon" />
                </div>
                <div className="bottomicon_wrap">
                  <FontAwesomeIcon icon="italic" class="bottomicon" />
                </div>
                <div className="bottomicon_wrap" id="send">
                  <FontAwesomeIcon icon="paper-plane" class="bottomicon" onClick={() => submitPost()} />
                </div>

                <div
                  className="bottomicon_wrap"
                  onClick={e => {
                    setPostAdminsOnly(!postAdminsOnly);
                  }}
                >
                  <input type="checkbox" id="checkbox" checked={postAdminsOnly ? true : false } onChange={e => setPostAdminsOnly(!postAdminsOnly)}/>
                  <p>Admins only</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="component_container">
        <div className="addPost" onClick={e => {
          e.preventDefault()
          setAddPostOpen(!addPostOpen)
        }}>
          <FontAwesomeIcon icon="pencil-alt" class="buttonicon" />
        </div>
        <div className="posts_window"></div>
      </div>
    );
  }
}

const LoginPage = ({showSignup, setShowSignup, loggedIn, setLoggedIn}) => {
  const handleGet = (e) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    axios.get("?/users/login", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    console.log('test')
  }
  const handlePost = e => {
    e.preventDefault();
    const user = {
      username,
      password
    };
    // axios.get("/?/users/login", user)
    //   .then(res => {
    //     console.log(res.data)
    //     console.log('testing')
    //   })
    axios.post("/users/add", user)
    .then(console.log('posted'))
    .catch(err => console.log(`Please see the following error: ${err}`));
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

const LoadingScreen = ({pageReady, setPageReady}) => {
  document.addEventListener("DOMContentLoaded", event => {
    setTimeout(() => {
      setPageReady(true);
    }, 120);
    
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
  // document.addEventListener('focusout', e=> {
  //   setAddUserOpen(!false)
  // })
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

const UserProfile = () => {
  return(
    <div className="mainwrapper" style={require('./style/user-profile.css')}>
      <div className="profileImgWrapper">
        <div className="splitterwrapper">
          <div className="image">
            <img src={require('./images/img.jpg')}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavBar = ({ navCollapse, setNavCollapse, activeComponent, setActiveComponent }) => {
  return (
    <div className={navCollapse ? "nav_wrapper shrink" : "nav_wrapper"}>
      <div className="sidebar_top">
        <div
          className={navCollapse ? "hamburger shrink" : "hamburger"}
          onClick={e => {
            e.preventDefault();
            setNavCollapse(!navCollapse);
          }}
        >
          <FontAwesomeIcon icon="bars" className={navCollapse ? "rotate90" : "rotatefrom90"} />
        </div>
      </div>
      <div className={navCollapse ? "buttons_outerwrapper shrink" : "buttons_outerwrapper"}>
        <div className={navCollapse ? "wrapper_window shrink" : "wrapper_window"}>
          <div
            className={navCollapse ? "sidebar_topline one shrink" : "sidebar_topline one"}
          >
          </div>
          <div className={navCollapse ? "buttons_wrapper fadeout" : "buttons_wrapper fadein"}>
            <div className={navCollapse ? "buttons fadeout" : "buttons fadein"}>
              <FontAwesomeIcon icon="user" class={navCollapse ? "button shrink" : "button"} onClick={e => {
                // e.preventDefault()
                setActiveComponent('UserProfile')
                console.log(activeComponent)
              }} />
              <FontAwesomeIcon icon="check-square" class={navCollapse ? "button shrink" : "button"} />
              <FontAwesomeIcon icon="envelope-square" class={navCollapse ? "button shrink" : "button"} />
            </div>
          </div>
          <div className={navCollapse ? "sidebar_topline shrink" : "sidebar_topline"}>

          </div>
        </div>
        
      </div>
      <div className={navCollapse ? "profileImgInset shrink" : "profileImgInset"}>
        
      </div>
      <div className={navCollapse ? "profileImgSml" : "profileImgLrg"}>
        <img
          src={require("./images/img.jpg")}
          className={navCollapse ? "imageSml" : "imageLrg"}
        ></img>
      </div>

      <div className={navCollapse ? "sidebar_body shrink" : "sidebar_body"}>
        <div className={navCollapse ? "sidenav_container shrink" : "sidenav_container"}>





          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer">
              
            </div>
            <div className="sidenav_buttoncontainer"> 
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon icon="clipboard" class="sidenav_buttonicon"/>
              </div>
              <div className="component_preview">
              
              </div>
            </div>
          </div>
          
            {/* <img src={require('./svg/clipboard-regular.svg')} className="sidenav_buttonicon" /> */}





          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer">
              
            </div>
            <div className="sidenav_buttoncontainer">    
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon icon="comment-alt" class="sidenav_buttonicon"  id="chat" />
              </div>
              <div className="component_preview">
              
              </div>
            </div> 
          </div>
          




          <div className={navCollapse ? "component_previewwrap shrink" : "component_previewwrap"}>
            <div className="componentpreview_buttonbuffer">
              
            </div>
            <div className="sidenav_buttoncontainer">    
              <div className="sidenav_buttonwrap">
                <FontAwesomeIcon icon="user-friends" class="sidenav_buttonicon"/>
              </div>
              <div className="component_preview">
              
              </div>
            </div>
          </div>
          


        </div>
      </div>
      
    </div>
  );
};

const Dashboard = ({navCollapse, setNavCollapse, activeComponent, setActiveComponent, pageReady, setPageReady, addUserOpen, setAddUserOpen, errors, setErrors, addPostOpen, setAddPostOpen}) => {
  return (
    <div
      style={require("./style/dashboard.css")}
      className={navCollapse ? "main_container shrink" : "main_container"}
    >
      <div className="addUserBtn">
        <FontAwesomeIcon icon="plus" className="plus_icon" onClick={e => {
          e.preventDefault()
          setAddUserOpen(!addUserOpen)
        }} />
        <AddUser 
          addUserOpen={addUserOpen} 
          setAddUserOpen={setAddUserOpen} 
          errors={errors}
          setErrors={setErrors} 
        />
      </div>
      <NavBar navCollapse={navCollapse} setNavCollapse={setNavCollapse} />
      <div
        className={navCollapse ? "container_window shrink" : "container_window"}
      >
        <h1>{activeComponent}</h1>
      </div>
      <div
        className={navCollapse ? "content_container shrink" : "content_container"}>
        {/* <div className="active_comp"><UserProfile /></div> */}
        <BulletinBoard addPostOpen={addPostOpen} setAddPostOpen={setAddPostOpen} />
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

const App = () => {

  const [testing, isTesting] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)
  const [pageReady, setPageReady] = useState(false)
  const [navCollapse, setNavCollapse] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard')
  const [errors, setErrors] = useState([]) 
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [addPostOpen, setAddPostOpen] = useState(false)
  return (
    <React.Fragment>
      {/* <Router>
        <Route path="/" exact> */}
          {/* {isTesting && (
            <Testing testing={testing} isTesting={isTesting}/>
          )} */}
          {!loggedIn && (
            <LoginPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              showSignup={showSignup}
              setShowSignup={setShowSignup}
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
              />
            </React.Fragment>
          )}
        {/* </Route>
      </Router> */}
    </React.Fragment>
  );
  
  
  
};

export default App;
