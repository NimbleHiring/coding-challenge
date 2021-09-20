import React, { useState } from "react";

import CandidateTable from "./components/CandidateTable";
import SearchBar from "./components/SearchBar/SearchBar";

import CandidateData from "./data/candidates.json";

console.log(CandidateData);

// Get Candidate

function App() {
	const [candidates, setCandidates] = useState(CandidateData.results);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = (e) => {
		const input = e.target.value;
		if (!input) {
			return;
		}
		setSearchQuery(input);
	};

	const filteredCandidates = candidates.filter((candidate) => {
		// Filter by name
		if (searchQuery.includes(candidate.name.toLowerCase())) {
			return candidate;
		}
		// Filter by keyword (i've just chosen email for now)
		else if (searchQuery.includes(candidate.email.toLowerCase())) {
			return candidate;
		}
		return undefined;
	});

	return (
		<div style={{ width: "960px", margin: "0 auto" }}>
			<header>
				<h2>{candidates.length} Candiates</h2>
				<SearchBar searchQuery={searchQuery} />
			</header>
			<main>
				<CandidateTable candidates={candidates} />
			</main>
		</div>
	);
}

export default App;
