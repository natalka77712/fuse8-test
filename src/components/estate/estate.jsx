import React, {useEffect, useRef} from 'react';

export const Court = ({ court }) => {

    const {courtId, title, address, type, price } = court;

    return (
        <div className='card'>
            <div className={}>{type === 'IndependentLiving' ? 'Independent living' : 'Restaurant & Support available'}</div>
        </div>
    )
}

