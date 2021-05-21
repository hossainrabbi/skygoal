import React from 'react';
import CountUp from 'react-countup';

const CountUpContent = ({ count, title }) => {
    return (
        <div className="get-to-know text-center d-flex justify-content-center align-items-center">
            <div>
                <CountUp className="count" duration={3} end={count} />
                <h5 className="mb-0">{title}</h5>
            </div>
        </div>
    );
};

export default CountUpContent;
