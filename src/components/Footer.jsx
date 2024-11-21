import React from 'react'
import classes from './footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className={classes.logo}>Logo Sample</div>
        <section>
        <ul className={classes.list}>
                <li className={classes['nav-item']}><NavLink to={'/'} className={({isActive})=> isActive ? classes.active :undefined}>Home</NavLink> </li>
                <li className={classes['nav-item']}><NavLink to={'/album'}  className={({isActive})=> isActive ? classes.active :undefined}>Album</NavLink> </li>
                <li className={classes['nav-item']}><NavLink to={'/about-us'}  className={({isActive})=> isActive ? classes.active :undefined}>About Us</NavLink> </li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer