import { ChangeEvent, useState, useCallback } from "react";
type TodoProps = {
  id: number;
  value: string;
  status: string;
  isChecked: boolean;
};
const useInput = (initialValue: TodoProps) => {
  const [value, setvalue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setvalue({
      ...value,
      value: e.target.value,
    });
  }, []);

  return [value, onChange, setvalue] as const;
};

export default useInput;

// https://velog.io/@seong-dodo/%EB%A7%9B%EB%B3%B4%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-react-typescript-todolist
