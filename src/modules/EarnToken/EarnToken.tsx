import * as React from 'react';
import {
    Button,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Row
} from 'reactstrap';
import Header from '../../components/Header/Header';
import Checkbox from '../../components/Checkbox/Checkbox';
import SmallDescription from '../../components/SmallDescription/SmallDescription';
import './EarnToken.css';

export default class EarnToken extends React.Component {
    render() {
        return (
            <div>
                <Header title={'Earn tokens'} description={'Here\'s a quick description of how to earn a token'}/>
                <Row>
                    <Col xs="12" md="6" className="left-form">
                        <Form>
                            <FormGroup>
                                <Label for="amount">
                                    Amount
                                </Label>
                                <Row>
                                    <Col xs="9">
                                        <Input
                                            type="text"
                                            name="amount"
                                            id="request-amount"
                                            placeholder="0.00"
                                            className="width-95"
                                        />
                                    </Col>
                                    <Col xs="3">
                                        <Input type="select" name="choice" id="request-choice">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <div className="margin-top-30">
                                <Checkbox name="checkbox" prepend="earn" label="checkbox" />
                            </div>
                            <SmallDescription
                                description={'A quick, layman\'s definition of how to earn tokens goes here.'}
                            />
                            <div className="margin-top-30">
                                <Button className="button" id="earn-token">Earn Token</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}