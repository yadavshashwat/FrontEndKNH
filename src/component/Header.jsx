import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import { HashLink as HLink } from 'react-router-hash-link';

class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    

    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const {color='default-color' } = this.props;
        let logoUrl = <img className={'logo-knh-main'} src="https://res.cloudinary.com/alphabetagamma/image/upload/v1607805970/Logos/knh_logo_fnmtgh.png" alt="Kamla Nursing Home" />;

        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><Link to="/" >Home</Link></li>
                                <li><HLink to="/#tpa">TPA Partners</HLink></li>
                                {/* <li><HLink to="#expertise" >Expertise</HLink></li> */}
                                <li className="has-droupdown"><HLink to="/#expertise">Expertise</HLink>
                                    <ul className="submenu">
                                    <li><Link to="/service/gynaecology">Gynaecology</Link></li>
                                        <li><Link to="/service/obstretics">Obstretics</Link></li>
                                        <li><Link to="/service/neonatology">Neonatology and Pediatrics</Link></li>
                                        <li><Link to="/service/ivf">IVF Centre</Link></li>
                                        <li><Link to="/service/radiology">Radiology and Laboratory</Link></li>
                                    </ul>
                                </li>
                                <li><HLink to="/#about" >About Us</HLink></li>
                            </ul>
                        </nav>
                        {/* <div className="header-btn">
                            <a className="rn-btn" href="/">
                                <span>Book Appointment</span>
                            </a>
                        </div> */}
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;