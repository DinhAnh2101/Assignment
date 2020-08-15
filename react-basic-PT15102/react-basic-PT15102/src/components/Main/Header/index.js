import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className="header">
        <div className="header_top">
          <div className="container">
            <div className="logo">
              <a href="index.html"><img src="assets/css/main/images/logo.png" alt="" /></a>
            </div>
            <ul className="shopping_grid">
              <a href="#">
                <li>Join</li>
              </a>
              <a href="login.html">
                <li>Sign In</li>
              </a>
              <a href="#">
                <li><span className="m_1">Shopping Bag</span>&nbsp;&nbsp;(0) &nbsp;<img src="assets/css/main/images/bag.png" alt="" /></li>
              </a>
              <div className="clearfix"> </div>
            </ul>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="h_menu4">
          {/* start h_menu4 */}
          <div className="container">
            <a className="toggleMenu" href="#">Menu</a>
            <ul className="nav">
              <li className="active"><a href="index.html" data-hover="Home">Home</a></li>
              <li><a href="about.html" data-hover="About Us">About Us</a></li>
              <li><a href="careers.html" data-hover="Careers">Careers</a></li>
              <li><a href="contact.html" data-hover="Contact Us">Contact Us</a></li>
              <li><a href="404.html" data-hover="Company Profile">Company Profile</a></li>
              <li><a href="register.html" data-hover="Company Registration">Company Registration</a></li>
              <li><a href="wishlist.html" data-hover="Wish List">Wish List</a></li>
            </ul>
          </div>{/* end h_menu4 */}
        </div>
        
      </div>
    )
}

Header.propTypes = {

}

export default Header
