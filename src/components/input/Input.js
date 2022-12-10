import { RiAddCircleFill } from "react-icons/ri";
import './input.css'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Adicione uma tarefa" className="addTask" />
      <button>
        Adicionar <RiAddCircleFill />
      </button>
    </div>
  );
}

export default Input