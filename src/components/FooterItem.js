import React from 'react';
import { Link } from 'react-router-dom';

const FooterItem = ({ title, pageList }) => {
    return (
        <article className="footer-item">
            <h5>{title}</h5>
            <ul>
                {pageList.map(({ listId, name, url }) => (
                    <li key={listId}>
                        <Link className="footer-list" to={url}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default FooterItem;
