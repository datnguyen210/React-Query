import axios from "axios";
import { useMutation } from "react-query";

export const MutationPage = () => {
  const mutation = useMutation({
    mutationFn: (newProgrammingLanguage) => {
      console.log("ADDING...", newProgrammingLanguage);
      // This API is not working yet, but it show that useMutation is used to mutate data in the server (database)
      return axios.post("/programming-languages", newProgrammingLanguage);
    },
  });

  return (
    <div>
      {mutation.isLoading ? (
        "Adding..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occur: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? <div>Programming Language added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({
                id: Math.floor(Math.random() * 20 + 8),
                name: "HTML",
              });
            }}
          >
            Add HTML
          </button>
        </>
      )}
    </div>
  );
};
