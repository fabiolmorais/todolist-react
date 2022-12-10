import './tarefa.css'
import { MdDeleteForever } from 'react-icons/md'

const Tarefa = ({
  tarefa,
  listaTarefas,
  removerTarefa,
  isChecked,
  setIsChecked,
  onChange,
}) => {
  return (
    <ul>
      {listaTarefas.map((tarefa) => (
        <li key={tarefa.id}>
          <label>
            <input
              type="checkbox"
              checked={tarefa.checked}
              onChange={(e) => onChange(tarefa.id, e.target.checked)}
              className="check"
            />
            <span
              style={{
                textDecoration: tarefa.checked ? "line-through" : "initial",
              }}
            >
              {tarefa.texto}
            </span>
          </label>
          <MdDeleteForever
            className="iconDelete"
            onClick={() => {
              removerTarefa(tarefa.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tarefa