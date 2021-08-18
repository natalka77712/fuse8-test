import React from 'react';
import './estate-empty.scss'

const EstateEmpty = () => {

    return (
        <div className="estate">
            <div className="estate__places-container estate__places-container--empty container">
                <section className="estate__no-places">
                    <div className="estate__status-wrapper tabs__content">
                        <b className="estate__status">No places to stay available</b>
                        <p className="estate__status-description">We could not find any property available at the moment</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EstateEmpty;
