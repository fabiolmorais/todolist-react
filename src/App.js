// style
import "./App.css";

// state
import { useState, useRef } from "react";

// components
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Tarefa from "./components/tarefas/Tarefa";

function App() {
  //state
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  //ref
  const idTarefa = useRef(0);
  const inputRef = useRef();

  //funções
  const adicionarTarefa = () => {
    if (tarefa.length > 0) {
      setListaTarefas([
        ...listaTarefas,
        { id: idTarefa.current, texto: tarefa, checked: isChecked },
      ]);
      idTarefa.current++;
      setTarefa("");
      inputRef.current.focus();
    }
  };

  const handlekeyUp = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      adicionarTarefa(tarefa);
    }
  };

  const removerTarefa = (id) => {
    const filtro = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(filtro);
  };

  const handleTaskChange = (id, checked) => {
    const newList = [...listaTarefas];
    for (const i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = checked
      }
    }
    setListaTarefas(newList);
  }

  return (
    <div className="App">
      <Header />
      <Input
        inputRef={inputRef}
        tarefa={tarefa}
        setTarefa={setTarefa}
        adicionarTarefa={adicionarTarefa}
        handlekeyUp={handlekeyUp}
      />
      <Tarefa
        tarefa={tarefa}
        listaTarefas={listaTarefas}
        removerTarefa={removerTarefa}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onChange={handleTaskChange}
      />
    </div>
  );
}

export default App;
