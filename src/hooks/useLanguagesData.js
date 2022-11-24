import axios from "axios"
import { useQuery } from "react-query"

const fetchLanguages = function () {
    return axios.get('http://localhost:4000/languages')
}

const useLanguagesData = function () {
    return useQuery(
        'languages',
        fetchLanguages,
    )
}


export default useLanguagesData