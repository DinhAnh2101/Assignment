import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            <div className="footer_bg">
        </div>
        <div className="footer">
          <div className="container">
            <div className="col-md-3 f_grid1">
              <h3>About</h3>
              <a href="#"><img src="images/logo.png" alt="" /></a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="col-md-3 f_grid1 f_grid2">
              <h3>Follow Us</h3>
              <ul className="social">
                <li><a href> <i className="fb"> </i>
                    <p className="m_3">Facebook</p>
                    <div className="clearfix"> </div>
                  </a></li>
                <li><a href><i className="tw"> </i>
                    <p className="m_3">Twittter</p>
                    <div className="clearfix"> </div>
                  </a></li>
                <li><a href><i className="google"> </i>
                    <p className="m_3">Google</p>
                    <div className="clearfix"> </div>
                  </a></li>
                <li><a href><i className="instagram"> </i>
                    <p className="m_3">Instagram</p>
                    <div className="clearfix"> </div>
                  </a></li>
              </ul>
            </div>
            <div className="col-md-6 f_grid3">
              <h3>Contact Info</h3>
              <ul className="list">
                <li>
                  <p>Phone : 1.800.254.5487</p>
                </li>
                <li>
                  <p>Fax : 1.800.254.2548</p>
                </li>
                <li>
                  <p>Email : <a href="mailto:info(at)fashionpress.com"> info(at)fashionpress.com</a></p>
                </li>
              </ul>
              <ul className="list1">
                <li>
                  <p>Aliquam augue a bibendum ipsum diam, semper porttitor libero elit egestas gravida, ut quam, nunc taciti
                  </p>
                </li>
              </ul>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="cssmenu">
              <ul>
                <li className="active"><a href="login.html">Privacy Policy</a></li> .
                <li><a href="checkout.html">Terms of Service</a></li> .
                <li><a href="checkout.html">Creative Rights Policy</a></li> .
                <li><a href="login.html">Contact Us</a></li> .
                <li><a href="register.html">Support &amp; FAQ</a></li>
              </ul>
            </div>
            <div className="copy">
              <p>© 2020 Template by <a href="http://w3layouts.com" target="_blank">w3layouts</a></p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
}

Footer.propTypes = {

}

export default Footer
