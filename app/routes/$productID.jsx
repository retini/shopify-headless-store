import {json} from 'react-router';
import {useLoaderData} from '@remix-run/react';
import {MediaFile} from '@shopify/hydrogen-react';

async function loader({request, context, params}) {
  let {productID} = params;
  let {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      productID: `gid:\/\/shopify\/Product\/${productID}`,
    },
  });

  return json({
    product: product,
  });
}

function Product() {
  let {product} = useLoaderData();
  if (product == null) {
    return <div className="notFound">notFound</div>;
  }
  return (
    <div className="product">
      This is the product with name {product.handle}{' '}
      <ProductGallery media={product.media.nodes} />
    </div>
  );
}

function ProductGallery({media}) {
  if (!media.length) {
    return null;
  }

  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };

  return (
    <div>
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === 'MODEL_3D') {
          extraProps = {
            interactionPromptThreshold: '0',
            ar: true,
            loading: 'eager',
            disableZoom: true,
            style: {height: '100%', margin: '0 auto'},
          };
        }

        const data = {
          ...med,
          __typename: typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        };

        return (
          <div key={data.id || data.image.id}>
            <MediaFile tabIndex="0" data={data} {...extraProps} />
          </div>
        );
      })}
    </div>
  );
}

const PRODUCT_QUERY = `#graphql
  query product($productID: ID) {
    product(id: $productID) {
      id
      title
      handle
      vendor
      descriptionHtml
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

export default Product;
export {loader};
