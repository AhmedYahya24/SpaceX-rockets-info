import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = "https://api.spacex.land/graphql/";

  const fetchData = async () => {
    const response = await request(endpoint, query, variables);
    console.log(response);
    return response;
  };

  return useQuery(key, fetchData, config);
};
