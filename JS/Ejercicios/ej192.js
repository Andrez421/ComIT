async function fetchPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
            throw new Error('Error de red ' + response.statusText);
        }
        const data = await response.json();
        const pokemons = data.results.slice(0, 20);
        pokemons.forEach(pokemon => {
            const name = pokemon.name;
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
            console.log(`Pokemon: ${formattedName}`);
        });
    } catch (error) {
        console.error('Hay un problema con tu la búsqueda:', error);
        document.body.innerHTML = `<p>Hay un problema con tu la búsqueda: ${error.message}</p>`;
    }
}

fetchPokemons();