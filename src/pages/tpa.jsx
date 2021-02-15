import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class TPADetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          tpaList:[
            'Medi Assist India TPA', 'Raksha TPA', 'Family Health Plan TPA', 'Heritage Health TPA', 'Max Bupa', 'Apollo Munic Healthcare ( Now HDFC Ergo Health)', 'Vipul Med Corp TPA', 'Health India TPA Services Pvt. Ltd.', 'Good Health TPA Services Ltd.', 'Genins India TPA Ltd', 'Star Health And Allied Insurance Co. Ltd.', 'Future Generali', 'United Healthcare Parekh', 'Care Health Insurance Ltd. (Formaly Religare Health)', 'Bajaj Allianz Insurance', 'ICICI Lombard', 'H.D.F.C. Ergo', 'Chola MS', 'Ericson Insurance TPA Pvt. Ltd.', 'IFFCO Tokiyo General Insurance', 'Alankit Insurance TPA Ltd.', 'Cigna TTK Health Insurance', 'Medicare Insurance TPA Services Pvt. Ltd.', 'E-Meditek Insurance TPA Ltd.', 'Universal Sompo General Insurance', 'Sunrise Medicorp Solution Private Ltd.', 'Safeway Insurnace TPA Pvt. Ltd.', 'Focus Healthservices TPA', 'Rothshield Healthcare TPA Services Limited', 'Park Medicalim', 'Liberty Videocon General Insurance', 'Aditya Birla Health Insurance', 'Dedicated Healthcare Services', 'Go Digit General Insurance Co. Ltd. (MediAssist TPA)', 'East West Assist TPA'
          ],
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
      // On Load


    render(){
        let tpaList = null
        tpaList = this.state.tpaList.map((row,index) => {
            return (<tr key={index}><td>{index + 1}</td><td>{row}</td></tr>);
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
                                    <h2 className="title service-title-sub">Our TPA Partners</h2>
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
                                            <div className="col-lg-12 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">List of Empanelled TPA / Insurance Company</h4>
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>S. No.</th>
                                                            <th>Company Name</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {tpaList}
                                                        </tbody>
                                                    </table>
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
export default TPADetails;