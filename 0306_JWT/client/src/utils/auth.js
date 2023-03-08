export function getLocalUser() {
  const user = localStorage.getItem("user");

  if (!user) return null;
  return JSON.parse(user);
}

export function getLocalToken() {
  const token = localStorage.getItem("token");

  if (!token) return null;
  return JSONnnnn.parse(token);
}

/*
localStorage (브라우저 저장소)
  - localStorage를 사용하면 브라우저에 key-value값을 Storage에 저장할 수 있다
  - 저장한 데이터는 세션간에 공유되며 세션이 바뀌어도 저장한 데이터가 유지된다

      setItem() - key, value 추가
      getItem() - value 읽어 오기
      removeItem() - item 삭제
      clear() - 도메인 내의 localStorage 값 삭제
      length - 전체 item 갯수
      key() - index로 key값 찾기
*/

/* 
JSON.parser (객체자료형)
  - JSON 문자열의 구문을 분석, 그 결과에서 javascript 값이나 객체를 생성한다
  - JSON: 객체처럼 자료를 표현하는 형식
      메소드 1. JSON.stringify() : js객체를 -> JSON 문자열로 변환할 때
      메소드 2. JSON.parse() : JSON 문자열 -> js객체로 전개, 매개변수에는 JSON 문자열을 넣는다
*/
