import React from "react";

import Candidate from "./Candidate/Candidate.jsx";

function CandidateTable({ candidates }) {
	return (
		<div>
			<header
				style={{
					borderBottom: "1px solid black",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<input type="checkbox" />
				</div>
				<div>
					<h3>Candidate Name</h3>
				</div>
				<div>
					<h3>Status</h3>
				</div>
				<div>
					<h3># Apps</h3>
				</div>
				<div>
					<h3>Last Action</h3>
				</div>
			</header>
			<section style={{ borderBottom: "1px solid black" }}>
				{candidates.map((candidate) => (
					<Candidate key={candidate.id} candidate={candidate} />
				))}
			</section>
		</div>
	);
}

export default CandidateTable;
