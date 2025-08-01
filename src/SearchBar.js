import './SearchBar.css';

const SearchBar = ({searchTerm, onSearchChange}) => {

    const handleChange = (event) => {
        onSearchChange(event.target.value);
    }

    return (
        <div className="search-bar-container">
            <input className="search-bar-input" placeholder="search recipes..." type="text" value={searchTerm} onChange={handleChange}></input>
            {searchTerm && <button className="search-bar-button" onClick={() => onSearchChange("")}>Clear</button>}
        </div>
    )
}

export default SearchBar