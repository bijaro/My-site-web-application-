import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../template/image/logo.png";

function NavLink() {
                    return (
                      
                        // <div className="wrapper">
                        <div className="sidebar">
                          <div className="log">
                            <img src={Image} alt="Men" />
                          </div>
                          <div className="container">
                            <ul>
                              <li>
                                <Link  to= "/">
                                  <i className="fas fa-home" />
                                  Home
                                </Link>
                              </li>
                              {/* <li>
                                <a href="#">
                                  <i className="fas fa-user" />
                                  Profile
                                </a>
                              </li> */}
                              <li>
                                <Link  to="/about">
                                  <i className="fas fa-address-card" />
                                  About
                                </Link>
                              </li>
                              <li>
                                <Link  to ="/portfolio">
                                  <i className="fas fa-project-diagram" />
                                  portfolio
                                </Link>
                              </li>
                              {/* <li>
                                <a href="#">
                                  <i className="fas fa-blog" />
                                  Blogs
                                </a>
                              </li> */}
                              <li>
                                <Link  to='/contact'>
                                  <i className="fas fa-address-book" />
                                  Contact
                                </Link>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-map-pin" />
                                  Map
                                </a>
                              </li>
                            </ul>
                            <div className="social_media">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      // </div>
                    );
}

export default NavLink;
