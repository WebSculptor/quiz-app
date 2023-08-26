import axios from "api/axios";
import { useEffect, useState } from "react";

export const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setIsError(err))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, isError, isLoading };
};
