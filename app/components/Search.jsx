function Search({onClose, isOpen}) {
  return (
    <div className={`search${isOpen ? ' open' : ''}`}>
      <button className="searchClose" onClick={onClose}>
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  );
}

export default Search;
