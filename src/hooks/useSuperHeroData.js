import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchSuperHero = function ({ queryKey }) {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const useSuperHeroData = function (id) {
    const queryClient = useQueryClient()
    return useQuery(
        ['super-hero', id],
        fetchSuperHero,
        {
            refetchOnWindowFocus: false,
            initialData: () => {
                return queryClient.getQueryData(['super-heroes'])?.data?.find((hero) => hero.id === parseInt(id))      
            }
        })
}

export default useSuperHeroData