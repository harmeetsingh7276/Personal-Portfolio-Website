import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Harmeet Singh Gorowada</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="facebook.com"><FaFacebookF/></a>
        <a href="instagram.com"><FiInstagram/></a>
        <a href="twitteer.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Harmeet Singh Gorowada. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer