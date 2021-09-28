import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '트렐러 임무 완수하기',
      checked: true,
    },
    {
      id: 2,
      text: '로그아웃 기능 완성하기',
      checked: false,
    },
    {
      id: 3,
      text: '파일 다운로드 기능 완성하기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
