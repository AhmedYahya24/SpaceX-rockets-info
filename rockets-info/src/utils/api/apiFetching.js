import React from "react";
import gql from "graphql-tag";
import {} from "../useGQLQuery/useGQLQuery";

const GET_LAUNCHES = gql`
  query {
    launchesPastResult {
      data {
        launch_year
        launch_success
      }
    }
  }
`;
const GET_LAUNCHE = gql`
 query() {

 }
 `;

const apiFetching = () => {
  const { data, isLoading, isError } = useGQLQuery("launches", GET_LAUNCHES);
  console.log("datd", data);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Somthing went wrong...</div>;
  }
  return <div>apiFetching</div>;
};

export default apiFetching;
