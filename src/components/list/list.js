import React from 'react';
import Card from '../card/';

export default class List extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div className="list">
                <div className="container">
                    <div className="row">
                        { list.map((i) => {
                            return <Card
                                key={ i.etag }
                                id={ i.id.videoId }
                                data={ i.snippet }
                            />
                        }) }
                    </div>
                </div>
            </div>
        );
    }
};