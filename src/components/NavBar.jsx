import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [active, setActive] = useState(true);

    
  return (
    <div className="navigation">
        {
            active ?
            <ul>
            <li onClick={() => setActive(!active)} className="list active" >
                <a href="#">
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span className="title"><NavLink to="/profile">Profile</NavLink></span>
                </a>
            </li>
            <li onClick={() => setActive(!active)} className="list">
                <a href="#">
                <span className="icon"><iconify-icon icon="mdi:vote" width="30" height="30"></iconify-icon></span>
                <span className="title"><NavLink to="/">Vote Here</NavLink></span>
                </a>
            </li>
        </ul>
        :
        <ul>
        <li onClick={() => setActive(!active)} className="list" >
            <a href="#">
            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            <span className="title"><NavLink to="/profile">Profile</NavLink></span>
            </a>
        </li>
        <li onClick={() => setActive(!active)} className="list active">
            <a href="#">
            <span className="icon"><iconify-icon icon="mdi:vote" width="30" height="30"></iconify-icon></span>
            <span className="title"><NavLink to="/">Vote Here</NavLink></span>
            </a>
        </li>
    </ul>
        }
        
</div>
  )
}


export default NavBar
