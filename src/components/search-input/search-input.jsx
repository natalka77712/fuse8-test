import React from 'react';
import './search-input.scss';

const SearchInput = ({setInput}) => {

    const handleSearchInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="search-input">
            <label className="search-input__label" htmlFor="filter">Filter</label>
            <input className="search-input__in" type="text" id="filter" onChange={handleSearchInput}/>
        </div>
    )
}

export default SearchInput;
