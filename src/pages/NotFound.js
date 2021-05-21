import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/404Page.png';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <img
                    className="d-block"
                    src={notFound}
                    alt="404 Page not Found"
                />
                <div className="text-center">
                    <Link to="/" className="btn custom-btn d-inline-block">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
