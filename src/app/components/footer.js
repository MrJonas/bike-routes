import React from 'react';

import 'whatwg-fetch';


class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-white">Copyright &copy; Dviračių maršrutai 2017</p>
                        </div>
                        <div className="col-md-12">
                            <p>
                                <a aria-hidden="true" href="https://www.facebook.com/dviraciumarsrutai.lt/" rel="noopener" name="facebook puslapis" target="_blank"><i className="fa fa-2x fa-facebook-square text-white" aria-hidden="true"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;
