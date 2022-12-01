import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = function () {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperHeroesData = function (onSuccess, onError) {
  return useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export default useSuperHeroesData;
