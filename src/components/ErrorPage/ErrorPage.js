import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css';

class ErrorPage extends React.Component {

  render() {

    return (
      <div className="error-page">
        <h1 className="error-page-header">Error</h1>
        <p  className="error-page-content">
            This page does not exist.
        </p>
        <p  className="error-page-content">
            <NavLink to="/">
                Go back to home.
            </NavLink>
        </p>
      </div>
    );

  }

}

export default ErrorPage;