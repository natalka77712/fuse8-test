import React from 'react';
import './estate.scss'
import {Link} from 'react-router-dom';

const unsplashImg = 'https://source.unsplash.com/400x250/?house'


const Estate = ({ house }) => {

    const {id, title, address, type, price } = house;

    const formatPrice = Number(price).toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0})

    return (
        <div className='estate-card'>
            <Link to={`/house/${id}`}>
                <div className="estate-card__wrapper">
                    <img src={`${unsplashImg}/${house.id}`} alt="Estate"/>
                    <p className={`estate-card__type estate-card__type--${type.toLowerCase()}`}>
                        {type === 'SupportAvailable' ? 'Restaurant & Support available' : 'Independent living'}
                    </p>
                </div>
                <div className="estate-card__info">
                    <h3 className="estate-card__title">{title}</h3>
                    <p className="estate-card__address">{address}</p>
                    <p className="estate-card__price">New Properties for Sale from<span>{formatPrice}</span></p>
                    <p className="estate-card__available">Shared Ownership Available</p>
                </div>
            </Link>
        </div>
    )
}

export default Estate;

