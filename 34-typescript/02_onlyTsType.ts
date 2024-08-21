//  only TypeScript type(ts type)

/**
 *  튜플 (Tuple)
 *  - 튜플은 고정된 개수의 요소를 소유
 *  - 각 요소의 타입이 미리 지정된 배열
 *  - 각 요소의 순서 중요, 순서에 따라 타입이 다름
 */

// 튜플 타입 선언
let drink: [string, string];

// 튜플 값 선언
drink = ["cola", "cocaCola"];

console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하기
let drink2: [string, string] = ["cola", "pepsi"];
console.log(drink2);

// 튜플의 데이터를 변경 할 때도, 배열의 데이터를 변경한 것 처럼 인덱스로 접근
// 또한, 배열의 메소드도 사용 가능

// 인덱스로 접근해 값 변경 가능
drink2[0] = "zeroCola";
drink2[1] = "ZeroPepci";
console.log(drink2);

drink2.push("good");
console.log(drink2);
/**
 * * Tuple의 숨겨진 한계
 *    : 길이와 타입이 정해진것 처럼 보이지만, push 메서드가 동작해 정의 파손
 *      튜플이라 고정된 개수가 변하면 안되는데 변함
 *
 *  Why?
 *  - 이는 TS의 타입 시스템이 배열 메소드와 관련 동작을 '완전히' 제한 X
 *
 *  이처럼타입 시스템의 의도와 어긋난 동작 방지하려면
 *  as const 사용, readonly 키워드로 튜플을 불변으로 만들기 가능
 */

// readOnly
//  - 요소의 타입 순서와 길이를 '완벽히' 고정
let drink3: readonly [string, number] = ["cider", 2000];
// drink3.push("HI"); // Error
console.log(drink3);

/**
 * Type 별칭
 *  - type 별칭을 이용해 Type 선언 가능!
 */
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터관리하는 작업일 경우 사용하면 이점!
let most1: campionInfo = [1, "rani", 3];
console.log(most1);

// ########################################################################
/**
 * Enum
 *  사용이유?
 *  1. 분야별로 종류를 정의해 명확히 사용
 *  2. 하드코딩의 실수를 줄이기 위해
 */

//  - 숫자 값 지정 가능 (기본)
// enum Auth {
//   admin = 0,
//   user = 1,
//   guest = 2,
// }

//  #1. enum은 기본적으로 0에서 1씩 증가하는 값 소유
enum Auth {
  admin,
  user,
  guest,
}

console.log(Auth.admin); // 0
console.log(Auth.user); // 1
console.log(Auth.guest); // 2

// #2. 정의되지 않은 값은 '이전'값에서 1추가
enum Menu {
  pasta = 4000,
  pizza = 5000,
  chicken,
}
console.log(Menu.pasta);
console.log(Menu.pizza);
console.log(Menu.chicken);

// #3. 문자열 지정 기능
enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}
console.log(Cafe.americano); // 아메리카노
console.log(Cafe.latte); // 라떼

// #3-2 문자열 & 숫자 혼합 지정 가능
enum Cake {
  choco,
  vanilla = 200,
  mango,
  kiwi = "kiwi",
}
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.mango);
console.log(Cake.kiwi);

// ########################################################################
//  Any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = "Dog";
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = "Cat";
console.log(val2);
