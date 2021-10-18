import React from 'react'

const LaunchItem = (props) => {
	console.log(props);
	return (
		<div>
			<h3>{props.launch.mission_name}</h3>
			<p>Date: {props.launch.launch_date_local}</p>
			<button>Details</button>
		</div>
	)
}

export default LaunchItem
