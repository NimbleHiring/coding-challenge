import React, { useState } from "react";

import CandidateTable from "./components/CandidateTable";
import SearchBar from "./components/SearchBar/SearchBar";

import CandidateData from "./data/candidates.json";

console.log(CandidateData);

// Get Candidate

function App() {
	const [candidates, setCandidates] = useState(CandidateData.results);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = (e) => setSearchQuery(e.target.value);

	const filteredCandidates = candidates.filter((candidate) => {
		if (!searchQuery) {
			return candidate;
		}

		// Filter by name
		if (candidate.name.toLowerCase().includes(searchQuery.toLowerCase())) {
			return candidate;
		}
		// Filter by keyword (i've just chosen email for now)
		else if (
			candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
		) {
			return candidate;
		}
		return undefined;
	});

	return (
		<div style={{ width: "960px", margin: "0 auto" }}>
			<header>
				<p>{candidates.length} Candiates</p>
				<SearchBar
					searchQuery={searchQuery}
					handleSearchQuery={handleSearchQuery}
				/>
			</header>
			<main>
				<CandidateTable candidates={filteredCandidates} />
			</main>
		</div>
	);
}

export default App;
