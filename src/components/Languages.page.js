import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchLanguages = function (page) {
  return axios.get("http://localhost:4000/languages?_limit=2&_page=" + page);
};

const useLanguagesData = function (pageNumber) {
  return useQuery({
    queryKey: ["languages", pageNumber],
    queryFn: () => fetchLanguages(pageNumber),
    keepPreviousData: true,
  });
};

export const LanguagesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error } = useLanguagesData(pageNumber);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const languages = data?.data;
  return (
    <div>
      {languages.map((language) => (
        <h1 key={language.id}>{language.nativeName}</h1>
      ))}
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber === 2}
      >
        Next
      </button>
    </div>
  );
};
