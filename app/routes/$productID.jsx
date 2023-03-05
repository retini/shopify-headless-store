import {json} from 'react-router';
import {useLoaderData} from '@remix-run/react';
import {PRODUCT_QUERY} from '~/queries/product';
import ProductGallery from '../components/ProductGallery';

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

export default Product;
export {loader};
