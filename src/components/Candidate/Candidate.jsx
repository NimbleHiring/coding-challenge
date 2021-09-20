import React, { useState, useEffect } from "react";

import { Modal } from "../../ui-kit/index.js";

import "./Candidate.styles.css";
import { roleStatuses, colorMapping } from "../../utils/enums";

import moment from "moment";

function Candidate({ candidate }) {
	const [openAppList, setOpenAppList] = useState(false);
	const [modal, setModal] = useState(false);
	const [hiringStatus, setHiringStatus] = useState({});

	const getCandidateStatus = (status) => {
		for (let key in roleStatuses) {
			if (roleStatuses.hasOwnProperty(key)) {
				if (roleStatuses[key] === status) {
					setHiringStatus(roleStatuses[key]);
				}
			}
		}
	};

	const handleCandidateApplications = () =>
		setOpenAppList((prevState) => !prevState);

	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);

	useEffect(() => {
		getCandidateStatus(candidate.applications[0].new_status.label);
	}, []);

	return (
		<>
			<div className="container">
				<div>
					<input type="checkbox" />
				</div>
				<div>
					<p>{candidate.name}</p>
				</div>
				<div>
					<p>
						{} {candidate.applications[0].new_status.label}
					</p>
				</div>
				<div>
					<p>{candidate.applications.length}</p>
				</div>
				<div>
					<p>{moment().from(candidate.updated)}</p>
				</div>
				<div>
					<button
						className="toggle-button"
						onClick={handleCandidateApplications}
					>
						{openAppList ? "-" : "+"}
					</button>
				</div>
			</div>
			{/* Candidate applications */}
			{openAppList && (
				<ul className="app-list">
					{candidate.applications.map((app) => (
						<li className="app-item" key={app.id}>
							<div style={{ flexGrow: 1, padding: "0 10px" }}>
								<span>{app.role.title}</span>
							</div>
							<div style={{ flexGrow: 1 }}>
								<span>{app.new_status.label}</span>
							</div>
							<div
								onClick={openModal}
								style={{ flexShrink: 1, justifySelf: "end" }}
							>
								{modal ? " ^ " : " > "}
							</div>
							<Modal.Modal isOpen={modal} onClose={closeModal}>
								<Modal.Title>{app.role.title}</Modal.Title>
								<Modal.Body>Applied Candidate: {candidate.name}</Modal.Body>
								<Modal.Actions>
									<button onClick={closeModal}>Close</button>
								</Modal.Actions>
							</Modal.Modal>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default Candidate;
