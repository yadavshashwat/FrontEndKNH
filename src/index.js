// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import landingKNH from './pages/landingKNH';
import gynaecologyPage from './pages/gynaecologyPage';
import adminLogin from './pages/adminLogin';



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
                    <Route exact path={`${process.env.PUBLIC_URL}/service/gynaecology`} component={gynaecologyPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/adminpanel`} component={adminLogin}/>


                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();