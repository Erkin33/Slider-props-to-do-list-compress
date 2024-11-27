import React, { useState } from 'react';

function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}

function TodoForm({ onAddTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onAddTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  );
}

function AppLOWER() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Список дел</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} onDelete={() => handleDeleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default AppLOWER;