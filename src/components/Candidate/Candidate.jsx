import React, { useState, useEffect } from "react";
import { Container, ToggleButton, AppList, AppItem } from "./Candidate.styles";

import moment from "moment";
// import { ReactComponent as MinusSign } from "../../ui-kit/icons/svg/icon-minus-with-circle.svg";
// import { ReactComponent as PlusSign } from "../../ui-kit/icons/svg/icon-plus-with-circle.svg";
// export { ReactComponent as RightCaret } from "../../ui-kit/icons/svg/right_caret.svg";

function Candidate({ candidate }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleCandidateApplications = () => {
		setIsOpen((prevState) => !prevState);
	};

	// const time = moment(message.createdAt).format("h:mm");

	// Find latest hiring status
	// const latestStatuses = candidate.applications.map(({}))

	return (
		<div>
			<Container
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<input type="checkbox" />
				</div>
				<div>
					<p>{candidate.name}</p>
				</div>
				<div>
					<p>{candidate.applications[0].new_status.label}</p>
				</div>
				<div>
					<p>{candidate.applications.length}</p>
				</div>
				<div>
					<p>{moment().fromNow(candidate.updated)}</p>
				</div>
				<div>
					<ToggleButton onClick={handleCandidateApplications}>
						{isOpen ? "-" : "+"}
					</ToggleButton>
				</div>
			</Container>
			{/* Candidate applications */}
			{isOpen && (
				<AppList
					style={{
						marginLeft: "20px",
						borderLeft: "5px solid lightgrey",
						paddingLeft: "0",
					}}
				>
					{candidate.applications.map((app) => (
						<AppItem
							style={{
								listStyleType: "none",
								border: "1px solid lightgrey",
								padding: "10px 0",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
							key={app.id}
						>
							<div style={{ flexGrow: 1, padding: "0 10px" }}>
								<span>{app.role.title}</span>
							</div>
							<div style={{ flexGrow: 1 }}>
								<span>{app.new_status.label}</span>
							</div>
							<div style={{ flexShrink: 1, justifySelf: "end" }}>{" > "}</div>
						</AppItem>
					))}
				</AppList>
			)}
		</div>
	);
}

export default Candidate;
