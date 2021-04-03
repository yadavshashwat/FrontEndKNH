import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../scripts/script";
import { FiChevronUp } from "react-icons/fi";

import Team from "../elements/Team";
import ServiceList from "../elements/ServiceList";
import NABH from "../elements/NABH";
import TPABrands from "../elements/TPABrands";

import PageHelmet from "../component/Helmet";
import Footer from "../component/Footer";
import Header from "../component/Header";

const SlideList = [

    {
        textPosition: 'text-left',
        bgImage: 'image-team',
        category: '',
        title: 'Our Team.',
        description: 'The team of 10+ dedicated doctors with extensive medical expertise ensures that the best treatment is administered.',
        buttonText: 'Book an Appointment',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'image-facility',
        category: '',
        title: 'Our Facility.',
        description: 'With our state of the art infrastructure, we ensure everything under the roof from diagnosis to treatment.',
        buttonText: 'Book an Appointment',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'image-care',
        category: '',
        title: 'Our Care.',
        description: "We understand the critical nature of medical care. Patient's safety is paramount.",
        buttonText: 'Book an Appointment',
        buttonLink: '/contact'
    }
]

class landingKNH extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){

        return(
            <Fragment> 
                <PageHelmet pageTitle="Kamla Nursing Home" />
                <Header />
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {/* {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--5 ptb--30">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <NABH />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Service Area  */}
                <div id="expertise" className="service-area creative-service-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">Our Expertise</h2>
                                    <p>Our expertise services ensure that complete lifecycle of womanhood and associated needs are taken care off under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */}

                {/* Start About Area  */}
                <div id="about"  className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1609015718/Doctors/about_knh_pmonlm.jpg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About Us</h2>
                                        <p>Kamla Nursing Home (KNH) was started in 1992 with small team of 2 doctors/life partners. The doctors while working in government hospitals realized the need of specialized care in small towns such as Alwar, care which was previously limited to bigger cities such as Jaipur and Delhi. They started the hospital with an aim of providing such quality care to the town of Alwar</p>
                                        <p></p>
                                        <p>Now the hospital has grown to be a state of the art 100 bedded hospital to provide advanced mother and child care with a dedicated team of 10+ expereinced doctors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Team Area  */}
                <div id="team"  className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Our Team</h2>
                                    <p>Years of experience and expertise of our doctors is what sets us apart.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-3 col-md-4 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}



                {/* Start TPA Area */}
                <div id="tpa"  className="rn-blog-area pt--120 pb--80 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">Insurance Partners</h2>
                                    <p>Our partnerships across medical insurance partners ensure hassle free payment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <TPABrands/>
                                <div className="view-all-btn"><a className="rn-button-style--2 btn-solid" href={'/tpa-partners'}>View All Partners</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End TPA Area */}


                <Footer />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default landingKNH;