import { gql } from "graphql-request";

export const getByCategory = gql`
query getByCategory($selectedCat : String!){
    articles(where: {category: $selectedCat}) {
      articleContent
      headline
      createdAt
      category
      media {
        url
      }
    }
  }
  
`