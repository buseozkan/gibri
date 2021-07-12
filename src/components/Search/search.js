import "./search.css";

const SearchBar = () => (
  <form action="https://google.com/search" method="get" className="searchbar">
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input type="text" id="header-search" placeholder="Search Here" name="s" />
  </form>
);

export default SearchBar;
