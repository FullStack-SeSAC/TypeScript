/**
 *  # generic
 *  - 선언 시, 타입 지정이 어려운 케이스 존재
 *  - 데이터 타입을 외부에서 지정
 *  - 생성 시점에서 타입 명시
 *  => 재사용성 유연성 증가
 *  => 타입을 변수처럼 사용
 *  <T> 형태로 주로 사용
 */

// EX1)
function numArrLen(arr: number[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3])); // 3

// EX2)
function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(strArrLen(["1", "2", "3", "4"]));

// - 리턴되는 값이 string, number, boolean, ...모든 값이 들어 올 수 있는 함수라면? 좋겠다!!

/**
 * #1. 제너릭 기본 사용법
 * <T>를 이용해 매개변수를 선언하는 공간을 하나 더 만듬
 *  => Type만 올 수 있음!!
 */

function arrLen<T>(arr: T[]) {
  return arr.length;
}

// T[] : T에 대응되는 자료형의 배열
console.log(arrLen<string>(["1", "2", "3", "4"]));
console.log(arrLen<number>([1, 2, 3, 4]));
console.log(arrLen<string | number>(["1", 2, "원", 4]));

// ############################################################
// Q) 빨간 밑줄/오류 사라지도록 함수 완성!
function printSome<T>(x: T, y: T) {
  console.log(x, y);
}

printSome<string>("hi", "hello");
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

/**
 * #2. 두개의 서로 다른 타입 매개변수 제너릭
 *  관례일뿐!!
 * T: type
 * U: usually
 */

function printSome2<T, U>(x: T, y: U): void {
  console.log(x, y);
}

printSome2<string, number>("1", 1);

// ############################################################
// < Interface와 generic >
//  EX1)
// Phone 인터페이스의 옵션이 여러 타입으로 정의 될 수 있다면? 제너릭!
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16pro: Phone<iphoneOption> = {
  company: "apple",
  createdAt: new Date("2024-08-21"),
  option: {
    // 제너릭을 통해 'option'의 속성타입을 유연하게 지정
    color: "spaceblack",
    storage: 256,
  },
};

console.log(iphone16pro);

// EX2)
type galaxyOption = {
  color: string;
  storage: number;
};
const galaxy27: Phone<galaxyOption> = {
  company: "samsung",
  createdAt: new Date("2024-09-21"),
  option: {
    // 제너릭을 통해 'option'의 속성타입을 유연하게 지정
    color: "black",
    storage: 256,
  },
};
console.log(galaxy27);
