/*
  (참고 - https://blog.naver.com/celloman1929/222849412974)

  interface?
    - 인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미합니다 (이 안에 있는 것은 반드시 구현되어야만 하는 것)
    
    - interface와 type의 차이점
        1. 메소드와 property를 클래스가 가지도록 강제할 수 있게 해준다
        2. 인터페이스는 자바스크립트에서 컴파일되지 않아 js파일에서 보이지 않는다
        3. type과 interface는 상속시키는 법이 다르다
        4. type은 새로운 property를 추가할때 상속되는 개념이라는 것을 적어야 하지만
           interface는 동일한 네이밍으로 여러번 중복으로 선언할 수 있다 (합쳐짐)


    - typeAlias와 intertace는 타입지정으로써의 역할은 같으나
      interface는 class 적용이 가능합니다.

    - 일반적으로 interface와 class를 최종 타입으로 많이 사용하는 편
    - union이나 tuple을 정의할 때 type alias를 사용하는 편

    - 클래스나 오브젝트의 모양을 정의하고 싶으면 인터페이스를 사용하고, 다른 모든 경우에는 타입을 쓰라고 권유한다.
    - 타입 alias나 특정 값으로 타입을 제한하는 경우와 같은 특별한 경우에는 인터페이스가 아닌 타입을 사용한다. 
*/

//
// 인터페이스 사용방법
interface Person {
  age: number;
  name: string;
}

function logPerson(obj: Person) {
  console.log(obj.age, obj.name);
}

const a = { name: "kayoung", age: 30 };
const c = { name: "kayoung", age: 30, addr: "addr" };
logPerson(a);
/*
Person이라는 인터페이스를 정의한 후,
logPerson의 obj라는 파라미터의 규칙을 정의해주면
해당 obj엔 규칙에 해당하는 값만 넣을 수 있다
위의 예시에서 name, age 둘 중 하나의 값이라도 들어가지 않으면 에러가 발생한다
그러나 name, age 외에 다른 값을 넣는 건 가능하다 
*/
//
//
// 옵션 속성, readonly 속성
interface Persons {
  ages?: number;
  readonly names: string;
  address: string;
}
/*
옵션 속성
  - interface에 정의되어 있는 값들은 모두 무조건 사용되어야 하지만
    속성에  ?를 붙여주면, 해당속성을 사용하지 않아도 에러가 발생하지 않는다
readonly 속성
  - 읽기 전용 속성 (배열에서도 사용가능 - ReadonlyArray)
  - 생성할 때만 값을 할당하고, 그 후에는 변경할 수 없다
*/
//
//
// 인터페이스 함수 설정
interface login {
  // 함수의 인자타입               함수의 반환타입
  (id: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인했습니다");
  return true;
};
/*
loginUser에 login 인터페이스를 적용했으므로 loginUser의 인자타입은 string, 반환타입은 boolean이어야 한다
*/
type User = {
  id: number;
  name: string;
};

interface Post {
  id: number;
  content: string;
  User: User;
}

interface Post {
  Comments: {
    User: User;
    content: string;
  };
}
