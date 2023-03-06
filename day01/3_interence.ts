/*
interence?
  - 타입을 추론
  - typescript가 결과값을 예측하여 타입을 추론해여 부여하는 것

  - 표현력을 위하여 가급적이면 추론되더라도 타입을 주는게 좋다
  - 하지만 회사의 컨벤션(규칙)에 따라 달라집니다.
*/

{
  function sum1(a: number, b: number) {
    return a + b;
    //숫자와 숫자를 더했으니 typescript가 return타입을 명시해주지 않아도 추론해서 부여해줍니다
  }

  sum1(1, 2);
}
