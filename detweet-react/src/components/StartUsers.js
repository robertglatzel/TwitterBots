import React from 'react';

const StartUsers = (props) => {
	return (
		<div className="instructions">
			<p>To begin filtering which users you don't interact with, please click the start button.</p>
			<button
				id="start-button"
				type="submit"
				className="ui basic button centered button-style"
				onClick={() => props.startButton(props.userType, props.selectionType)}
			>
				Start
			</button>
		</div>
	);
};

export default StartUsers;