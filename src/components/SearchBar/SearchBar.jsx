import React from "react";

import "./SearchBar.styles.css";

function SearchBar({ searchQuery, handleSearchQuery }) {
	return (
		<input
			className="search-bar"
			placeholder="Search by candidate or keyword"
			value={searchQuery}
			onChange={handleSearchQuery}
		/>
	);
}

export default SearchBar;
