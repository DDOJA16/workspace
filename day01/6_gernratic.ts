/*
- https://darrengwon.tistory.com/802
- https://velog.io/@edie_ko/TypeScript-Generic-%EC%A0%9C%EB%84%A4%EB%A6%AD-feat.-TypeScript-%EB%91%90-%EB%8B%AC%EC%B0%A8-%ED%9B%84%EA%B8%B0

제네릭(Generic)?
  - C#과 Java와 같은 객체지향 프로그래밍에서 사용하는 기법
  - 메서드 매개변수의 구체적인 타입을 기재하지 않고 다양한 타입을 처리할 수 있는 기술
  - 함수, 인터페이스, 클래스의 재사용성을 높일 수 있다

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

// Gereric 예시
const num = (arg: number): number => {
  return arg;
};
const str = (arg: string): string => {
  return arg;
};
const bool = (arg: boolean): boolean => {
  return arg;
};
// 함수의 기능은 똑같은데, 매개변수의 타입과 변환하는 타입이 다르다는 이유로 여러개의 함수를 구현한 상태

// 1. 기본사용법
function gerneric<T>(arg: T): T {
  return arg;
}
// 화살표 함수 사용법
const identify = <T>(arg: T): T => {
  return arg;
};
// 제네릭 기법을 사용하면 한 개의 함수로 구현할 수 있다.
// 사용법 - 함수명 뒤에 <T>를 추가하며, T를 매개변수의 타입 도는 반환타입으로 설정할 수 있다
// 사용하는 경우 - any 타입을 써서 함수의 반환타입으로 지정하면 무슨 타입을 return하는지 유추하기 어렵기 때문에
//                <> 안에 타입을 명시해서 무슨타입으로 반환하는지 유추하기 쉽게 합니다.(유지보수에 좋다)

// 선언시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법

// 2. 배열 형태의 제네릭타입
const identi = <T>(arg: T[]): T[] => {
  console.log(arg.length);
  return arg;
}; // T라는 변수타입을 받고 인자로는 배열형태의 T를 받는 함수 (indenti([1,2,3]))

// 3. 두 개 이상의 Generic 쓰기
const multiGeneric = <T, U>(v: T, u: U): [T, U] => {
  return [v, u];
};
multiGeneric("string", 123);
// 두 변수의 타입이 다를 경우 두가지 타입변수가 필요함
// 관용적으로는 T 다음으로 알파벳은 순서대로 사용

// 4. 상속 이용하기(extends)
