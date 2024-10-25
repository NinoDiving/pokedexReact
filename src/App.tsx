import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const handleClickNext = () => {
		setPokemonIndex((prevIndex) =>
			prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const handleClickPrev = () => {
		setPokemonIndex((prevIndex) =>
			prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1,
		);
	};

	return (
		<>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			<button type="button" onClick={handleClickNext}>
				Suivant
			</button>
			<button
				type="button"
				onClick={() => handleClickPrev(setPokemonIndex + 1)}
			>
				Précédent
			</button>
		</>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

export default App;
