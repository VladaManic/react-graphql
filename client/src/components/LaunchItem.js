import React from 'react';
import { useQuery, ApolloConsumer, gql } from "@apollo/client";
import { Link } from 'react-router-dom';

const LaunchItem = (props) => {
	return (
		<div>
			<h3>{props.launch.mission_name}</h3>
			<p>Date: {props.launch.launch_date_local}</p>
			<Link to={`/launch/${props.launch.flight_number}`}>Details</Link>
		</div>
	)
}

export default LaunchItem
