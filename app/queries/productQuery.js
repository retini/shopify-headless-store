const PRODUCT_QUERY = `#graphql
  query product($productHandle: String!) {
    product(handle: $productHandle) {
      id
      title
      handle
      vendor
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      options {
        name,
        values
      }
    }
  }
`;

export {PRODUCT_QUERY}