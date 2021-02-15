// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import landingKNH from './pages/landingKNH';
import servicePage from './pages/servicePage';
import tpaPage from './pages/tpa';
// import adminLogin from './pages/adminLogin';
import facilityPage from './pages/facilityPage';



// Element Layout
import error404 from "./elements/error404";



import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={landingKNH}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service/gynaecology`} component={servicePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service/obstretics`} component={servicePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service/neonatology`} component={servicePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service/radiology`} component={servicePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service/ivf`} component={servicePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/tpa-partners`} component={tpaPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/facility`} component={facilityPage}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/adminpanel`} component={adminLogin}/> */}
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>
                    

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();