import React from 'react';
import {Jumbotron} from 'reactstrap';

class DistanceCounter extends React.Component {

    constructor() {
        super();
        this.state = {stats: null};
    }

    componentDidMount() {
        fetch("/api/route/stats")
            .then(res => res.json())
            .then(res => this.setStats(res))
            .catch(e => console.log(e));
    }

    setStats(stats) {
        this.setState({stats});
    }

    render() {
        if (this.state.stats) {
            return (
                <div className="container-fluid no-padding">
                    <div className="counter-box p-5 text-center">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-12 text-center mb-3">
                                    <h3><b>Šiuo metu puslapyje rasite:</b></h3>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-3">
                                    <i className="fa fa-map-signs fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{this.state.stats.count} maršrutai</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-road fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{this.state.stats.distance} kilometrai</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-camera-retro fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>{this.state.stats.atractions} Lankytinos vietos</h4>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-users fa-4x" aria-hidden="true"></i><br/><br/>
                                    <h4>2 keliautojų ispūdžiai</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

}
;

export default DistanceCounter;


