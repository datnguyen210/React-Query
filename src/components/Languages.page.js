import useLanguagesData from "../hooks/useLanguagesData"

export const LanguagesPage = () => {
    const {isLoading, data, isError, error} = useLanguagesData()
    if(isLoading) {
        return <h1>Loading</h1>
    }
    if(isError) {
        return <h1>{error.message}</h1>
    }
    const languages = data?.data
    return (
        <div>
            {languages.map(language => <h1 key={language.id}>{language.nativeName}</h1>)}
        </div>
    )
}