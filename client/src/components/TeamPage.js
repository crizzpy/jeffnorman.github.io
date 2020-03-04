// ooooooooooooo-oooooooooooo-------.o.-------ooo--------ooooo-----------ooooooooo.---------.o.---------.oooooo.----oooooooooooo-
// 8'---888---`8-`888'-----`8------.888.------`88.-------.888'-----------`888---`Y88.------.888.-------d8P'--`Y8b---`888'-----`8-
// -----888-------888-------------.8"888.------888b-----d'888-------------888---.d88'-----.8"888.-----888------------888---------
// -----888-------888oooo8-------.8'-`888.-----8-Y88.-.P--888-------------888ooo88P'-----.8'-`888.----888------------888oooo8----
// -----888-------888----"------.88ooo8888.----8--`888'---888-------------888-----------.88ooo8888.---888-----ooooo--888----"----
// -----888-------888-------o--.8'-----`888.---8----Y-----888-------------888----------.8'-----`888.--`88.----.88'---888-------o-
// ----o888o-----o888ooooood8-o88o-----o8888o-o8o--------o888o-----------o888o--------o88o-----o8888o--`Y8bood8P'---o888ooooood8-

import React, { useEffect, useState } from 'react'
import { useSpring, animated, config, useTransition } from 'react-spring'
import { Keyframes, Spring, Transition } from 'react-spring/renderprops'
import {  faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { AbsoluteWrapper } from './AbsoluteWrapper'

export const TeamPage = () => {
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
        <AbsoluteWrapper>
        <div className="messagespage_wrapper">
            <div className="messages_innerwrapper">
                <div className="iconwrap">
                    <div className="msgimgcircle">
                        <div className="msgimage">
                            <FontAwesomeIcon icon="user-friends" class="msgimage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AbsoluteWrapper>
    );
}