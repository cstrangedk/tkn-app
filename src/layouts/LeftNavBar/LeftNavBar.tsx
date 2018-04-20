import * as React from 'react';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import './LeftNavBar.css';

export default class LeftNavBar extends React.Component {
    render() {
        const isMobile: boolean = window.innerWidth <= 500;
        return (
            <div className="left-nav-bar">
                <Nav>
                    <Row>
                        <Col xs="4" md="12" className="top-nav-item">
                            <NavItem>
                                <NavLink href="#">Dashboard</NavLink>
                            </NavItem>
                        </Col>
                        <Col xs="4" md="12">
                            <NavItem>
                                <NavLink href="#">Earn{!isMobile}</NavLink>
                            </NavItem>
                        </Col>
                        <Col xs="4" md="12">
                            <NavItem>
                                <NavLink href="#">Sell{!isMobile}</NavLink>
                            </NavItem>
                        </Col>
                    </Row>
                </Nav>
            </div>
        );
    }
}