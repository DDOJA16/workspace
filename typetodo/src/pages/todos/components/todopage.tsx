import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "@/styles/common";
import { TodoProps } from "./todoList";
import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [todo, setTodo] = useState<TodoProps>({
    id: 0,
    value: "",
    status: "TODO",
    isChecked: false,
  });
  console.log(todos);
  console.log(todo);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      value: e.target.value,
    });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);

    setTodo({
      ...todo,
      id: todo.id + 1,
      value: todo.value,
    });
  };
  return (
    <STodoContainer>
      <p className="todoList">Todo List</p>
      <STodoInput>
        <div className="newTodoInput">
          <input
            type="text"
            value={todo.value}
            onChange={onChange}
            placeholder="Today Todo"
          />
        </div>
        <div className="newTodo">
          <button onClick={addTodo}>New Todo</button>
        </div>
      </STodoInput>
      <STodoList>
        {todos.map((i, idx) => (
          <div key={idx}>
            <p>{i.value}</p>
          </div>
        ))}
      </STodoList>
    </STodoContainer>
  );
};
export default TodoPage;
// #407be7;

const STodoContainer = styled.div`
  width: 400px;
  height: 80vh;
  background-color: #f3f2f2;
  margin: 0 auto;
  padding: 30px;
  color: #3666be;

  & .todoList {
    margin-bottom: 20px;
    font-size: 20px;
    ${flexCenter}
  }
`;

const STodoInput = styled.div`
  width: 100%;
  height: 30px;
  border: 2px solid #3666be;
  ${flexCenter}

  & .newTodoInput {
    width: 70%;
    height: 100%;
    border-right: 2px solid #3666be;

    & input {
      width: 95%;
      background-color: #f3f2f2;
      margin: 5px;
    }
  }
  & .newTodo {
    width: 30%;
    height: 100%;
    ${flexCenter}

    & button {
      background-color: #f3f2f2;
      margin-top: 4px;
    }
  }
`;
const STodoList = styled.div`
  width: 100%;
  height: 85%;
  margin-top: 20px;
  border: 2px solid #3666be;

  & div {
    width: 100%;
    height: 30px;
    ${flexAlignCenter}
    border-bottom: 2px solid #3666be;

    & p {
      line-height: 30px;
      margin: 5px 5px 0 5px;
      font-size: 14px;
    }
  }
`;
// https://blog.naver.com/kbc1208/222699828935
// https://blog.naver.com/kbc1208/222699759404
