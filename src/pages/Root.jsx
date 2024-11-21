import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import classes from './root.module.css'

const Root = () => {
  let value='asdasd'
  return (
    <div className={classes.container}>
    <MainNavigation />
    <Outlet  />
    
    <Footer />
   
    
    </div>
  )
}

export default Root