import React from 'react';
import error404 from '../../img/error-404.jpg'

const Error404 = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={error404} alt="imagen de error404"></img>
        </div>
    );
};

export default Error404;