/*
generic?
  - 일종의 마법상자 같은것?
  - 안에 타입을 넣으면 그 타입에 맞게끔 값이 변합니다
*/

// 이렇게 하면 string밖에 검사를 못합니다.
// const checkNull = (arg: string | null): any => {
//   if ((arg === null)) {
//     throw new Error("값이 비어있습니다");
//   } else return arg;
// };

const checkNull = (arg: any | null): any => {
  if (arg === null) {
    throw new Error("값이 비어있습니다");
  } else return arg;
};

// T
function checkNullG<G>(arg: G | null): G {
  if (arg === null) {
    throw new Error("값이 비어있습니다");
  } else return arg;
}
/*
<G>
안에 넣는 type이 어떤게 되었든 그 형태로 바뀝니다.
(string 타입을 받으면 string 타입을 내뱉습니다.)

any 대신에 사용할 수도 있고 사용할 일이 많은 편입니다. (useState에도 쓰임)
*/
