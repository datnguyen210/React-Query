import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
  const params = useParams();
  const id = params.id;

  const onSuccess = (data) => {
    console.log("Data fetched successfully!", data);
  };

  const onError = (err) => {
    console.log("Something went wrong!", err.message);
  };
  const { isLoading, data, isFetching, isError, error, refetch } =
    useSuperHeroData(id, onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading ... </h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ SUPER HEROES PAGE</h2>
      <button onClick={refetch}>Fetch here</button>
      {data?.data && (
        <div>
          {data.data.name} - {data.data.alterEgo}
        </div>
      )}
    </div>
  );
};
