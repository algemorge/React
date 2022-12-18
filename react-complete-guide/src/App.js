import ExpenseItem from "./component/ExpenseItem";
function App() {
  // 일반적인 자바스크립트 = 명령적
  // const para = document.createElement('p');
  // para.textContent = 'This is also VISIBLE!';
  // document.getElementById('root').append(para);

  // 여러개의 비용이 들어있는 배열
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
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
// props : 속성을 추가해서 사용자 지정 컴포넌트에 데이터를 전달
