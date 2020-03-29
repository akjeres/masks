import React from 'react';
import './card.css';

export default class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-12 single-card">
                <div className="h-100">
                    <div className="h-100 card">
                        <img loading="lazy" src={this.props.data.thumbnails.high.url} className="card-img-top" alt={this.props.data.title} />
                        <div className="d-flex flex-column card-body">
                            <h5 className="card-title" dangerouslySetInnerHTML={{__html: this.props.data.title }} />
                            <p className="flex-grow-1 card-text">{this.props.data.description}</p>
                            <a href="#" className="btn btn-primary align-self-center">Play Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};