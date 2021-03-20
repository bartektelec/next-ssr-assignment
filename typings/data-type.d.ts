interface IStarWarsPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: Array<string>;
	species: Array<unknown>;
	vehicles: Array<string>;
	starships: Array<string>;
	created: string;
	edited: string;
	url: string;
}

interface IStarWarsResponse {
	count: number;
	next: string;
	previous: string;
	results: Array<IStarWarsPerson>;
}
