export default function PokemonCard() {
	const pokemon = pokemonList[0];
	return (
		<figure>
			{pokemon.imgSrc === pokemonList[0].imgSrc ? (
				<img src={pokemon.imgSrc} alt="Bulbasaur" />
			) : (
				<p>???</p>
			)}

			<figcaption>{pokemon.name}</figcaption>
		</figure>
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
