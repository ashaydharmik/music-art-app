import React from 'react'
import logo from "../../../../assets/logo.png"
import "./header.scss"
const Header = () => {
  return (
    <>
    <section className='mobile-header-container'>
        <div className='header'>
            <img src={logo} alt=''/>
            <h1>Musicart</h1>
        </div>
    </section>
    </>
  )
}

export default Header