/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6> Address</h6>
                    <p>#305, 3rd Floor, Milestone25, Balmata Mangalore - 575002</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p><a href="mailto:thearchitecturecorporation.com">thearchitecturecorporation.com</a></p>
                    <p style={{fontSize:'14px'}}><a href="mailto:design@thearchitecturecorporation.com">design@thearchitecturecorporation.com</a></p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p><a href="tel:+91 90362 68899">   +91 90362 68899</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Our Pages</h5>
              </div>
              <ul style={{textAlign:"justify",textJustify:'inter-word',marginLeft:'30px'}}>
                <li>
                  <div className="img">
                    <Link href="/home1">
                      <a>
                       Home
                      </a>
                    </Link>
                  </div>

                  
                </li>
                <li>
                  <div className="img">
                    <Link href="/about">
                      <a>
                       About
                      </a>
                    </Link>
                  </div>
                
                </li>
                <li>
                  <div className="img">
                    <Link href="/ourworks">
                      <a>
                       Our Works
                      </a>
                    </Link>
                  </div>
                
                </li>
                <li>
                  <div className="img">
                    <Link href="/contact">
                      <a>
                       Contact
                      </a>
                    </Link>
                  </div>
                
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/Architectures/alogo.png" alt="" />
                <p style={{marginTop:'10px'}}>The Architecture Corporation</p>
              </div>
              <div className="social">
              <Link href="https://www.instagram.com/thearchitecturecorporation/">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
              
               
                <Link href="#">
                  <a>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p >
                © 2024 THE ARCHITECURE CORPORATION, Mangalore <br/>
                <Link href="#"> Site by</Link> <span style={{color:'white',textTransform:'none'}}>Bright Media</span>
                </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
