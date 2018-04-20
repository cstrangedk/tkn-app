import * as React from 'react';
import {
    Col,
    Row
} from 'reactstrap';
import TopNavBar from './TopNavBar/TopNavBar';
import LeftNavBar from './LeftNavBar/LeftNavBar';

export default class PageLayout extends React.Component {
    public render() {
        return (
            <div>
                <TopNavBar />
                {this.props.children}
                <Row>
                    <Col xs="12" md="2">
                        <LeftNavBar />
                    </Col>
                    <Col xs="12" md="10">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}