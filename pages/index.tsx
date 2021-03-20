import * as React from 'react';
import Link from 'next/link';
import { Heading } from '../components';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<main className="container mx-auto">
			<Heading>🖐 Hey now, you're an ⭐all-star</Heading>
			<Link href="/results">
				<a className="border-b border-blue-600 text-blue-600 hover:text-blue-400">
					Get your 🎮 game on, go 🕹 play
				</a>
			</Link>
		</main>
	);
};

export default Home;
