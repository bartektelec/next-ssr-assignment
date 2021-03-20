import * as React from 'react';
import axios from 'axios';
import { Heading } from '../components';

const fetchData = axios.create({
	baseURL: 'https://swapi.dev/api',
});

export interface ResultsProps {
	data: IStarWarsResponse;
}

const Results: React.FC<ResultsProps> = ({ data }) => {
	return (
		<main className="container mx-auto">
			<Heading>Results of some Star Wars peeps</Heading>
			<ul>
				{data.results.map((person) => (
					<li className="py-2 border-b border-black" key={person.url}>
						{person.name} - {person.height}cm tall, {person.mass}kg weight{' '}
						{Number(person.mass) > 100 && (
							<span className="font-medium text-red-500">
								He a heavy fella' 🤔
							</span>
						)}
					</li>
				))}
			</ul>
		</main>
	);
};

export async function getServerSideProps() {
	const response = await fetchData.get<IStarWarsResponse>('/people');
	const data = response.data;

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data,
		},
	};
}

export default Results;
