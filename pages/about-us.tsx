import * as React from 'react';
import { Heading } from '../components';
import axios from 'axios';

export interface AboutUsProps {
	data: string[];
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
	return (
		<main className="container mx-auto">
			<Heading>Here is some server side generated bacon ipsum</Heading>
			<div className="max-w-prose mx-auto">
				{data.map((lorem) => (
					<p>{lorem}</p>
				))}
			</div>
		</main>
	);
};

export async function getServerSideProps() {
	const num = Math.ceil(Math.random() * 5);
	const res = await axios.get(
		`https://baconipsum.com/api/?type=all-meat&paras=${num}&start-with-lorem=1`
	);

	const { data } = res;

	return {
		props: {
			data,
		},
	};
}

export default AboutUs;
