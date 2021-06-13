import React from 'react';

import { Home }  from './Home';
import Header from './Header';
import Footer from './Footer';



import {Switch,Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                
                <Header />
                <Switch> 

                <Route exact path="/" component={Home} />
                {/* <Route path="/about" component={Facts} />
                <Route path="/symptoms" component={Symptoms}  />
                <Route path="/prevention" component = {Prevention} /> */}

                   <Redirect to = "/" />
                </Switch>    
                <Footer />
            </div>
        );
    }
}

export default Main ; 