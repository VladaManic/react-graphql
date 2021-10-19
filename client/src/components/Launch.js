import React from 'react';
import { useQuery, ApolloConsumer, gql } from "@apollo/client";
import { Link, useParams } from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: Int!) {
    launch(flight_number: $id) {
      flight_number
      mission_name
			launch_year
			launch_success
      launch_date_local,
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
    }
  }
`;

const Launch = () => {
	let params = useParams()
	let id = parseInt(params.flight_number)
	const { loading, error, data } = useQuery(LAUNCH_QUERY, {variables: {id}})

	return (
		<div>
			{loading ? <p>Loading...</p> :
				<div>
					<h2>{data.launch.mission_name}</h2>
					<p>Date: {data.launch.launch_date_local}</p>
					<p>Rocket: {data.launch.rocket.rocket_name}</p>
					<Link to="/">Go Back</Link>
				</div>
			}
		</div>
	)
}

export default Launch
