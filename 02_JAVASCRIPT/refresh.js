//=============================================================================
const numbers = [1, 2, 3]
// map() 배열의 모든 원소에서 실행됨. 안의 매개변수 이름은 임의로 정의
// map() 메소드는 모든 값을 새로운 배열로 반환
const doubleNumArray = numbers.map((num) => {
   return num * 2
})

// 이전 배열은 바뀌지 않음
console.log(numbers);         // 1,2,3
console.log(doubleNumArray);  // 2,4,6