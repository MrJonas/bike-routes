import React from 'react';
import 'whatwg-fetch';
import Footer from './../../components/footer';
import WelcomeBox from "./components/welcome.box";
import DistanceCounter from "./components/distance.counter";
import LatestRoutes from "./components/latest.routes";
class MainPage extends React.Component {

    render() {
        return (
            <div>
                <div className="page-layout">
                    <WelcomeBox/>
                    <LatestRoutes/>
                    <DistanceCounter/>
                </div>
                <Footer/>
            </div>

        );
    }
};

export default MainPage;


