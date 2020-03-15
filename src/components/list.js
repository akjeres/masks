import React from 'react';
import Card from './card';

import { dummy } from '../helpers/dummy'

export default class List extends React.Component {
    render() {
        //const { list } = this.props;
        const list = dummy.items;
        console.log(list);
        return (
            <div className="list">
                { list.map((i) => {
                    return <Card
                        key={ i.etag }
                        id={ i.id.videoId }
                        data={ i.snippet }
                    />
                }) }
            </div>
        );
    }
};