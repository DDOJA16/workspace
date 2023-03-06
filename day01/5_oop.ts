/*
  OOP (Object Oriented Programming)
    - 객체 지향(중심) 프로그래밍
    - 참고링크 : https://blog.naver.com/baleun_class/223026146728
                https://blog.naver.com/baleun_class/223035297682
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

private ----- 외부 접근이 불가능(수정,조작 x)
              (같은 클래스 내부에서만 접근이 가능합니다)
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
