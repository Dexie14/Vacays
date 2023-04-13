import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useState } from "react";
import Vacays from "../../assets/VACAYs..svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);
  
    const showSideBar = () => setIsOpen(!isOpen);


  return (
    <div className={classes.header}>
        <header>
        <div className={classes.logo}>
          <img src={Vacays} alt="Vacays" />
        </div>

        

        {isOpen ? (
            <div className={`${classes.bar} ${classes.hideBar}`} onClick={showSideBar}>
            <img src={close} alt="close" />
            </div>
            )
            : (
            <div className={classes.ham} onClick={showSideBar}>
            <img src={menu} alt="menu" />
            </div>)
          }

        <menu className={isOpen ? classes.sidemenu : classes.menu}>
            <nav className={classes.nav}>
                <NavLink
                to="/"
                className={(navData) =>
                    navData.isActive ? `${classes.active}` : `${classes.navItems}`
                  }
                >
                    Home
                </NavLink>
                <NavLink
                to="/"
                className={(navData) =>
                    navData.isActive ? `${classes.active}` : `${classes.navItems}`
                  }>
                    Destinations
                </NavLink>
                <NavLink
                to="/"
                className={(navData) =>
                    navData.isActive ? `${classes.active}` : `${classes.navItems}`
                  }>
                    About
                </NavLink>
                <NavLink
                to="/"
                className={(navData) =>
                    navData.isActive ? `${classes.active}` : `${classes.navItems}`
                  }>
                    Contact
                </NavLink>
            </nav>
            <div className={classes.register} >
                <button>Register</button>
            </div>
            <div className={classes.register}>
                <button>Sign in</button>
            </div>
        </menu>
        </header>
    </div>
  )
}

export default Header