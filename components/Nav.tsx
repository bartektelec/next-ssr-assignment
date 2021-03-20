import * as React from 'react';
import Link from 'next/link';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
	return (
		<nav className="p-4 bg-blue-900 text-gray-200">
			<ul className="container mx-auto flex gap-4">
				<li>
					<Link href="/">
						<a className="hover:text-white">Home</a>
					</Link>
				</li>
				<li>
					<Link href="/results">
						<a className="hover:text-white">Results</a>
					</Link>
				</li>
				<li>
					<Link href="/about-us">
						<a className="hover:text-white">About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
