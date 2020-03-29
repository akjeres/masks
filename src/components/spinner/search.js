import React from "react";

export default class Search extends React.Component {
    render() {
        return (
            <div className="form-inline">
                <input
                    onChange={ this.props.onChange }
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
            </div>
        );
    };
};