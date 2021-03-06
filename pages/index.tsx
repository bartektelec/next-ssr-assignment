import * as React from 'react';
import Link from 'next/link';
import { Heading } from '../components';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<main className="container mx-auto">
			<Heading>๐ Hey now, you're an โญall-star</Heading>
			<Link href="/results">
				<a className="border-b border-blue-600 text-blue-600 hover:text-blue-400">
					Get your ๐ฎ game on, go ๐น play
				</a>
			</Link>
		</main>
	);
};

export default Home;
