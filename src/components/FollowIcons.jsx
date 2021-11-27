import React from 'react'
import { linkedinIcon, facebookIcon, instagramIcon, twitterIcon, githubIcon } from '../Icons'
import './css/FollowIcons.css'

const FollowIcons = () => {

    const onLinkedinClick = () => {
        window.open("")
    }

    const onFbIconClick = () => {
        window.open("")
    }

    const onIgIconClick = () => {
        window.open("")
    }

    const onTwitterClick = () => {
        window.open("")
    }

    const onGhIconClick = () => {
        window.open("")


    return (
        <div id="iconsRow">
            <div className="icons" onClick={onLinkedinClick}>{linkedinIcon}</div>
            <div className="icons" onClick={onFbIconClick}>{facebookIcon}</div>
            <div className="icons" onClick={onIgIconClick}>{instagramIcon}</div>
            <div className="icons" onClick={onTwitterClick}>{twitterIcon}</div>
            <div className="icons" onClick={onGhIconClick}>{githubIcon}</div>
        </div>
    )
}

export default FollowIcons
