//string

let hello: string = "hello";
console.log(hello);

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(5, 5));

//boolean
let bool: boolean = true;

//타입스크립트만이 가지고 있는 타입

/*
  1. unknown, any 🤎
     (알수없는, 아무나)   -> 이걸쓰면 ts쓰는 의미가 없다
      any는 가끔쓰입니다  -> 라이브러리처럼 내가 타입을 알 수 없는 경우에 어쩔수 없이 씁니다.

  2. never, void
      - 무한루프, 에러처리할 때 쓰입니다. (거의 쓰일 일 없습니다.)

      - never : 반환값이 있을 수 없을 경우에 쓰입니다
      - void : 반환값이 없는 경우에 쓰입니다 
              (리엑트에서 자주 쓰이는편 -> props로 함수 전달할 때)

  3. object 💩
      - object 범위 (객체, 배열, 여러개의값이 있으면 다 object)
      - object 범위가 광범위하기 때문에 어떤 타입의 배열인지, 어떤 타입의 객체인지 타입을 명시해주는 것이 좋다
  
  4. array
      1번째 방식 - Array<type>
      2번째 방식 - type[]
*/
const numberArray: Array<number> = [1, 2, 3];
const stringAraay: string[] = ["1", "2", "3"];
/*
      이중배열 쓸 때 방식
      1. string[string[]]
      2. Array<string[]>  ==> Array<Array<string>>

  5. tuple
      - 배열인데 값이 정해져있는 배열, 길이도 정해져 있다
*/

let student: [string, number, string]; // 배열 길이는 몇? 3
student = ["seongyoung", 20, "풋살"];

const [name1, age, hobby] = student;
