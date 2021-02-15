import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

import Header from "../component/Header";
import Footer from "../component/Footer";
import PageHelmet from "../component/Helmet";


class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          path:"",
          serviceName:"",
          serviceDetails:"",
          serviceList:[],
          imageName:""
          
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
      // On Load

    componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
    }
    }
    onRouteChanged() {
        var path = window.location.pathname;
        var path_list  = path.split("/");
        if(path_list[2]==="gynaecology"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of women health issues from menarche to menopause",
                serviceList: [
                            'Minimal Access Procedures',
                            'Total Laparoscopic Hysterectomy',
                            'Laparoscopic Cholecystostomy',
                            'Laparoscopic Appendicectomy',
                            'Laparoscopic Hernia Repair',
                            'Laparoscopic Ectopic/Ovarian Cyst Surgery',
                            'General Laparoscopic Sugery'
                            ],
                serviceName: "Gynaecology",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/gynaecology_yphdzm.jpg'
              })
        }else if(path_list[2]==="obstretics"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of the mother during pregnancy and child birth",
                serviceList: [
                            'High Risk Pregnancy Care',
                            'Aptopic Pregnancy Care',
                            'Recurrent Abortion Management',
                            'Yoga Life Style Clinic',
                            'ICU Care',
                            ],
                serviceName: "Obstretics",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114762/Images/obstretics_dt4xl5.jpg'

                
              })            
        }else if(path_list[2]==="neonatology"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of the new born babies and children",
                serviceList: [
                            'Advanced Neonatal Care',
                            'Photo Therapy',
                            'Ventilator',
                            'Advanced Care of Pre-Term Babies',
                            'Genetic Counselling',
                            'Well Baby Clinic',
                            'Development Follow Up Clinic',
                            'NICU Care',
                            'Neonatal Transport Facility',
                            'Vaccination Facility'
                            ],
                serviceName: "Neonatology and Pediatrics",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/nenatal_ggrv6a.jpg'
              })
        }else if(path_list[2]==="ivf"){
            this.setState({
                serviceDetails: "Dealing with specialized care for couples having difficuly in conceiving a child",
                serviceList: [
                            'Fallopian tube damage or blockage',
                            'Ovulation disorders',
                            'Endometriosis',
                            'Uterine fibroids',
                            'Previous tubal sterilization or removal',
                            'Impaired sperm production or function',
                            'Unexplained infertility',
                            'A genetic disorder',
                            'Fertility preservation for cancer or other health conditions'
                            ],
                serviceName: "IVF Centre",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114743/Images/ivf_dg9swg.jpg'
              })
        }else if(path_list[2]==="radiology"){
            this.setState({
                serviceDetails: "Advanced medical imaging for diagnosis and well equipped laboratory for in facility testing",
                serviceList: [
                            '4D Ultrasound',
                            'Digital X-Ray',
                            'HSG (Hysterosalpingogram)',
                            'Partnership with Lal Path Labs',
                            'Home Collection',
                            'Well Equipped Lab'
                            ],
                serviceName: "Radiology and Laboratory",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/sonography_n6yufe.jpg'
              })
        }
    }
  componentDidMount() {
        var path = window.location.pathname;
        var path_list  = path.split("/");

        if(path_list[2]==="gynaecology"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of women health issues from menarche to menopause",
                serviceList: [
                            'Minimal Access Procedures',
                            'Total Laparoscopic Hysterectomy',
                            'Laparoscopic Cholecystostomy',
                            'Laparoscopic Appendicectomy',
                            'Laparoscopic Hernia Repair',
                            'Laparoscopic Ectopic/Ovarian Cyst Surgery',
                            'General Laparoscopic Sugery'
                            ],
                serviceName: "Gynaecology",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/gynaecology_yphdzm.jpg'
              })
        }else if(path_list[2]==="obstretics"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of the mother during pregnancy and child birth",
                serviceList: [
                            'High Risk Pregnancy Care',
                            'Aptopic Pregnancy Care',
                            'Recurrent Abortion Management',
                            'Yoga Life Style Clinic',
                            'ICU Care',
                            ],
                serviceName: "Obstretics",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114762/Images/obstretics_dt4xl5.jpg'

                
              })            
        }else if(path_list[2]==="neonatology"){
            this.setState({
                serviceDetails: "Dealing with the specialized care of the new born babies and children",
                serviceList: [
                            'Advanced Neonatal Care',
                            'Photo Therapy',
                            'Ventilator',
                            'Advanced Care of Pre-Term Babies',
                            'Genetic Counselling',
                            'Well Baby Clinic',
                            'Development Follow Up Clinic',
                            'NICU Care',
                            'Neonatal Transport Facility',
                            'Vaccination Facility'
                            ],
                serviceName: "Neonatology and Pediatrics",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/nenatal_ggrv6a.jpg'
              })
        }else if(path_list[2]==="ivf"){
            this.setState({
                serviceDetails: "Dealing with specialized care for couples having difficuly in conceiving a child",
                serviceList: [
                            'Fallopian tube damage or blockage',
                            'Ovulation disorders',
                            'Endometriosis',
                            'Uterine fibroids',
                            'Previous tubal sterilization or removal',
                            'Impaired sperm production or function',
                            'Unexplained infertility',
                            'A genetic disorder',
                            'Fertility preservation for cancer or other health conditions'
                            ],
                serviceName: "IVF Centre",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114743/Images/ivf_dg9swg.jpg'
              })
        }else if(path_list[2]==="radiology"){
            this.setState({
                serviceDetails: "Advanced medical imaging for diagnosis and well equipped laboratory for in facility testing",
                serviceList: [
                            '4D Ultrasound',
                            'Digital X-Ray',
                            'HSG (Hysterosalpingogram)',
                            'Partnership with Lal Path Labs',
                            'Home Collection',
                            'Well Equipped Lab'
                            ],
                serviceName: "Radiology and Laboratory",
                imageName:'https://res.cloudinary.com/alphabetagamma/image/upload/v1612114735/Images/sonography_n6yufe.jpg'
              })
        }
    }


    render(){
        let serviceListElement = null
        serviceListElement = this.state.serviceList.map((row,index) => {
            return (<li key={index}>{row}</li>);
        });
        
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
                                    <h2 className="title service-title-sub">{this.state.serviceName}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src={this.state.imageName} alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h2 className="title">{this.state.serviceName}</h2>
                                                        <p>{this.state.serviceDetails}</p>
                                                    <h4 className="title">Special Services</h4>
                                                        <ul className="liststyle">
                                                            {serviceListElement}
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    </div>
                                </div>
                            </div>
                        </div>
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