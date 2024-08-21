function sum1(a: number, b: number): number {
  const result = a + b;
  console.log(result);
  return result;
}

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
sum1(5, 11); // 테스트는 이렇게 하기!

// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기
function sum2(...numbers: number[]): number {
  const result = numbers.reduce((a, b) => a + b, 0);
  return result;
}
// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20
