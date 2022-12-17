//=============================================================================
// 참조형 데이터 타입
// number, string, boolean 이런 것들은 모두 기본형 자료 타입
// 재할당하거나 변수를 다른 변수에 저장할 때마다 값을 복사
// 객체와 배열은 참조형 자료 타입

const number = 1;
// number의 진짜 복사본을 생성환다는 것, 그것이 num2
const num2 = number;
// 값 1을 num2에 복사한 것
console.log(num2); // 1


//=============================================================================
const person = {
   name: 'Max'
}
const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson); // name:Manu
// 객체 person 을 복사한것이 아니고
// 객체 person은 메모리에 저장되어 있고, 상수 person 에는 메모리에 있는 주소를 가리키는 포인터를 저장
// 그래서 person 을 secondPerson에 할당하면 포인터가 복사됨
// person을 복사해서 secondPerson에 저장한 것

// 포인터를 복사했고, person이 가리키는 메모리에 있는 동일한 객체를 가리키기 때문에 
// person의 name을 변경하면 자동적으로 secondPerson의 이름도 바뀜


//=============================================================================
// 스프레드 연산자 사용

const person2 = {
   name: 'Max'
};
const secondPerson2 = {
   ...person
}
person.name = 'Manu';
console.log(secondPerson); // name:Max
// 포인터가 아닌 진짜 복사본을 생성했기 때문에 이름이 바뀌지 않음
// 재할당 -> 값이 아닌 포인터를 복사하는것
// 진짜를 복사 -> 새로운 객체를 생성해서 전체 객체를 복사하는 것이 아니라 '프로퍼티'를 복사해야 함