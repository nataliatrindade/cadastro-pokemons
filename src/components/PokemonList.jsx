import { useEffect, useState } from "react";
import "./PokemonList.css"

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
        <h2>Pokémons cadastrados</h2>
        <table className="pokemon-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Poder</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon, i) => (
              <tr key={i}>
                <td>{pokemon.nome}</td>
                <td>{pokemon.tipo}</td>
                <td>{pokemon.poder}</td>
                <td>{pokemon.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
}

export default PokemonList;