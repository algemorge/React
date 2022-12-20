import Expenses from "./component/Expenses";

function App() {
  // 일반적인 자바스크립트 = 명령적
  // const para = document.createElement('p');
  // para.textContent = 'This is also VISIBLE!';
  // document.getElementById('root').append(para);

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

// JSX코드
// : 자바스크립트 안에 있는 html 코드. 자바스크립트 XML
// 사용자 지정 컴포넌트는 반드시 대문자로 시작, 임포트한 이름으로 넣어야 연결됨

// 컴포넌트를 재사용하는 법
// 1. 매개변수 사용
// 2. 리액트의 props 개념 사용

// props 
// : 속성을 추가해서 사용자 지정 컴포넌트에 데이터를 전달
// 동적인 props를 위해 값을 설정할 때 {}가 필요
// title = "Toilet Paper" 처럼 고정된 값도 사용 가능
