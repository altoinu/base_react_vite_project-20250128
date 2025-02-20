import useFetch from "./useFetch.mjs";

function useGetConfig() {
  return useFetch({
    method: "GET",
    url: "http://localhost:4000/config.json",
  });
}

export default useGetConfig;
