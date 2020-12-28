import React, { Component } from "react";

class NABH extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container nabh-container">
                    <div className="row nabh-tab">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="nabh-logo">
                                    <img src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608579748/Logos/NABH_slzxay.png" alt="Logo Images"/>
                                </div>                            
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12 nabh-text">
                                <p>Proud to be Alwar's first NABH pre-acredited mother and child care dedicated hospital</p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default NABH;