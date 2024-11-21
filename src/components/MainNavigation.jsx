import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './mainnavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>

        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes['nav-item']}><NavLink to={'/'} className={({isActive})=> isActive ? classes.active :undefined}>Home</NavLink> </li>
                <li className={classes['nav-item']}><NavLink to={'/album'}  className={({isActive})=> isActive ? classes.active :undefined}>Album</NavLink> </li>
                <li className={classes['nav-item']}><NavLink to={'/about-us'}  className={({isActive})=> isActive ? classes.active :undefined}>About Us</NavLink> </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation