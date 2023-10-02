import React from 'react'
import Logo from "../Logo.png"
import {Link} from "react-router-dom"
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <nav className="header">

     <img src={Logo} alt="Logo" />

     <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/Recently">Recently Added</Link>
        <Link to="/mylist">My List</Link>
     </div>

     <BsSearch/>

    </nav>
  )
} 

export default Header
