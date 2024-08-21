import React from "react";

// Student 컴포넌트의 props 타입 정의
interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // 필수 값 X
  handleClick: (name: string, grade: number) => void;
}

// #1. 'function' 선언형 컴포넌트의 타입정의
//  - React.FC 사용 안함
// export default function Student({
//   name,
//   grade,
//   part,
//   handleClick,
// }: StudentInfo) {
//   return (
//     <div onClick={() => handleClick(name, grade)}>
//       <li>이름 : {name}</li>
//       <li>학년 : {grade}</li>
//       <li>전공 : {part || "자유전공"}</li>
//     </div>
//   );
// }

// #2. '화살표' 함수 컴포넌트 타입 정의
//  - 'React.FC' 사용 해도 되고 안해도 됨
/**
 * `React.FC`
 *  - React.FunctionComponent 리액트 함수형 컴포넌트를 정의할 때 유용한 타입 정의 도구
 *  - 'Children' 자동 포함
 *      : 기본적으로 'children' prop을 자동 포함
 *      'children'이 필요 없으면 안쓰고, 직접 'props' 타입을 정의하는게 더 나음
 *
 * Why?
 *  - children이 존재한다는 가정하에 사용하기 때문에 TS를 사용하는 의미가 있나?
 *  - children 타입을 명확히 안해줌 -> TS 쓰는 이유가 있나?
 *  - children의 타입을 명시? => React.FC 왜해줌
 *  <따라서 React.FC를 지양>
 */

// 1. 사용.VER
//  - 인터페이스 & 제너릭
// const Student: React.FC<StudentInfo> = ({ name, grade, part, handleClick }) => {
//   return (
//     <div onClick={() => handleClick(name, grade)}>
//       <li>이름 : {name}</li>
//       <li>학년 : {grade}</li>
//       <li>전공 : {part || "자유전공"}</li>
//     </div>
//   );
// };

// 2. 사용 안한 VER
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름 : {name}</li>
      <li>학년 : {grade}</li>
      <li>전공 : {part || "자유전공"}</li>
    </div>
  );
};

export default Student;
