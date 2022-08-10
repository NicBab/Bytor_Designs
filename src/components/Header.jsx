import React from 'react'
import { Nav, Menu, Logo, Plus } from "../components/index"
import './css/Header.css'

const Header = () => {
    return (
        <>
        <div className="header">
            <Nav/>
            <Menu />
            <Logo/>
            <Plus/>
        </div>
        </>
    )
}

export default Header
