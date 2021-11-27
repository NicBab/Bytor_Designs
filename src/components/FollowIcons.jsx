import React from 'react'
import { facebookIcon, instagramIcon, githubIcon, linkedinIcon } from '../Icons'
import './css/FollowIcons.css'

const FollowIcons = () => {

    const onFbIconClick = () => {
        window.open("")
    }
    const onIgIconClick = () => {
        window.open("")
    }
    const onGhIconClick = () => {
        window.open()
    }

    const onLinkedinClick = () => {
        window.open()
    }

    return (
        <div id="iconsRow">
            <div className="icons" onClick={onFbIconClick}>{facebookIcon}</div>
            <div className="icons" onClick={onIgIconClick}>{instagramIcon}</div>
            <div className="icons" onClick={onGhIconClick}>{githubIcon}</div>
            <div className="icons" onClick={onLinkedinClick}>{linkedinIcon}</div>
        </div>
    )
}

export default FollowIcons
