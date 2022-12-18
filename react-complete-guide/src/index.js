// 가장먼저 실행되는 파일
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// index.js 에서 가져온 ReactDOM에서 createRoot라는 메서드 호출
// 이 메서드는 React를 사용하여 구축할 전체 사용자 인터페이스의 메인 엔트리 포인트, 메인 훅 생성
// React 에 React 애플리케이션 = 내가 만들 UI가 로딩되는 웹 페이지의 어느 곳에 위치해야 하는지 알려줌
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// spa에서는 한개의 html파일만 사용하고 그 외 웹 페이지 상의 모든 UI 관련 변경 사항은 React가 처리
// -> public 폴더의 index.html 파일만 사용
// 이 단일 html 파일은 엔트리 포인트로서 React가 관리하는 UI 전반이 렌더링될 위치가 됨
// html의 div 태그 안에 React가 관리하는 UI 가 연결, 주입됨
// 변수로 선언된 div 태그의 root 를 render로 호출하여 React에게 선택된 div에서 
// 무엇이 렌더링되어야 하는지 알려줌

// -> html의 div 의 내부가 <App /> 이 된다는 것
// <App/> 은 5줄에서 import한 것. 항상 .js 확장자 빼고 입력
