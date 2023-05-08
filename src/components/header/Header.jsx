import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assests/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Harmeet Singh Gorowada</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>

        <div className="me">
          <img src={IMG} alt="Me" srcset="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header