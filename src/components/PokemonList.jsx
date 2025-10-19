import { useEffect, useState } from "react";

const PokemonList = ({ atualizarLista }) => {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
      const pokemonsLocalStorage = JSON.parse(localStorage.getItem("pokemons")) || []
      setPokemons(pokemonsLocalStorage)
    }, [atualizarLista])

    if (pokemons.length == 0) {
      return <p>Sem Pokemóns cadastrados</p>
    }

      return (
        <div>
          <h2>Pokemóns cadastrados</h2>
          <ul>
            {pokemons.map((pokemon, i) => (
              <li key={i}>
                  {pokemon.nome} - {pokemon.tipo} - {pokemon.poder}
                  <br />
                  {pokemon.descricao}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default PokemonList;