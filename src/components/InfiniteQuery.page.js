import axios from "axios";
import { useInfiniteQuery } from "react-query";

export const InfiniteQueryPage = () => {
  const fetchProgrammingLanguages = ({ pageParam = 1 }) => {
    return axios.get("http://localhost:4000/programmingLanguages/" + pageParam);
  };

  const {
    data,
    error,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    fetchNextPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
    hasPreviousPage,
    status,
  } = useInfiniteQuery({
    queryKey: "programming-languages",
    queryFn: fetchProgrammingLanguages,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 8) {
        return pages.length + 1;
      }
      return undefined;
    },
    // This is not the correct function, just to test
    getPreviousPageParam: (firstPage, pages) => {
      if (pages.length > 0) {
        return pages.length - 1;
      }
      return undefined;
    },
  });

  const skipToCursor5 = () => fetchNextPage({ pageParam: 5 });

  return data === undefined ? (
    <p>No data yet</p>
  ) : (
    <>
      {data?.pages?.map((smallData, i) => {
        const language = smallData.data;
        return <div key={i}>{language.name}</div>;
      })}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        <button
          onClick={() => fetchPreviousPage()}
          disabled={!hasPreviousPage || isFetchingPreviousPage}
        >
          {isFetchingPreviousPage
            ? "Loading previous..."
            : hasPreviousPage
            ? "Load Previous"
            : "Nothing previous to load more"}
        </button>
        <button onClick={skipToCursor5}>Skip to cursor 5</button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
