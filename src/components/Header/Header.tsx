import * as React from 'react';

interface HeaderProps {
    title: string;
    description: string;
}

export default class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="description">{this.props.description}</div>
            </div>
        );
    }
}