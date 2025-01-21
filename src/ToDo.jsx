import { useState } from "react";
import AddTarefas from "./AddTarefas";
import Tarefas from "./Tarefas";

function Todo() {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: "Estudar", taCompleta: false },
        { id: 2, texto: "Trabalhar", taCompleta: false },
        { id: 3, texto: "Dormir", taCompleta: false }
    ]);

    function addTarefa(texto){
        const novaTarefa = {
            id: tarefas.length + 1,
            texto: texto,
            taCompleta: false
        }
        const novasTarefas = [...tarefas, novaTarefa]
        setTarefas(novasTarefas);
    }

    function deletarTarefa(tarefaId){
        const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId)
        setTarefas(novasTarefas)
    }

  return (
    <div className="listaTarefas">
        
        <AddTarefas addTarefa={addTarefa} />
        <div className="tarefas">
            <h2>Lista de Tarefas</h2>
            <Tarefas tarefas={tarefas} deletarTarefa={deletarTarefa} />
        </div>
    </div>
  );
}
export default Todo;