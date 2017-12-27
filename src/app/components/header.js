import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const ROUTES = {
  MAP: '/zemelapis/',
  ROUTE_LIST: '/marsrutai/',
  ABOUT: '/apie/',
  MAIN: '/',
};

export default class Example extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            pathname: ""
        };
        this.props.history.listen((location, action) => {
            this.setPathname(location.pathname);
        });
    }

    setPathname(pathname) {
        this.setState({pathname});
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="inverse"  toggleable>
                    <NavbarToggler style={{color: "white"}}aria-hidden="true" right onClick={this.toggle} >
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </NavbarToggler>
                    <NavbarBrand href="/#/">Dviračių maršrutai</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className={this.state.pathname === ROUTES.MAIN ? "active" : ""} href="/#/">Pagrindinis</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.pathname === ROUTES.ROUTE_LIST ? "active" : ""}  href="/#/marsrutai/">Maršrutai</NavLink>
                            </NavItem>
                            <NavItem className="hidden-sm-down">
                                <NavLink className={this.state.pathname === ROUTES.MAP ? "active" : ""}  href="/#/zemelapis/">Žemėlapis</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.pathname === ROUTES.ABOUT ? "active" : ""}   href="/#/apie/">Apie</NavLink>
                            </NavItem>
                            <NavItem>
                                <a href="https://www.facebook.com/dviraciumarsrutai.lt/" rel="noopener" target="_blank" className="nav-link text-white"><i className="fa fa-lg fa-facebook-square" aria-hidden="true"></i></a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
};

