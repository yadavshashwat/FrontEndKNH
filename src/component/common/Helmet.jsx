import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="A multispeciality hospital based out of Alwar, Rajasthan. Our services include Obstetrics and Gynecology, Paediatrics, Anaesthesiology, Neonatology, Pathology,  Haematology and Dietetics" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
