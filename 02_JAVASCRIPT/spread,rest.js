//=============================================================================
// spread - 배열의 원소나 객체의 프로퍼티를 나누는데 사용
// 점 세개 ...
// 쉽게 배열을 복사하거나 안전하게 이전 객체를 복사해서 객체에 프로퍼티를 추가
// 이전 배열의 [1,2,3]에 새 배열의 원소 4 추가
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);
// [1,2,3,4]


//=============================================================================
// 앞에 나온 person 객체를 취해서 스프레드 연산자가 있는 newPerson에 전달
const person = {
   name: 'Max'
};

const newPerson = {
   ...person,
   age: 28
}
console.log(newPerson);


//=============================================================================
// rest
// 여기 점3개는 레스트 연산자로 사용. 매개변수를 배열에 통합
// 배열 매소드를 filter()처럼 사용할 수 있고, filter는 배열에서 전달되는 모든 원소들에 대해 함수를 실행
// -> 원소를 전달하고 화살표 함수를 사용해서 원소가 1과 같은지, 아닌지를 true or false로 반환
const filter = (...args) => {
   return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));
// 매개변수 (1,2,3)을 전달한 다음 실행하면, 배열로 [1] 출력
// -> 점 3개로 레스트 연산자를 생성해서 배열을 필터링 했기 때문