import {Link} from '@remix-run/react';

function Index() {
  return (
    <div className="index">
      <div className="text">
        <p>
          This is a little demo of a SPA based on the Shopify Headless Stack
          (Hydrogen + Oxygen + GraphQL + Storefront API).
        </p>
        <p>
          The search functionality is based on Algolia and for this reason it
          can index the descriptions and attributes of the products.
        </p>
        <p>
          The augmented reality capabilities and 3D model visualization are
          native to Shopify.
        </p>
      </div>
      <Link to={`/devergo`} className="btn seeDemo">
        <span class="material-symbols-rounded">explore</span>
        <span>Dive in</span>
      </Link>
      <a
        className="btn seeSourceCode"
        href="https://github.com/retini/shopify-headless-store.git"
        target="_blank"
      >
        <img className="githubLogo" src="/github-mark.svg" alt="Github logo" />
        <span>Source Code</span>
      </a>
    </div>
  );
}

export default Index;
