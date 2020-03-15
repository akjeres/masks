import React from 'react';

export default class Card extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>{this.props.data.title}</div>
        );
    }
};