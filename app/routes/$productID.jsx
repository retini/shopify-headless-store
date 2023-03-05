import {useState} from 'react';
import {json} from 'react-router';
import {useLoaderData} from '@remix-run/react';
import {PRODUCT_QUERY} from '~/queries/productQuery';
import ProductGallery from '../components/ProductGallery';
import FloatingButton from '~/components/FloatingButton';
import Search from '~/components/Search';
import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web';
import Hit from '~/components/Hit';

const searchClient = algoliasearch(
  'XS4ZQWA350',
  '605f4985d24e123ca10a35696508211d',
);

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
      <ProductGallery media={product.media.nodes} />
      <div className="title heading">{product.title}</div>
      <Search onClose={() => setIsSearchOpen(false)} isOpen={isSearchOpen}>
        <InstantSearch
          searchClient={searchClient}
          indexName="shopify-headless-store"
        >
          <SearchBox placeholder="Sedia da ufficio" />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Search>
      <FloatingButton onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <span className="material-symbols-rounded">search</span>
      </FloatingButton>
    </div>
  );
}

export default Product;
export {loader};
