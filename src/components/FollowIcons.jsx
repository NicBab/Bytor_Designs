import React from 'react'
import { linkedinIcon, facebookIcon, instagramIcon, twitterIcon, githubIcon } from '../Icons'
import './css/FollowIcons.css'

const FollowIcons = () => {

    const onLinkedinClick = () => {
        window.open("")
    }

    const onFbIconClick = () => {
        window.open("https://www.facebook.com/bytordesign")
    }

    const onIgIconClick = () => {
        window.open("https://www.instagram.com/xoxbytorxox/?fbclid=IwAR19MgrBbb4N8hvQPD_FDv5I2ozZsneg21j4e9zJ0Y_I1ORWFM1C-_Yz804")
    }

    const onTwitterClick = () => {
        window.open("")
    }

    const onGhIconClick = () => {
        window.open("https://github.com/NicBab/Bytor_Designs")
    }

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
