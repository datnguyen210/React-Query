import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"


const fetchLanguage = (id) => {
    return axios.get(`http://localhost:4000/languages/${id}`)
}

const fetchGreeting = (nativeName) => {
    return axios.get(`http://localhost:4000/greetings/${nativeName}`)
}

export const GreetingsPage = () => {

    const params = useParams();
    const id = params.id;

    const { data } = useQuery(['language', id], () => fetchLanguage(id))

    const nativeName = data?.data.nativeName

    const { data: greetingData } = useQuery(['greeting', nativeName], () => fetchGreeting(nativeName), {
        enabled: !!nativeName
    })

    const greeting = greetingData?.data.greeting;
    return (
        <div>
            {nativeName} says: {greeting}
        </div>
    )
}