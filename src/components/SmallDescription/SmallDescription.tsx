import * as React from 'react';

interface Props {
    description: string;
}

export default class SmallDescription extends React.Component<Props, {}> {
    render() {
        return (
            <div className="small-description">
                {this.props.description}
            </div>
        );
    }
}