import * as React from 'react';
import {
    Col,
    Row
} from 'reactstrap';
import TopNavBar from '../TopNavBar/TopNavBar';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import './PageLayout.css';

export default class PageLayout extends React.Component {
    public render() {
        return (
            <div>
                <TopNavBar />
                <Row>
                    <Col xs="12" md="2">
                        <LeftNavBar />
                    </Col>
                    <Col xs="12" className="right-container">
                        <div className="main-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}