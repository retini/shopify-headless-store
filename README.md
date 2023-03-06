# Shopify Headless Store

This is a little demo of a SPA based on the Shopify Headless Stack (Hydrogen + Oxygen + GraphQL + Storefront API).

The search functionality is based on Algolia and for this reason it can index the descriptions and attributes of the products.

The augmented reality capabilities and 3D model visualization are native to Shopify.

## Documentation

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)

[Read the Algolia documentation](https://www.algolia.com/doc/)

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

```bash
git clone https://github.com/retini/shopify-headless-store.git
npm install
```

Add the `.env` file (check Hydrogen docs) in the root directory. Update the `.env` file with your shop's domain and Storefront API token.

Import your shop's products into Algolia and update the application key, the API key and `indexName` prop in the route `$productHandle.jsx`.

```bash
npm run dev
```
