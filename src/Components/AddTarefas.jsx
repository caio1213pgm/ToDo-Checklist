import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddTarefas({ addTarefa }) {
  const [titleTarefa, setTitleTarefa] = useState("");
  return (
    <div className="AddTarefas">
      <h3>Adicionar Tarefa</h3>
      <input
        type="text"
        value={titleTarefa}
        placeholder="Digite a tarefa"
        onChange={(event) => {
          setTitleTarefa(event.target.value);
        }}
      />

      <button onClick={() => {
        if(!titleTarefa.trim()){
           return alert("Adcione um conteúdo para continuar")
        }
        addTarefa(titleTarefa)
        setTitleTarefa("")
      }}>Adicionar Tarefa</button>
    </div>
  );
}

export default AddTarefas;