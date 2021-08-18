import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner";
import {fetchCourtTC} from "../court/court-reducer";
import {Court} from "../court/court";
import {Grid} from "@material-ui/core";

export const Development = () => {
    const dispatch = useDispatch()
    const courts = useSelector((state) => state.courts.homes)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)

        }, 1000)
        dispatch(fetchCourtTC())
    }, [dispatch])

    if (!isLoaded) {
        return <div><Spinner/></div>
    }
    return (
        <div>
            <h1 className='home__title'>Our Latest Developments</h1>
            <main className='home__content'>
                {courts?.slice(0, 6).map((court) => (
                    <Court
                        key={court.id}
                        court={court}
                    />
                ))}
            </main>

        </div>
    )
}
