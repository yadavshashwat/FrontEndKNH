import React, { Component , Fragment } from "react";

import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';
// import Cookies from 'universal-cookie';

class AdminLogin extends Component{
    constructor () {
        super()
        this.state = {
            hospital:"",
            username:"",
            password:""
        }
    }
    handleHospitalChange = event => {
        var data = event.target.value
        this.setState({
          hospital: data
        });
      };

    handleUserNameChange = event => {
    var data = event.target.value
    this.setState({
        hospital: data
    });
    };

    handlePasswordchange = event => {
        var data = event.target.value
        this.setState({
          password: data
        });
    };

    handleSubmit = () => {

    }

    handleForgetPassword = () =>{
    
    }
    render(){
        return(
            <Fragment> 
                <div className="admin-page">
                    <div className="login-box">
                        <div className="row">
                            <div className="logo-box">
                                Logo
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="field-div">
                                    <TextField autoComplete="off" value={this.state.hospital} placeholder="Hospital"  onChange={this.handleHospitalChange} />    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="field-div">
                                    <TextField autoComplete="off" value={this.state.username} placeholder="Username"  onChange={this.handleUserNameChange} />    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="field-div">
                                    <TextField type="password" autoComplete="off" value={this.state.password} placeholder="Password"  onChange={this.handlePasswordchange} />    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="forget-password">
                                    <span className="forget-password-message" onClick={this.handleForgetPassword}>Forgot Password?</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="login-button">
                                <Button onClick={this.handleSubmit} type="submit" appearance="primary">
                                    Login
                                </Button>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </Fragment>
        )
    }
}
export default AdminLogin;