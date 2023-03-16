import { TodoProps } from "./todoList";
import { useState } from "react";

type AddTodoProps = {
  addTodo: (todo: TodoProps) => void;
};

const createTodo = (props: AddTodoProps) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return <div>createTodo</div>;
};
