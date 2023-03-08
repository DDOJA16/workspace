/*
  OOP (Object Oriented Programming)
    - 객체 지향(중심) 프로그래밍
    - 참고링크 : https://blog.naver.com/baleun_class/223026146728
                https://blog.naver.com/baleun_class/223035297682
*/

/*
(https://blog.naver.com/jaeeun_98/223015453183) - OOP
객체 지향 프로그래밍이란?
  - 상태(State)와 행위(behave)로 이루어진 객체들의 상호작용을 통해 프로그램을 구현하는 방법을 의미
  - 여기서 객체(Object)란 생활에 쓰이는 모든 것, 생각들을 통틀어서 의미(사람, 사물, 의미가 있는 대상 등)
  - 우리가 실세계에서 사물을 인지하는 방식을 프로그래밍에 접목한 것을 말한다

🍦 객체 지향 프로그래밍의 장점  
    1. 코드 재사용 (상속의 개념 활용)
    2. 유지 보수 (개별적으로 존재하는 부품을 조립해서 만듯것이기 때문)

🍦 객체 지향 프로그래밍의 장점 
    1. 느린 실행속도
    2. 비교적 큰 용량
    3. 설계시 많은 시간과 노련 필요 (초기설계시 특히)

🍦 객체 지향 프로그래밍 특징 (추상화, 상속, 다향성, 캡슐화)
    1. 추상화 : 객체들의 공통적인 속성과 기능을 추출하여 정의하는 것
    2. 상속 : 이미 정의된 부모 클래스에 있는 모든 속성과 기능을 하위 클래스가 물려받는 것
              기존에 있는 클래스를 그대로 가져올 수도 있지만, 수정하여 사용할수도있다.
              다만, 과도한 코드 재사용은 각 코드 간의 결합도를 높이므로 조심해야 한다.
              (결합도가 높으면 유지보수가 어렵다.)
    3. 다형성 : 하나의 변수 또는 함수가 상황에 따라 다른 방식으로 동작하는 것
                (동일한 명령을 받아도 각자 연결된 객체에 따라 다른방식으로 동작)
    4. 캡슐화 : 변수와 함수를 하나의 클래스로 묶어, 외부에서 쉽게 접근하지 못하도록 하는 것


*/
interface CarDriving {
  drivingStart: () => void;
  drivingStop: () => void;
}

class Car {
  private driver = "또자";
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  drivingStart() {}
  static drivingStop() {}

  public Driver() {
    console.log(`${this.driver}`);
  }

  public printerName() {
    console.log(`동승자는${this.name}님 입니다`);
  }
}

// Let car = new Car();   ----> 생성자를 만든다 (클래스를 활용하여 새로운 객체를 만든다)
// car.Driver();

/*
접근제어자
  - 객체 속성에 접근하는 것을 제한할때 사용하는 키워드

private ----- 해당 클래스 내부가 아니라면 접근이 불가능 (수정,조작 x)
static ------ new 클래스명() <--- 원래는 선언을 해줘야하는데, 생성자를 만들지 않아도 접근이 가능합니다.
protected --- 외부 접근이 불가능, 단 상속 받은 자식클래스는 접근이 가능합니다.
public ------ 공공, 외부에서 접근 가능
*/

let car = new Car("공부하는또자");
let car2 = new Car("노래하는또자");
let car3 = new Car("춤추는또자");

car.printerName(); //의존성 부여
car2.printerName();
car3.printerName();

/*
안에 있는 서비스 로직을 건들지 않고 생성자를 통해서 
안에 있는 서비르 로직의 결과값을 바꿀 수 있는 것을
[ 의존성 부여 ] 라고 합니다.
*/

// todoservice.ts 사용예시
const TodoService = {
  create: ({ content, id }: any) => {
    axios.post("/todo", { content, id });
  },
  delete,
  updata,
  read,
};

// compontnets/todo.ts 사용예시
const onTodoCreate = () => {
  TodoService.create({ content: "안녕하세요", id: 3 });
};


// 객체안에 함수를 이용
/*
의존성 부여를 해서 안에있는 로직을 건들지 않고 밖을 바꿀만한가 ---> class 사용
단순히 값을 찾아서 하는거면 굳이 class를 안써도 됩니다.

그래서 class를 이용해 의존성부여를 할 수 있는 곳은 하고
필요없는 곳은 안하면서 두 가지 방법을 공존하면서 많이 씁니다.
*/

