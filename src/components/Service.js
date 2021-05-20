import React from 'react';

const Service = ({ icon, title, info }) => {
    return (
        <article className="service text-center my-4">
            <div className="service-icon">
                <img src={icon} alt={title} />
            </div>
            <h5>{title}</h5>
            <p className="mt2 mb-0">{info}</p>
        </article>
    );
};

export default Service;
