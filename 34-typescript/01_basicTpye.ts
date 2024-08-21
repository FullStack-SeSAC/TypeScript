//  TypeScript basic type(js type)

// 타입 지정 [명시적]
let a: number = 1;
console.log("a ->", a);

let b: string = "str";
let c: boolean = true;
let d: undefined;
let e: null = null;
console.log(b, c, d, e);

// 타입 추론 [암묵적]
// - TypeScript는 변수의 초기 값을 기반으로 변수의 타입을 '자동 추론!'
// 이를 암묵적 타입 추론이라 정의
let aa = 1;
let bb = "hi";
let cc = false;
let dd;
let ee = null;
console.log(aa, bb, cc, dd, ee);

/**
 *
 */
// 배열
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ["a", "b"];  Type Error
console.log(numArr);

let arr1: (number | boolean | string)[] = [1, true, "string"];
console.log(arr1);

/**
 *  `|`연산자
 *  -> '유니온 타입'
 *      - 하나의 값이 여러 타입중 하나일 수 있음을 명시하는 TS시스템 기능
 */

// [boolean, null, number array가 원소가 될 수 있는 arr2]
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];
console.log(arr2);

// [어떤 자료형이든 상관 없는 배열]
let arr3: any[] = [1, 2, 3, "wow", true, false];
console.log(arr3);

/**
 *  객체
 */
let obj1: object = {
  name: "rani",
  age: 13,
};
console.log(obj1);
