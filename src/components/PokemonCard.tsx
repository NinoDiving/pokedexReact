interface PokemonProps {
	name: string;
	imgSrc?: string;
}
export default function PokemonCard({ name, imgSrc }: PokemonProps) {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt="Bulbasaur" /> : <p>???</p>}

			<figcaption>{name}</figcaption>
		</figure>
	);
}
