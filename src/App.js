// style
import './App.css';

// components
import Header from './components/header/Header';
import Input from './components/input/Input';
import Tarefa from './components/tarefas/Tarefa';

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Tarefa />
    </div>
  );
}

export default App;
