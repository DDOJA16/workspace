import { Axios } from "apis/@core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const readList = async () => {
    const { data } = await Axios.get("/todos");
    setTodoList(data);
  };

  useEffect(() => {
    readList();
  }, []);

  const handleSubmit = async () => {
    const { data } = await Axios.post("/todos", {
      description,
      isCompleted: false,
    });
    alert(`${data.description} 이 추가되었습니다 `);
    console.log(data);
    setDescription("");
  };

  const toggleCompleteBtn = async (id, isCompleted) => {
    await Axios.patch(`/todos/${id}`, {
      isCompleted: !isCompleted,
    });
    await readList();
  };
  const deleteTodoBtn = async (id) => {
    await Axios.delete(`/todos/${id}`);
    await readList();
  };
  return (
    <>
      <Link to={"/login"}>로그인</Link>
      <Link to={"/signup"}>회원가입</Link>

      <div>
        <h2>추가하기</h2>
        <input
          placeholder="할 일"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>추가하기</button>
        <br />
        <h2>할 일 목록</h2>
        <ul>
          {todoList?.map((todo) => (
            <div key={todo.id}>
              <li key={todo.id}>{todo.description}</li>
              <button onClick={() => toggleCompleteBtn(todo.id, todo.isCompleted)}>
                {todo.isCompleted ? "완료" : "미완료"}
              </button>
              <button onClick={() => deleteTodoBtn(todo.id)}>삭제하기</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
