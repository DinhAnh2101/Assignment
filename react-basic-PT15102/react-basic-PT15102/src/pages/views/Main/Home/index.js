import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Home = ({ product }) => {
  return (
    <div>

      <div className="content_top">
        <div className="container">

          <div className="col-md-9 content_right">

            <h4 className="head"><span className="m_2">Popular</span> Products Now</h4>
            <div className="top_grid2">
              {product.map(({ id, image, name, price }, index) => (
                <div key={index}>
                  <div className="col-md-4 top_grid1-box1"><a href="single.html">
                    <div className="grid_1">
                      <div className="b-link-stroke b-animate-go  thickbox"><div className="b-bottom-line" /><div className="b-top-line" />
                        <img src={image} className="img-responsive" alt="" style={{ display: 'inline', width: '200px', height: '150px', opacity: 1 }} /> </div>
                      <div className="grid_2">
                        <p>{name}</p>
                        <ul className="grid_2-bottom">
                          <li className="grid_2-left"><p>{price}</p></li>
                          <li className="grid_2-right"><Link className="btn btn-primary" to={`/${id}`}>GET IT</Link></li>
                          <div className="clearfix"> </div>
                        </ul>
                      </div>
                    </div>
                  </a> </div>
                </div>

              ))}
              <div className="clearfix"> </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

Home.propTypes = {
  products: PropTypes.array
}

export default Home
