import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Form = ({ onAddPokemon  }) => {
    const notificacaoSucesso = () => toast.success("Pokémon cadastrado!");

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [poder, setPoder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cadastrando Pokemon");
        console.log(nome, tipo, descricao, poder);

        if (!nome || !tipo || !descricao || !poder) {
            toast.error("Preencha todos os campos!")
            return
        }

        const novoPokemon = {
            nome,
            tipo,
            descricao,
            poder
        }

        console.log(novoPokemon)

        const pokemonsLocalStorage = JSON.parse(localStorage.getItem("pokemons")) || []
        const pokemonsListaAtualizada = [...pokemonsLocalStorage, novoPokemon]
        localStorage.setItem("pokemons", JSON.stringify(pokemonsListaAtualizada))

        onAddPokemon(novoPokemon)

        setNome("");
        setTipo("");
        setDescricao("");
        setPoder("");
        notificacaoSucesso();
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome do Pokémon </label>
              <input
                type="text"
                name="nome"
                placeholder="Pokémon"
                onChange={(e) => { setNome(e.target.value) }
                    }
                value={nome}
              />
            </div>
    
            <label>
              Tipo
              <select name="tipo" onChange={(e) => setTipo(e.target.value)} value={tipo}>
                <option value="">Selecione um tipo</option>
                <option value="normal">Normal ⚪</option>
                <option value="fogo">Fogo 🔥</option>
                <option value="agua">Água 💧</option>
                <option value="grama">Grama 🌿</option>
                <option value="elétrico">Elétrico ⚡</option>
                <option value="gelo">Gelo ❄️</option>
                <option value="lutador">Lutador 🥊</option>
                <option value="veneno">Veneno ☠️</option>
                <option value="terra">Terra 🌍</option>
                <option value="voador">Voador 🕊️</option>
                <option value="psíquico">Psíquico 🔮</option>
                <option value="inseto">Inseto 🐛</option>
                <option value="pedra">Pedra 🪨</option>
                <option value="fantasma">Fantasma 👻</option>
                <option value="dragão">Dragão 🐉</option>
                <option value="sombrio">Sombrio 🌑</option>
                <option value="aço">Aço ⚙️</option>
                <option value="fada">Fada ✨</option>
              </select>
            </label>
    
            <div>
              <label htmlFor="descricao">Descrição </label>
              <input
                type="text"
                name="descricao"
                placeholder="Descrição"
                onChange={(e) => { setDescricao(e.target.value) }
                    }
                value={descricao}
              />
            </div>
    
            <div>
              <label htmlFor="poder">Poder </label>
              <input
                type="number"
                name="poder"
                placeholder="0-100"
                max="100" min="0"
                onChange={(e) => { setPoder(e.target.value) }
                    }
                value={poder}
              />
            </div>
    
            <button type="submit">Cadastrar Pokémon</button>
          </form>
    
          <ToastContainer />
        </div>
    )
}

export default Form;