interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

export default function NavBar({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) {
	const handleClickNext = () => {
		setPokemonIndex(
			pokemonIndex === pokemonList.length - 1 ? 0 : pokemonIndex + 1,
		);
	};

	const handleClickPrev = () => {
		setPokemonIndex(
			pokemonIndex === pokemonList.length - 1 ? 0 : pokemonIndex - 1,
		);
	};

	return (
		<>
			<button type="button" onClick={handleClickNext}>
				Suivant
			</button>
			<button type="button" onClick={handleClickPrev}>
				Précédent
			</button>
		</>
	);
}
