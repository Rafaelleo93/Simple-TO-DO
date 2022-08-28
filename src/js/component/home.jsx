import React, { useState } from "react";
import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { ItemsLeft } from "./ItemsLeft.jsx";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container mt-2" style={{ border: "1px solid black" }}>
      <div className="tittle">
        <h1 className="text-white ">
          <b>To do List</b>
        </h1>
      </div>
      <TodoForm
        text="Añadir tarea ..."
        value={todo}
        setter={setTodo}
        setterList={setTodos}
      />
      {todos.length === 0 ? (
        <p className="text-white">No hay tareas, añadir tarea.</p>
      ) : (
        <TodoList list={todos} setterList={setTodos} />
      )}
      <ItemsLeft list={todos} />
    </div>
  );
};

export default Home;
