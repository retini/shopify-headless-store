import {Link} from '@remix-run/react';
import {useHits} from 'react-instantsearch-hooks';

function CustomHit({hit, onClick}) {
  return (
    <article className="hit" onClick={onClick}>
      <img src={hit['Image Src']} alt={hit['Image Alt Text']} />
      <h1 className="title heading">{hit['Title']}</h1>
      <p className="price">${hit['Variant Price']}</p>
      <Link
        to={`/${hit['Handle']}`}
        preventScrollReset
        replace
        onClick={onClick}
      ></Link>
    </article>
  );
}

const Hits = ({onClick}) => {
  const {hits} = useHits();

  return (
    <div className="hits">
      {hits.map((hit) => (
        <CustomHit key={hit.objectID} hit={hit} onClick={onClick} />
      ))}
    </div>
  );
};

export default Hits;
