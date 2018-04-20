import * as React from 'react';
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import './TopNavBar.css';

interface TopNavBarState {
    isOpen: boolean;
}

export default class TopNavBar extends React.Component<{}, TopNavBarState> {
    constructor(props: {}) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {isOpen : false};
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div className="top-nav-bar">
                <Container>
                    <Navbar color="faded" light={true} expand="md">
                        <NavbarBrand href="/">
                            <img src={require('../assets/img/logo_icon_white.png')} className="brand-logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar={true}>
                            <Nav className="ml-auto" navbar={true}>
                                <NavItem>
                                    <NavLink href="/marketplace">
                                        MARKETPLACE
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/whitepaper">
                                        WHITEPAPER
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">
                                        BLOG
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/twitter">
                                        TWITTER
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}