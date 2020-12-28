import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/knhalwar'}
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        {/* <span>Your care our responsibility</span> */}
                                        <h2>Your care<br/>our duty</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Links</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/portfolio">TPA Partners</a></li>
                                                    <li><a href="/about">About Us</a></li>
                                                    {/* <li><a href="/contact">Let's Talk</a></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>How to reach us</h4>
                                                <div className="knh-address">
                                                    <p>Address:</p>
                                                    <p>21, Manu Marg, Alwar, Rajasthan, 301001</p>
                                                </div>                                            
                                                <ul className="ft-link">
                                                    <li><p>Email:</p><a href="mailto:kamlanursinghome123@gmail.com">kamlanursinghome123@gmail.com</a></li>
                                                </ul>
                                                <ul className="ft-link">
                                                    
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © Kamla Nursing Home. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;