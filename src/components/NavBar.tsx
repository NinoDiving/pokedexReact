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
	return (
		<>
			{pokemonList.map((pokemon, index) => (
				<button
					type="button"
					key={index}
					onClick={() => setPokemonIndex(index)}
				>
					{pokemon.name}
				</button>
			))}
		</>
	);
}
