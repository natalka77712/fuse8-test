import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEstateTC} from "../estate/estate-reducer";
import Estate from "../estate/estate";
import SearchInput from "../search-input/search-input";
import Spinner from "../spinner/spinner";
import filterByTitle from "../../utils";
import EstateEmpty from "../estate-empty/estate-empty";
import './development.scss';

const Development = () => {
    const MAX_ESTATE_COUNT = 6
    const dispatch = useDispatch()
    const estate = useSelector((state) => state.estate.homes)
    const [isLoaded, setIsLoaded] = useState(false)
    const [input, setInput] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)

        }, 1000)
        dispatch(fetchEstateTC())
    }, [dispatch])

    const filteredEstate = filterByTitle(estate, input)

    if (!isLoaded) {
        return <div><Spinner/></div>
    }

    return (
        <div className="development">
            <div className="development__container container">
                <h1 className='development__title'>Our Latest Developments</h1>
                <SearchInput setInput={setInput} />
                    <ul className='development__list'>
                        {filteredEstate ?
                            filteredEstate.slice(0, MAX_ESTATE_COUNT).map((house) => (
                                <li key={house.id} className="development__item">
                                    <Estate house={house} />
                                </li>
                            ))
                                    : <EstateEmpty />
                        }
                    </ul>
                <button className="development__btn">See more</button>
            </div>
        </div>
    )
}

export default Development;
