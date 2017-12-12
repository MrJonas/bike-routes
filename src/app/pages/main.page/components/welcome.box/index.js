import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import { Route } from 'react-router-dom'

class WelcomeBox extends React.Component {

    render() {
        return (
            <div className="no-padding">
                <Jumbotron fluid className="welcome-box text-white">
                    <div className="container">
                        <div className="welcome-box-text">
                            <h1 className="display-5">Sveiki atvykę!</h1>
                            <p className="lead">Tai blogas, kuriame du neprofesionaliausi Lietuvos dviratininkai
                                apžvelgia
                                maršrutus, įveiktus laisvalaikiu.</p>
                            <hr className="my-2"/>
                            <p>Maršrutų žemėlapis, lankytinos vietos, įspūdžiai bei patarimai - viskas apie turistinius
                                žygius
                                dviračiais.</p>
                            <p className="lead">
                                <Route render={({ history}) => (
                                    <Button
                                        color="primary"
                                        onClick={() => { history.push(`/marsrutai/`) }}
                                    >
                                        Rodyti maršrutų žemėlapį!
                                    </Button>
                                )} />
                            </p>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }

}
;

export default WelcomeBox;


