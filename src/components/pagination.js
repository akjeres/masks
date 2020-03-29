import React from "react";

export default class Pagination extends React.Component {
    render() {
        const {
            prev_page,
            page,
            pageToken,
            next_page,
            total,
            results,
            increasePage,
            decreasePage,
        } = this.props;
        const prev_button_condition = prev_page && (pageToken !== prev_page);
        const next_button_condition = next_page && (total === results);
        const extra_className = (condition) => condition ? '' : 'disabled';

        const result = (
            <div className="pagination_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <nav className="d-flex justify-content-center">
                                <ul className="pagination">
                                    <li className={`page-item ${ extra_className(prev_button_condition) }`}>
                                        <button className="page-link" aria-label="Previous" onClick={ prev_button_condition ? decreasePage : null } disabled={ !prev_button_condition }>
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </button>
                                    </li>
                                    <li className="page-item disabled"><span className="page-link">&hellip;</span></li>
                                    <li className="page-item active"><span className="page-link">{ page }</span></li>
                                    <li className="page-item disabled"><span className="page-link">&hellip;</span></li>
                                    <li className={`page-item ${ extra_className(next_button_condition) }`}>
                                        <button className="page-link" aria-label="Next" onClick={ next_button_condition ? increasePage : null } disabled={ !next_button_condition }>
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            prev_button_condition || next_button_condition ? result : null
        );
    }
}