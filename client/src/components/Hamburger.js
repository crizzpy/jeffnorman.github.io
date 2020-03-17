import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Hamburger = ({navCollapse, setNavCollapse}) => {
  const { rotateZ } = useSpring({
    rotateZ: navCollapse ? 0 : 90,
    config: {
      duration: 200
    }
  });

    return (
      <animated.div
        className={navCollapse ? "hamburger shrink" : "hamburger"}
        // className="hamburger"
        onClick={e => {
          e.preventDefault();
          setNavCollapse(!navCollapse);
        }}
        style={{
          transform: rotateZ.interpolate(z => `rotateZ(${z}deg)`)
        }}
      >
        <FontAwesomeIcon
          icon="bars"
          className={navCollapse ? "rotate90" : "rotatefrom90"}
        />
      </animated.div>
    );
}