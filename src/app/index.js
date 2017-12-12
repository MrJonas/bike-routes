import React from 'react';
import {render} from 'react-dom';
import {Route, HashRouter, withRouter} from 'react-router-dom';

require("./../assets/style.css");
import 'bootstrap/dist/css/bootstrap.css';

import AboutPage from './pages/about.page';
import MainPage from './pages/main.page';
import RoutePage from './pages/route.page';
import RouteListPage from './pages/route.list.page';
import RouteMapPage from './pages/route.map.page';
import Header from './components/header';
const RouterHeader = withRouter(Header);

window.React = React;

render((
    <div>
        <HashRouter>
            <div>
                <RouterHeader/>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/marsrutai" component={RouteListPage}></Route>
                <Route exact path="/zemelapis" component={RouteMapPage} className="map-box"></Route>
                <Route exact path="/marsrutas/:url" component={RoutePage}></Route>
                <Route exact path="/apie" component={AboutPage}></Route>
            </div>
        </HashRouter>
    </div>
), document.getElementById('content'));
