import React from 'react';
import Footer from './../../components/footer';

class AboutPage extends React.Component {

    render() {
        return (
            <div>
                <div className="container" style={{minHeight: 'calc(100vh - 200px)'}} >
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card text-center my-5 my-xs-2 p-xs-2 p-sm-2 p-md-5 p-lg-5">
                                <h4 className="text-left">Autoriai</h4>
                                <img src="/img/autoriai.jpg" alt="Dviračių maršrutų autoriai" className="img-thumbnail rounded mx-auto d-block my-4 img-authors"
                                     />
                                <p className="lead">Mes esame Ieva ir Jonas. Gražiu oru mėgstame dviračiais važinėtis po Lietuvą.</p>
                                <p className="lead">Šiame bloge rasite visus mūsų išbandytus maršrutus.</p>
                                <p className="lead">
                                    Mes esame ne dviračių sporto, o labiau poilsio dviračiais entuziastai.
                                    Todėl siūlomi maršrutai yra skirti pradedantiesiems arba vidutiniokams.
                                    Tačiau idėjų savo žygiams pasisems ir labiau patyrę.
                                </p>
                                <p className="lead">Linkime smagių kelionių!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutPage;


