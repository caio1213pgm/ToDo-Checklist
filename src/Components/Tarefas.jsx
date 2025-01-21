/* eslint-disable react/prop-types */
function Tarefas({ tarefas, deletarTarefa }) {
    return (
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{" "}
            <button onClick={() => deletarTarefa(tarefa.id)} className="botaoDeletar">x</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Tarefas;