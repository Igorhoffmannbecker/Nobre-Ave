import { GraphQLClient } from "graphql-request";
export async function fetchCmsAPI(query, variables) {
  const client = new GraphQLClient("https://graphql.datocms.com/", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      authorization: `Bearer ${process.env.NEXT_DATOCMS_READ_ONLY_API_TOKEN}`
    }
  });
  return await client.request(query, variables);
}

export default fetchCmsAPI