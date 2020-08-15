
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
const Single = ({product1}) => {

  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
    desc: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8888/products/${id}`);
    setProduct(result.data)

  }
  return (
    <div>
      <div className="col-md-9 single_right">
        
          <div className="single_grid">
            <div className="grid images_3_of_2">
              <ul id="etalage" className="etalage" style={{ display: 'block', width: '300px', height: '533px' }}>
                    <img className="etalage_thumb_image" name="image" src={product.image} style={{ display: 'inline', width: '300px', height: '400px', opacity: 1 }} ></img>
                </ul>
              <div className="clearfix" />
            </div>
            <div className="desc1 span_3_of_2">
              <h1>{product.name}</h1>
              <p className="availability">Availability: <span className="color">In stock</span></p>
              <div className="price_single">

                <span className="actual" >{product.price}</span>
              </div>
              <h2 className="quick">Quick Overview:</h2>
              <p className="quick_desc" >{product.desc}</p>

              <ul className="size">
                <h3>Length</h3>
                <li><a href="#">32</a></li>
                <li><a href="#">34</a></li>
              </ul>
              <div className="quantity_box">
                <ul className="product-qty">
                  <span>Quantity:</span>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </ul>
                <ul className="single_social">
                  <li><a href="#"><i className="fb1"> </i> </a></li>
                  <li><a href="#"><i className="tw1"> </i> </a></li>
                  <li><a href="#"><i className="g1"> </i> </a></li>
                  <li><a href="#"><i className="linked"> </i> </a></li>
                </ul>
                <div className="clearfix" />
              </div>
              <a href="reservation.html" title="Online Reservation" className="btn bt1 btn-primary btn-normal btn-inline " target="_self">Buy</a>
            </div>
            
          </div>
          
        </div>
        <div className="content_top">
        <div className="container">

          <div className="col-md-9 content_right">

            <h4 className="head"><span className="m_2">Popular</span> Products Now</h4>
            <div className="top_grid2">
              {product1.map(({ id, image, name, price }, index) => (
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
        <div className="sap_tabs">
          <div id="horizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
            
            <div className="resp-tabs-container"/>

          </div>
        </div>
      </div>
    
  )
}
Single.propTypes = {
  products: PropTypes.array
}

export default Single