import React from 'react';
import './header.css';
import instagram from '../../img/instagram.svg';
import Search from "../spinner/search";

export default class Header extends React.Component {
  constructor() {
      super();

      this.onChange = (e) => {
          e.preventDefault();
          const target = e.target;
          const value = target.value;
          console.log('value: ', value);
      };
  }

  render() {
      return (
          <header className="border border-light border-bottom header">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <nav className="header_navigation">
                              <div className="w-100 d-flex justify-content-between align-items-center">
                                  <span className="navbar-brand"><img src={ instagram } alt="Logo"/></span>
                                  <Search onChange={ this.onChange } />
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </header>
      );
  }
};