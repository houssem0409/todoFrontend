import logo from './logo.svg';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='App-content'>
         <h2>Todo List</h2>
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
