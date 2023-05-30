import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Tasks from './pages/Tasks/index';
import TaskForm from './pages/Tasks/Form/index';
import TaskDetail from './pages/Tasks/Detail/index';
 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tasks />} />
      <Route path="/tarefas_cadastro" element={<TaskForm />} />
      <Route path="/tarefas_cadastro/:id" element={<TaskForm/>} />
      <Route path="/tarefas/:id" element={<TaskDetail/>} />
    </Routes>
  );
}

export default App;
