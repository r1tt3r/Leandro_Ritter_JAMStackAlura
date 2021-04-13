import CMSGraphQLClient, { gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ preview }) {
  const query = gql`
    {
      allProjects {
        id
        slug
        projectDescription
        projectImage {
          alt
          filename
          url
        }
        projectTitle
      }
    }
  `;

  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.messages;
}
