import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Gallery from "../component/Gallery"


class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
      // On Load


    render(){
        
        return(
            <React.Fragment>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image image-facility2"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title service-title-sub">Our Facility</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details bg_color--1">
                    <div className="container-fluid">
                        <Gallery/>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;