import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = function ({ queryKey }) {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

const useSuperHeroData = function (id) {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", id], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData(["super-heroes"])
        ?.data?.find((hero) => hero.id === parseInt(id));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        console.log("No hero found!");
        return undefined;
      }
    },
  });
};

export default useSuperHeroData;
