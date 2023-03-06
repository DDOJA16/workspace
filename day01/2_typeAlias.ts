/*
  typeAlias?
    - 어떠한 것에도 타입을 줄 수 있다. 는 의미
    - 기존에 존재하는 데이터 타입에 새로운 이름을 붙일 수 있는 기능입니다. 
      (새로운 타입의 생성이 아닌, 원래 존재하는 타입의 이름을 바꾸는 '치환'하는 개념)
    - 코드를 더 읽기 쉽고 명확하게 만드는 것이 목적인 기능입니다.
    
*/
// {} 는 지역변수화시킨거 (임시)

{
  type Text = string; //string 타입을 Text라는 별칭으로 사용한다고 선언
  const name: Text = "kayoung";

  type TextString = "안녕하세요"; //type 이름이 "안녕하세요"
  //일종의 값이나 value도 type화 시킬 수 있다\
  const nameString: TextString = "안녕하세요";

  /*
  typescript를 쓴다고하면 가장 많이 쓰는 것
    -type, interface
  */

  type UserInfo = {
    id?: number;
    name?: string;
    hobby?: string;
  };
  /*
  문제점 : 백엔드에서는 name이 있을수도 있고 없을수도 있다
  해결법 : id? ==> id가 있으면...

          ex_ data?.data -- data가 있으면? data 가져오기
              data!.data -- !는 확신
          
          typescript에선 ? 매우 많이 쓰임
  */
  const User: UserInfo[] = [
    {
      id: 3,
      name: "seongyoung",
      hobby: "축구",
    },
    {},
    {},
  ];
}

/*
  union type(or), interserction type
  실무에서 많이 쓰는 예시 (union은 많이 씁니다)
  ex1) button type = "submit" | "default"
  ex2) string | undefined
*/

type store = "옷가게" | "신발가게" | "와인가게";
type year = string | number;

let storeKind: store = "와인가게";
let year: year = "2022";
year = 2022;

type Studeunt = {
  name: string;
  scroe: number;
};

type WebUser = {
  nickname: string;
  posting: () => void;
};

// person은 Studeunt와 WebUser의 타입을 가지고 있어야한다
const internet = (person: Studeunt & WebUser) => {
  console.log(person.name, person.scroe);
};

internet({
  name: "유가영",
  scroe: 30,
  nickname: "Kayoung",
  posting: () => {
    console.log();
  },
  // 위에 정해진 타입들이 기재되어있지 않으면 에러 납니다
  // 없어도 에러 나지 않게 하려면? => 위의 type이름에 ? 붙이면됨 (posting?: () => void)
});
