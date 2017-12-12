import React from 'react';
import {Route} from 'react-router-dom';

export class RouteList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.routes.map((route, index) =>
                    this.props.route.url === route.url ?
                        <div className="card card-inverse" key={route.url} style={{cursor: 'pointer'}}>
                            <img className="card-img"
                                 src={`/api/images/${route.main_image_id}`}
                                 alt={route.title}
                                 onClick={() => this.props.toogleMode(index)}
                                 style={{width: '100%'}}/>
                            <Route render={({history}) => (
                                <div className="card-img-overlay p-0" style={{position: 'relative'}}
                                     onClick={()=> history.push(`/marsrutas/${route.url}`)}>
                                    <div className="card-block m-0 p-2 text-left"
                                         onClick={() => this.props.toogleMode(index)}
                                         style={{bottom: '0px', position: 'absolute', width: '100%'}}>
                                        {route.title}
                                        <i className="fa fa-angle-right fa-2x pull-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            )}/>
                        </div> :
                        <div key={route.url} onClick={() => this.props.toogleMode(index)} className="card"
                             style={{cursor: 'pointer'}}>
                            <div className="card-block">
                                {route.title}
                            </div>
                        </div>
                )}
            </div>);
    }
}
;


