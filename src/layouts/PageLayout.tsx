import * as React from 'react';
import TopNavBar from './TopNavBar';

export default class PageLayout extends React.Component {
    public render() {
        return (
            <div>
                <TopNavBar />
                {this.props.children}
            </div>
        );
    }
}