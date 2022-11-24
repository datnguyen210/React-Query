import React from "react";
import { Link } from "react-router-dom";
import useSuperHeroesData from "../hooks/useSuperHeroesData";




export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log('Data fetched successfully!', data)
    }

    const onError = (err) => {
        console.log('Something went wrong!', err.message)
    }

    const { isLoading, data, isFetching, isError, error, refetch } = useSuperHeroesData(onSuccess, onError)
    if (isLoading || isFetching) {
        return (
            <h2>Loading ... </h2>
        )
    }

    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }

    return (
        <div>
            <h2>
                RQ SUPER HEROES PAGE
            </h2>
            <button onClick={refetch}>Fetch here</button>
            {data?.data.map((hero) => {
                return (
                    <div key={hero.name}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}