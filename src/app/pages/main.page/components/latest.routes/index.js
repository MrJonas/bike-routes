import React from 'react';
import RouteCard from './../../../../components/cards/route.card';

class LatestRoutes extends React.Component {

    constructor() {
        super();
        this.state = {routes: []};
    }

    componentDidMount() {
        fetch("/api/route/latest/3")
            .then(res => res.json())
            .then(res => this.setRoutes(res))
            .catch(e => console.log(e));
    }

    setRoutes(routes) {
        this.setState({routes});
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center my-4">
                    <div className="col-12">
                        <h3><b>NAUJAUSI MŪSŲ MARŠRUTAI</b></h3>
                    </div>
                </div>
                <div className="row">
                    {this.state.routes.map(route =>
                        <div key={route.url} className="col-lg-4 col-md-6 mb-4">
                            <RouteCard bikeRoute={route}/>
                        </div>
                    )}
                </div>
                <div className="row text-right my-4">
                    <div className="col-12">
                        <a href="/#/marsrutai">Daugiau maršrutų...</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default LatestRoutes;


