import * as React from 'react';

export interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({ children }) => {
	return <h1 className="text-3xl font-bold pb-8 pt-16">{children}</h1>;
};

export default Heading;
