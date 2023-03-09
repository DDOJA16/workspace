/*
  (참고 - https://blog.naver.com/celloman1929/222849412974)

  interface?
    - 일종의 타입설계도 (이 안에 있는 것은 반드시 구현되어야만 하는 것)
    
    - type alias와 다르게 interface는 중복 선언이 가능합니다
      (이전과 다음에 선언한 interface와 합쳐집니다)

    - typeAlias와 intertace는 타입지정으로써의 역할은 같으나
      interface는 class 적용이 가능합니다.

    - 일반적으로 interface와 class를 최종 타입으로 많이 사용하는 편
    - union이나 tuple을 정의할 때 type alias를 사용하는 편

    - interface 안에 함수도 정의할 수 있습니다.
    - 이름 앞에 readonly를 붙이면 처음 선언할 때만 값을 넣을 수 있고 이후 수정이 불가능합니다.
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
