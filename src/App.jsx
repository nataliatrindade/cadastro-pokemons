import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import PokemonList from './components/PokemonList.jsx';

function App() {
  const [atualizarLista, setAtualizarLista] = useState(0);

  const handleAddPokemon = () => {
    setAtualizarLista((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Cadastro de Pokemóns</h1>
      <Form onAddPokemon={handleAddPokemon}/>
      <PokemonList atualizarLista={atualizarLista}/>
    </div>
  )
}

export default App
