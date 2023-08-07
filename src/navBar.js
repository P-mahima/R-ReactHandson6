import React from 'react'
import {Link} from 'react-router-dom'
import "./navBar.css"
const Navbar = () => {
  return (
    <div className='navB'>
        <Link to='/' className='hoverT'>Home </Link>
        <Link to='/student' className='hoverT'>Student</Link>
        <Link to='/contact'className='hoverT'>Contact</Link>
    </div>
  )
}

export default Navbar