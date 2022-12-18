// 비용 아이템 저장
// 파일이름 관례 : 첫단어, 중첩 단어는 대문자로 시작
// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐
// 컴포넌트는 Html 코드를 반환하는 함수일 뿐
// -> 컴포넌트에서 반환하는 html코드는 컴포넌트가 화면에 렌더링하는 것이 무엇인지에 따라 다름
// 리액트는 {}중괄호 안에서 자바스크립트 실행 가능

import "./ExpenseItem.css";

function ExpenseItem(props) {
  // 동적 위치표시자 만들기
  // 날짜 객체 생성하기
  // 최초의 날자 값 설정, 0에서 시작하기 때문에 하루 전날 입력
  // 상수를 {}에 넣어도 Date객체는 그대로 출력될수 없음 -> toISOString() 내장 메소드 호출

  // props를 사용하면서 다음 구문 필요 없어짐
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.6d7;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    // jsx 구문에서는 class 가 아닌 className을 쓴다
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
