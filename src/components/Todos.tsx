import { useState } from "react";
import TodoItem from "./TodoItem";
import { Button } from "@mui/material";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo 1",
      id: 1,
    },
    {
      text: "todo 2",
      id: 2,
    },
    {
      text: "todo 3",
      id: 3,
    },
    {
      text: "todo 4",
      id: 4,
    },
    {
      text: "todo 5",
      id: 5,
    },
    {
      text: "todo 6",
      id: 6,
    },
  ]);
  const [person, setPerson] = useState({
    name: 'Ahsan',
    designation: 'Software Architect'
  })
  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter(
      todo => todo.id !== itemId
    );
    setTodos(filteredTodos);
  };

  const addNewTodo = () => {
    setTodos([
      {
        text: "new Todo",
        id: Date.now(),
      },
      ...todos,
    ]);
  };

  return (
    <ul>
      <Button onClick={() => {
        setPerson({
          ...person,
          name: 'Muhammad Ahsan'
        })
      }}>Update name</Button>
      {JSON.stringify(person)}
      <li>
        <button onClick={addNewTodo}>Click me to add new todo</button>
      </li>
      {todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
        );
      })}
    </ul>
  );
};

export default Todos;
