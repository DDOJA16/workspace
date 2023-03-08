// Path.tsx

// import { lazy } from "react";
// const TodosPage = lazy(() => import("pages/Home"));

// react 18버전에서 추가된 suspense
// 비동기 통신동안 컴포넌트 불러오는 기간을 lazy
// 비동기 통신동안 원하는 로딩페이지나, 로딩바, 스피너 구현

// -- 기본 형식
// export const Path = () => [
//   {
//     path: "/",
//     element: <TodosPage />,
//   },
// ];

// -- 레이아웃이 적용되어있는 상태의 TodosPage
// export const Path = () => [
//   {
//     element: <TodosPage />,
//     children: [
//       {
//         path: "/",
//         element: <TodosPage />,
//       }
//     ]
//   },
// ];
