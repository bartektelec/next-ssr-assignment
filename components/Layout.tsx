import { Nav } from './';
import * as React from 'react';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default Layout;
