import React, {useContext} from 'react'
import { PostDelConfirmPrompt } from "./PostDelConfirmPrompt";
import { PreviewCard } from "./PreviewCard";
import { GlobalContext } from '../App'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, useTransition } from "react-spring";

export const PostContainer = ({ delBtn, confirmPostDel, setConfirmPostDel, confirmedPostDel, setConfirmedPostDel, post, abortedPostDel, setAbortedPostDel, setRenderUserProfile, setActiveComponent, key}) => {
    const posterName = `${post.userFirstName} ${post.userLastName}`

    const { uniqueId, setUniqueId, 
            history, setHistory,
            setPreviewCardOpen, setPreviewCardLabel,
            setXCoordinate, setYCoordinate } = useContext(GlobalContext)

    const transition = useTransition(confirmPostDel, null, {
        from: { opacity: 1, width: "0px" },
        enter: { opacity: 1, width: "80px" },
        leave: { opacity: 1, width: "0px" },
        config: {
            default: config.wobbly,
            duration: 200
        }
    })

    return(
        <React.Fragment>
            {/* <PreviewCard /> */}
            <div className={confirmPostDel ? "renderedpost_wrapper stretch" : "renderedpost_wrapper"} style={post.adminsOnly ? { border: "blue solid 1px" } : { background: "#ffd900" }}>
                <div className={confirmPostDel ? "render_innerwrap shrink" : "render_innerwrap"}>
                    <div className="poster_info_wrap">
                        <div className="poster_innerwrap">
                            <div className="poster_info" style={{ width: posterName.length * 10 }}>
                                <NavLink exact to={delBtn == "delbutton" ? "profile" : `/profile/:${post.userId}`}>
                                    <div onClick={e => {
                                        e.preventDefault();
                                        setRenderUserProfile(true);
                                        setActiveComponent("profile");
                                        setUniqueId(post.userId)
                                    }}>
                                        <b>{posterName}</b>
                                    </div>
                                </NavLink>
                            </div>
                            
                            <div className={post.userIsAdmin ? "admin-badge-wrap" : "hide"}
                                id={post.userIsAdmin ? `admin-badge-${post.id}` : null}
                                onMouseEnter={() => {
                                    setPreviewCardOpen(true)
                                    setPreviewCardLabel("Admin")
                                    let elem = document.getElementById(`admin-badge-${post.id}`)
                                    let coords = elem.getBoundingClientRect()
                                    setXCoordinate(coords.left - 220 + "px")
                                    setYCoordinate(coords.top - 149 + "px                                                                    ")
                                }}
                                onMouseLeave={() => {
                                    setPreviewCardOpen(false)
                                }}   
                            >
                                <FontAwesomeIcon icon="user-shield" style={{ color: "ffbb00" }} />
                            </div>
                        </div>
                        {post.date.split('T')[0]}
                        {/* {post.date.split('T')[1]} */}
                        <div className={post.adminsOnly ? "admins-only" : "hide"}
                            id={post.adminsOnly ? `admin-shield-${post.id}` : null}
                            onMouseEnter={() => {
                                setPreviewCardOpen(true)
                                setPreviewCardLabel("Only admins can view this post")
                                let elem = document.getElementById(`admin-shield-${post.id}`)
                                let coords = elem.getBoundingClientRect()
                                setXCoordinate(coords.left - 502 + "px")
                                setYCoordinate(coords.top - 149 + "px                                                                    ")
                            }}
                            onMouseLeave={() => {
                                setPreviewCardOpen(false)
                            }}    
                        >
                            <FontAwesomeIcon icon="shield-alt" style={{ color: "blue" }} />
                        </div>
                    </div>

                    <div className="postText">
                        {post.content}
                    </div>
                </div>
                <div className="delbtn_wrap">
                    <div
                        className={delBtn}
                        id={post.id}
                        onClick={e => {
                            setConfirmPostDel(!confirmPostDel)
                            setPreviewCardOpen(false)
                        }}
                        onMouseEnter={() => {
                            if (!confirmPostDel) {
                                setPreviewCardOpen(true)
                                setPreviewCardLabel("Delete Post")
                                let elem = document.getElementById(post.id)
                                let coords = elem.getBoundingClientRect()
                                setXCoordinate(coords.left - 270 + "px")
                                setYCoordinate(coords.top - 110 + "px")
                            }
                        }}
                        onMouseLeave={() => {
                            setPreviewCardOpen(false)
                        }}
                    >
                        <FontAwesomeIcon icon="times-circle" class={delBtn} />
                    </div>
                </div>
                {transition.map(({ item, props, key }) => (
                    item && (
                        <animated.div className="confirm_prompt" style={props}>
                            <PostDelConfirmPrompt
                                key={key}
                                post={post}
                                delBtn={delBtn}
                                confirmPostDel={confirmPostDel}
                                setConfirmPostDel={setConfirmPostDel}
                                confirmedPostDel={confirmedPostDel}
                                setConfirmedPostDel={setConfirmedPostDel}
                                abortedPostDel={abortedPostDel}
                                setAbortedPostDel={setAbortedPostDel}
                            />
                        </animated.div>
                    )
                ))}
            </div>
        </React.Fragment>
    )
}