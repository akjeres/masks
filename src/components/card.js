import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="mb-4 col-lg-4 col-md-6 col-12">
                <div className="h-100">
                    <div className="h-100 card">
                        <img loading="lazy" src={this.props.data.thumbnails.high.url} className="card-img-top" alt={this.props.data.title} />
                        <div className="d-flex flex-column card-body">
                            <h5 className="card-title">{this.props.data.title}</h5>
                            <p className="flex-grow-1 card-text">{this.props.data.description}</p>
                            <a href="#" className="btn btn-primary align-self-center">Play Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};