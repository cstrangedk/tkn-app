import * as React from 'react';
import {
    FormGroup,
    Input,
    Label
} from 'reactstrap';

interface CheckboxProps {
    name: string;
    label: string;
    prepend?: string;
    checked?: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
    render() {
        return (
            <div>
                <FormGroup check={true}>
                    <Label className="checkbox-container" check={true}>
                        {this.props.label}
                        <Input
                            id={
                                this.props.prepend ?
                                this.props.prepend
                                + '-' + this.props.name
                                : this.props.name
                            }
                        />{' '}
                        <span className="checkmark" />
                    </Label>
                </FormGroup>
            </div>
        );
    }
}