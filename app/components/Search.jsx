function Search({onClose, isOpen, children}) {
  return (
    <div className={`search${isOpen ? ' open' : ''}`}>
      <button className="searchClose" onClick={onClose}>
        <span className="material-symbols-rounded">close</span>
      </button>
      test
      {children}
    </div>
  );
}

export default Search;
