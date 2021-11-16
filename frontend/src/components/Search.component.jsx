import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/theme';

const Search = ({handleSearch}) => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

    const HandleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.search.value
        handleSearch(value)
    }
  return (
    <form class="form-inline row mt-5 w-50 container m-auto text-center" onSubmit={HandleSubmit}>
      <div className="col ">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="search"
      />
      </div>
      <div className="col">
      <button class={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} my-2 my-sm-0`} type="submit">
        Search
      </button>
      </div>
    </form>
  );
};

export default Search