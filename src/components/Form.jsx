import { useState } from "react";

const Form = () => {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [poder, setPoder] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cadastrando Pokemon");
        console.log(nome, tipo, descricao, poder);

        setNome("");
        setTipo("");
        setDescricao("");
        setPoder("");
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
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="normal">Normal</option>
                    <option value="fogo">Fogo</option>
                    <option value="agua">Água</option>
                    <option value="grama">Grama</option>
                    <option value="elétrico">Elétrico</option>
                    <option value="gelo">Gelo</option>
                    <option value="lutador">Lutador</option>
                    <option value="veneno">Veneno</option>
                    <option value="terra">Terra</option>
                    <option value="voador">Voador</option>
                    <option value="psíquico">Psíquico</option>
                    <option value="inseto">Inseto</option>
                    <option value="pedra">Pedra</option>
                    <option value="fantasma">Fantasma</option>
                    <option value="dragão">Dragão</option>
                    <option value="sombrio">Sombrio</option>
                    <option value="aço">Aço</option>
                    <option value="fada">Fada</option>
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
            </form>
        </div>
    )
}

export default Form;