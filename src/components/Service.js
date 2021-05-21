import React from 'react';

const Service = ({ icon, title, info }) => {
    return (
        <article className="service text-center d-flex justify-content-center align-items-center">
            <div>
                <div className="service-icon">
                    <img src={icon} alt={title} />
                </div>
                <h5>{title}</h5>
                <p className="mt-2 mb-0">{info}</p>
            </div>
        </article>
    );
};

export default Service;
