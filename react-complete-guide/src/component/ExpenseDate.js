// 날짜를 달력에 올리는 새로운 컴포넌트 생성
// 컴포넌트와 리액트는 JSX코드를 반환하도록 하는 기능이 추가된 일반적인 함수
// 매개변수로 props 사용 -> Date 속성이 설정된것처럼 사용

// ? ED는 EI를 import하지 않는데 Props 만으로 date가 전달된다.
// 그런데 왜 EI는 ED를 반드시 import 해야하지?

import './ExpenseDate.css';

function ExpenseDate(props) {
   const month = props.date.toLocaleString("en-US", { month: "long" });
   const year = props.date.getFullYear();
   const day = props.date.toLocaleString("en-US", { day: "2-digit" });

   return (
      <div className='expense-date'>
         <div className='expense-date__month'>{month}</div>
         <div className='expense-date__year'>{year}</div>
         <div className='expense-date__day'>{day}</div>
      </div>
   )
}


// 파일 밖에서 재사용할 수 있도록
export default ExpenseDate;