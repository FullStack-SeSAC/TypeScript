function arrElement<T>(arr: T[], index: number): T | false {
  const Arr = [...arr];
  if (index < 0 || index >= Arr.length) return false;
  return Arr[index];
}

console.log(arrElement<string>(["a"], 0));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!

console.log(arrElement<string>(["a"], 1)); // false
