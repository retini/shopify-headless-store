function Hit({hit}) {
  console.log(hit);
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <h1>{hit['Title']}</h1>
      <p>${hit['Variant Price']}</p>
    </article>
  );
}

export default Hit;
