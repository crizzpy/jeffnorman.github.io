// ooooo----------.oooooo.---------.o.-------oooooooooo.---ooooo-ooooo------ooo---.oooooo.---------------.oooooo..o---.oooooo.---ooooooooo.---oooooooooooo-oooooooooooo-ooooo------ooo-
// `888'---------d8P'--`Y8b-------.888.------`888'---`Y8b--`888'-`888b.-----`8'--d8P'--`Y8b-------------d8P'----`Y8--d8P'--`Y8b--`888---`Y88.-`888'-----`8-`888'-----`8-`888b.-----`8'-
// -888---------888------888-----.8"888.------888------888--888---8-`88b.----8--888---------------------Y88bo.------888-----------888---.d88'--888----------888----------8-`88b.----8--
// -888---------888------888----.8'-`888.-----888------888--888---8---`88b.--8--888----------------------`"Y8888o.--888-----------888ooo88P'---888oooo8-----888oooo8-----8---`88b.--8--
// -888---------888------888---.88ooo8888.----888------888--888---8-----`88b.8--888-----ooooo----------------`"Y88b-888-----------888`88b.-----888----"-----888----"-----8-----`88b.8--
// -888-------o-`88b----d88'--.8'-----`888.---888-----d88'--888---8-------`888--`88.----.88'------------oo-----.d8P-`88b----ooo---888--`88b.---888-------o--888-------o--8-------`888--
// o888ooooood8--`Y8bood8P'--o88o-----o8888o-o888bood8P'---o888o-o8o--------`8---`Y8bood8P'-------------8""88888P'---`Y8bood8P'--o888o--o888o-o888ooooood8-o888ooooood8-o8o--------`8--
import React, {useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoadingScreen = ({ pageReady, setPageReady }) => {
    // document.addEventListener("DOMContentLoaded", event => {
    //     setTimeout(() => {
    //         setPageReady(true);
    //     }, 230);
    // });
    useEffect(() => {
        setTimeout(() => {
            setPageReady(true)
        }, 230)
    })
    return (
        <React.Fragment>
            <div className="page_wrapper" style={require("../style/loading-screen.css")}>
                <div className="spinner_wrap">
                    <FontAwesomeIcon icon="spinner" className="spinner" />
                </div>
            </div>
        </React.Fragment>
    );
}