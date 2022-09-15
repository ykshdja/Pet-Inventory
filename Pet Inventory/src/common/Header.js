import React from 'react';

import Image from "../img3.png";
import { BrowserRouter as Router, Switch, Route,NavLink, Link} from "react-router-dom";

const isHome = (match, location) =>{
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
  }
  
function Header(props)
{
  return(
    <header className="header">
      <div className="logo">
        <img src={Image} alt="Petland Image" ></img>
        </div>
    <nav className="navigation">
      <ul>
        <li ><NavLink  activeClassName="selected" isActive={isHome}  id="li1"  to="/">Home</NavLink></li>
        <li ><NavLink  activeClassName="selected"  id="li1"  to="/about">About</NavLink></li>
        <li ><NavLink  activeClassName="selected"  id="li2" to="/search">Search</NavLink></li>
        <li ><NavLink activeClassName="selected" id="li3"to="/edit">Edit</NavLink></li>
      </ul>
    </nav>
    </header>
  )
}
export default Header;