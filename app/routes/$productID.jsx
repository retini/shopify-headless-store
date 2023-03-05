import {useState} from 'react';
import {json} from 'react-router';
import {useLoaderData} from '@remix-run/react';
import {PRODUCT_QUERY} from '~/queries/product';
import ProductGallery from '../components/ProductGallery';
import FloatingButton from '~/components/FloatingButton';
import Search from '~/components/Search';

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
  let [isSearchOpen, setIsSearchOpen] = useState(false);

  let {product} = useLoaderData();
  if (product == null) {
    return <div className="notFound">notFound</div>;
  }
  return (
    <div className="product">
      This is the product with title "{product.title}"
      <ProductGallery media={product.media.nodes} />
      <FloatingButton onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <span className="material-symbols-rounded">search</span>
      </FloatingButton>
      <Search
        onClose={() => setIsSearchOpen(false)}
        isOpen={isSearchOpen}
      ></Search>
    </div>
  );
}

export default Product;
export {loader};
