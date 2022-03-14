import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://api.spacex.land/graphql/";

const gqlFun = async () => {
  return await request(
    endpoint,
    gql`
      {
        launchesPastResult {
          data {
            launch_year
            launch_success
            rocket {
              first_stage {
                cores {
                  flight
                  land_success
                  reused
                }
              }
              fairings {
                reused
              }
              rocket_name
              rocket {
                active
                cost_per_launch
                mass {
                  kg
                  lb
                }
                diameter {
                  feet
                  meters
                }
                country
                name
                success_rate_pct
              }
            }
            links {
              mission_patch_small
              wikipedia
              article_link
              reddit_media
              video_link
              mission_patch
            }
            launch_site {
              site_name
            }
            launch_date_local
            upcoming
            mission_name
          }
        }
      }
    `
  );
};
export const useReactQuery = () => {
  const { data, status, isError } = useQuery("fetchData", gqlFun, {
    cacheTime: 5000,
  });
  return { data, status, isError };
};
