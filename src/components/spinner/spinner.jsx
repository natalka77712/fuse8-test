import React from 'react';
import './spinner.scss';


const Spinner = () => {
    return (
        <div className="spinner" style={{margin: '25% 50%'}}>
            <div className="spinner-circle spinner-circle-outer"></div>
            <div className="spinner-circle-off spinner-circle-inner"></div>
            <div className="spinner-circle spinner-circle-single-1"></div>
            <div className="spinner-circle spinner-circle-single-2"></div>
            <div className="text"><p>Loading...</p></div>
        </div>
    );
}

export default Spinner;
