import React from 'react';
import { useQuery, ApolloConsumer, gql } from "@apollo/client";

import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);

	// if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

	return (
		<div>
			<h2>Launches</h2>
			{loading ? <p>Loading...</p> :
				data.launches.map(launch => (
					<LaunchItem key={launch.flight_number} launch={launch} />
				))
			}
		</div>
	);
}

export default Launches
