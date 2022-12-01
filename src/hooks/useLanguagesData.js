import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchLanguages = function (page) {
  return axios.get("http://localhost:4000/languages?_limit=2&_page=" + page);
};

const useLanguagesData = function () {
  const [pageNumber, setPageNumber] = useState(1);
  return useQuery({
    queryKey: ["languages", pageNumber],
    queryFn: () => fetchLanguages(pageNumber),
    keepPreviousData: true,
  });
};

export default useLanguagesData;
