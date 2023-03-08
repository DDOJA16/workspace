// 도형 클래스 만들기 예시

/*
  1. 상속 (extends 이용)
    - class의 재사용을 의미한다고 볼 수 있다

    - 예시
      만일 동그라미, 세모 class를 만들려고 한다면
      세가지 각각의 class 생성이 필요하다

      이 때 동그라미, 세모의 공통점과 '상속'을 이용해
      하나의 클래스를 만들어서 재사용할 수 있다.
*/
//
// interface명과 class명이 같아도 되는건가? 명이 다르면 생성자의 값의 타입이 존재하지 않는다고 뜬다
interface Shape {
  width: number;
  height: number;
  color: string;
}

class Shape {
  constructor(width: number, height: number, color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends를 이용해 Shape + Rectangle class를 연결했다
// 연결된 Rectangle class는 Shagpe 틀을 그대로 복제하며 만들어지고
// 떄문에 Shape 클래스에서 정의한 속성과 메소드들도 Rectangle class에 그대로 적용된다.
// 이렇게 연결하여 속성을 활용하면 유지보수를 간편하게 할 수 있다.
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();

/*
  2. 다양성
      - 속성을 활용할 때 필요한 함수만 재정의 하는것
*/
//📌연결되있는 class의 getArea함수 변경,재정의하기
class Triangle extends Shape {
  //메소드 재정의
  getArea() {
    return (this.width * this.height) / 2;
  }
  draw() {
    super.draw();
    console.log("삼각형");
  }
}

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
/*
Triangle class 는 Shape의 기본틀에서 부분만 재정의를 해 줄 수있다.
이러면 Triangle class에서는 getArea 메소드가 새롭게 정의된 코드로 실행된다

-> 이것을 over-riding 이라고 한다
*/
//
//📌연결되있는 class의 draw 함수를 그대로 가져오면서 새로운 함수 추가하기
/*
      super 함수를 이용
        - 상위객체의 함수를 호출할 때 사용된다 (상위객체 Shape draw 함수가 호출됨)
*/
