import React from 'react';

export default function Navbar() {
    return (
        <div>
          
               <div className="slider">
        <div className="callbacks_container">
          <ul className="rslides" id="slider">
            <li><img src="assets/css/main/images/banner1.jpg" className="img-responsive" alt="" />
              <div className="banner_desc">
                <h1>We Provide Worlds top fashion for less fashionpress.</h1>
                <h2>FashionPress the name of the of hi class fashion Web FreePsd.</h2>
              </div>
            </li>
            <li><img src="assets/css/main/images/banner2.jpg" className="img-responsive" alt="" />
              <div className="banner_desc">
                <h1>Duis autem vel eum iriure dolor in hendrerit.</h1>
                <h2>Claritas est etiam processus dynamicus, qui sequitur .</h2>
              </div>
            </li>
            <li><img src="assets/css/main/images/banner3.jpg" className="img-responsive" alt="" />
              <div className="banner_desc">
                <h1>Ut wisi enim ad minim veniam, quis nostrud.</h1>
                <h2>Mirum est notare quam littera gothica, quam nunc putamus.</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 sidebar_box">
          <div className="sidebar">
            <div className="menu_box">
              <h3 className="menu_head">Products Menu</h3>
              <ul className="menu">
                <li className="item1"><a href="#"><img className="arrow-img" src="assets/css/main/images/f_menu.png" alt="" /> Man</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item2"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Women</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item3"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Fashion 2015</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails</a></li>
                  </ul>
                </li>
                <li className="item4"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Kids</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item5"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Jeans</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item6"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Tshirt</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item7"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Top Fashion</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item8"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Summer Collection</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
                <li className="item9"><a href="#"><img className="arrow-img" src="images/f_menu.png" alt="" />Special Offer</a>
                  <ul className="cute" style={{display: 'none'}}>
                    <li className="subitem1"><a href="#">Cute Kittens </a></li>
                    <li className="subitem2"><a href="#">Strange Stuff </a></li>
                    <li className="subitem3"><a href="#">Automatic Fails </a></li>
                  </ul>
                </li>
              </ul>
            </div>
            {/*initiate accordion*/}
          </div>
          <div className="delivery">
            <img src="assets/css/main/images/delivery.jpg" className="img-responsive" alt="" />
            <h3>Delivering</h3>
            <h4>World Wide</h4>
          </div>
          <div className="twitter">
            <h3>Latest From Twitter</h3>
            <ul className="twt1">
              <i className="twt"> </i>
              <li className="twt1_desc"><span className="m_1">@Contrary</span> to popular belief, Lorem Ipsum is<span className="m_1"> not simply</span></li>
              <div className="clearfix"> </div>
            </ul>
            <ul className="twt1">
              <i className="twt"> </i>
              <li className="twt1_desc"><span className="m_1">There are many</span> variations of passages of Lorem Ipsum available, but the majority <span className="m_1">have suffered</span></li>
              <div className="clearfix"> </div>
            </ul>
            <ul className="twt1">
              <i className="twt"> </i>
              <li className="twt1_desc"><span className="m_1">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <span className="m_1">been the industry's standard dummy text ever</span></li>
              <div className="clearfix"> </div>
            </ul>
          </div>
          <div className="clients">
            <h3>Our Happy Clients</h3>
            <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</h4>
            <ul className="user">
              <i className="user_icon" />
              <li className="user_desc"><a href="#"><p>John Doe, Company Info</p></a></li>
              <div className="clearfix"> </div>
            </ul>
          </div>
        </div> 
        </div>
    )
}