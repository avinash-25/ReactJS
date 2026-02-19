import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("");

    console.log("Search Rendered");

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    }

  return (
      <div id="search-component">
          <input
              placeholder='search here...'
              type="text"
              value={search}
              onChange={handleChange}
          />

          <button>🔍</button>
    </div>
  )
}

export default SearchBar
