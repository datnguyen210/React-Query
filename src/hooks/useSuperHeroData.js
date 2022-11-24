import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHero = function ({ queryKey }) {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const useSuperHeroData = function (id, onSuccess, onError) {
    return useQuery(
        ['super-hero', id],
        fetchSuperHero,
        {
            onSuccess,
            onError,
            refetchOnWindowFocus: false
        })
}


export default useSuperHeroData