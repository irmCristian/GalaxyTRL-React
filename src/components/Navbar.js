import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? ' navbar navbar_background' : 'navbar'}>
            <h1 className='navbar_left' href="/">GLX TRVL</h1>
            <ul className={click ? 'navbar_right active' : 'navbar_right'}>
                <Link to='/' className='navbar_li'>Home</Link>
                <Link to='/pricing' className='navbar_li'>Pricing</Link>
                <Link to='/training' className='navbar_li'>Training</Link>
                <Link to='/contact' className='navbar_li'>Contact</Link>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
            </div>
        </div>
    )
}

export default Navbar