const poke_Container = document.querySelector(".poke-container");

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
function fetchPokemon(id) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
	.then((res) => res.json())
	.then((data) => {
		createPokemon(data);
	});

}
function fetchPokemons(number){
	for(let i = 1; i <= number; i++){
	fetchPokemon(i);
	}
}
function createPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add('pokemon-block');
    card.style.backgroundColor = colors[pokemon.types[0].type.name]; // Asigna el color al fondo de la tarjeta

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(4, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const type = document.createElement('p');
    type.classList.add('type');
    type.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(', ')}`;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type);

    poke_Container.appendChild(card);
}


fetchPokemons(160);