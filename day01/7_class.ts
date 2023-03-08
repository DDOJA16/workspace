// https://blog.naver.com/jaeeun_98/222030709663) - Class

/*
🍦 class 란?
  - 프로토타입을 베이스로 좀 더 간편하게 객체를 생성할 수 있도록 추가된 문법이다
  - 연관있는 데이터(변수나 함수)를 함께 묶어놓은 것

🍦 class의 특징
  - 직접 데이터가 들어가 있지 않다 ('틀' 같은것)
  - 한번만 선언 가능하다
    
    ex) 붕어빵의 틀: class / 붕어빵의 팥: object

🍦 class 선언 방법
  - class 키워드를 이용해 class를 생성하고
  - 생성자(constructor)를 이용해 나중에 object를 만들때 필요한 데이터를 전달한다
  - 클래스명은 관례적으로 대문자로 시작한다
*/

class Person {
  constructor(name, age) {
    // 변수 선언 (this = 예약어, 현재 클래스 객체를 가리킴)
    this.name = name;
    this.age = age;
  }
  // 메소드명(함수) 선언
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// 객체 생성
const kayoung = new Person("kayoung", 30);

console.log(kayoung.name);
console.log(kayoung.age);
kayoung.speak();

//
//
/*
상속과 다양성
  1. 상속 (extends 이용)
    - class의 재사용을 의미한다고 볼 수 있다

    - 예시
      만일 동그라미, 세모 class를 만들려고 한다면
      세가지 각각의 class 생성이 필요하다

      이 때 동그라미, 세모의 공통점과 '상속'을 이용해
      하나의 클래스를 만들어서 재사용할 수 있다.
*/
// 도형 클래스 만들기 예시
