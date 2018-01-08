import React from 'react';
import 'whatwg-fetch';
import { Card, CardTitle, CardBlock} from 'reactstrap';
import Lightbox from 'react-images';
import Footer from './../../components/footer';
import LazyLoad from 'react-lazyload';

class RoutePage extends React.Component {

    constructor() {
        super();
        this.state = {lightboxIsOpen: false, currentImage: 0, images: [], route: null};
        console.log('STEP 1');
    }

    componentDidUpdate() {
        console.log('STEP 2');
    }

    setRoute(route) {
        console.log('STEP 5');
        let images = route.images ? route.images.map(image => {
            return {src: `/api/images/${image.id}`}
        }) : [];
        console.log('STEP 5.1');
        console.log(this.setState);
        this.setState({route});
        console.log('STEP 5.2');
    }

    componentDidMount() {
        console.log('STEP 3');
        fetch(`/api/route/${this.props.match.params.url}`)
            .then(result => {
                console.log('STEP 4');
                result.json().then(
                    route => this.setRoute(route),
                    err => { console.log(err); console.log('STEP 6');})

            }, err => { console.log(err); console.log('STEP 7');});
    }

    closeLightbox() {
        console.log('STEP 8');
        // this.setState({lightboxIsOpen: false})
    }

    gotoNextLightboxImage() {
        console.log('STEP 10');
        // this.setState({
        //     currentImage: this.state.currentImage + 1,
        // });

    }

    gotoPrevLightboxImage() {
        console.log('STEP 11');
        // this.setState({
        //     currentImage: this.state.currentImage - 1,
        // });
    }

    showGallery() {
        console.log('STEP 12');
        // this.setState({lightboxIsOpen: true})

    }


    render() {
        return (
            <div>
                <div className="container my-4" style={{minHeight: 'calc(100vh - 200px)'}}>
                    {this.state.route &&
                    <div className="row">
                        <div className="col-md-8">

                            <Card className="route-text">
                                <CardBlock>
                                    <CardTitle className="text-left">{this.state.route.title}</CardTitle>
                                    <LazyLoad>
                                        <div dangerouslySetInnerHTML={{__html: this.state.route.body}}></div>
                                    </LazyLoad>
                                </CardBlock>
                            </Card>

                            {this.state.route.atractions &&
                            <Card className="my-2">
                                <CardBlock>
                                    <CardTitle className="text-left">Lankytinos vietos</CardTitle>
                                    <ul>
                                        {this.state.route.atractions.map(atraction => {
                                                return !atraction.show_only_in_map &&
                                                    <li key={atraction.name}>
                                                        <b>{atraction.name}.</b> {atraction.description}</li>
                                            }
                                        )}
                                    </ul>
                                </CardBlock>
                            </Card>
                            }
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-2">
                                <CardBlock >
                                    <CardTitle className="text-left">Informacija</CardTitle>
                                        <div>
                                            <i className="fa fa-road" aria-hidden="true"></i>
                                            <span> {this.state.route.distance} km </span>
                                        </div>
                                        <div>
                                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            <span> {this.state.route.duration} </span>
                                        </div>
                                        {this.state.route.access_by_train &&
                                            <div>
                                                <i className="fa fa-train" aria-hidden="true"></i>
                                                <span> Maršrutas pasiekiamas traukiniu </span>
                                            </div>
                                        }
                                </CardBlock>
                            </Card>
                            <Card onClick={() => this.showGallery()} style={{cursor: 'pointer'}}>
                                <CardBlock>
                                    <CardTitle className="text-left">Nuotraukų galerija</CardTitle>
                                    <img src={`/api/images/${this.state.route.main_image_id}`}
                                         style={{maxWidth: '100%'}}/>
                                    <Lightbox
                                        currentImage={this.state.currentImage}
                                        images={this.state.images}
                                        isOpen={this.state.lightboxIsOpen}
                                        onClickPrev={() => this.gotoPrevLightboxImage()}
                                        onClickNext={() => this.gotoNextLightboxImage()}
                                        onClose={() => this.closeLightbox()}
                                    />
                                </CardBlock>
                            </Card>
                        </div>
                    </div>
                    }
                </div>
                <Footer/>
            </div>
        );
    }

}
;

export default RoutePage;
