import './tarefa.css'
import { MdDeleteForever } from 'react-icons/md'

const Tarefa = () => {
  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" name="check" id="chek" className="check" />
          <span>Tarefa 1</span>
        </label>
        <MdDeleteForever className="iconDelete" />
      </li>
    </ul>
  );
}

export default Tarefa