import React from "react";

import Candidate from "./Candidate";

function CandidateTable({ candidates }) {
	return (
		<div>
			{candidates.map((candidate) => (
				<Candidate key={candidate.id} candidate={candidate} />
			))}
		</div>
	);
}

export default CandidateTable;
