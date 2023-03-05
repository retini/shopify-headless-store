function Hit({hit}) {
  console.log(hit);
  return (
    <article>
      <img src={hit['Image Src']} alt={hit['Image Alt Text']} />
      <h1 className="title heading">{hit['Title']}</h1>
      <p className="price">${hit['Variant Price']}</p>
    </article>
  );
}

export default Hit;
