import { RiAddCircleFill } from "react-icons/ri";
import './input.css'

const Input = ({
  tarefa,
  setTarefa,
  adicionarTarefa,
  inputRef,
  handlekeyUp,
}) => {
  return (
    <div className="input">
      <input
        ref={inputRef}
        type="text"
        placeholder="Adicione uma tarefa"
        className="addTask"
        value={tarefa}
        onKeyUp={handlekeyUp}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
      />
      <button onClick={adicionarTarefa}>
        Adicionar <RiAddCircleFill />
      </button>
    </div>
  );
};

export default Input