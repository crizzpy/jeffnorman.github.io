
// ooo--------ooooo-oooooooooooo--.oooooo..o--.oooooo..o-------.o.---------.oooooo.----oooooooooooo--.oooooo..o-
// `88.-------.888'-`888'-----`8-d8P'----`Y8-d8P'----`Y8------.888.-------d8P'--`Y8b---`888'-----`8-d8P'----`Y8-
// -888b-----d'888---888---------Y88bo.------Y88bo.----------.8"888.-----888------------888---------Y88bo.------
// -8-Y88.-.P--888---888oooo8-----`"Y8888o.---`"Y8888o.-----.8'-`888.----888------------888oooo8-----`"Y8888o.--
// -8--`888'---888---888----"---------`"Y88b------`"Y88b---.88ooo8888.---888-----ooooo--888----"---------`"Y88b-
// -8----Y-----888---888-------o-oo-----.d8P-oo-----.d8P--.8'-----`888.--`88.----.88'---888-------o-oo-----.d8P-
// o8o--------o888o-o888ooooood8-8""88888P'--8""88888P'--o88o-----o8888o--`Y8bood8P'---o888ooooood8-8""88888P'--
import React, { useEffect, useState } from 'react'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'

export const Messages = ({ messages }) => {
    useEffect(() => {
        retrieveMessages();
    }, []);

    // const fadein = useSpring({
    //   from: {
    //     opacity: 0
    //   },
    //   opacity: 1
    // });

    // const slideIn = useTransition({
    //   from: {
    //     transform: "translateX(1200px)"
    //   },
    //   enter: {
    //     transform: "translateX(0px)"
    //   },
    //   leave: {
    //     transform: "translateX(-1200px)"
    //   }
    // })

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
            <div className="messagespage_wrapper">
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
            </div>
        </div>
    );
}
