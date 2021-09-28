// 화면 가운데 정렬
// 앱 타이틀을 보여줌
// children 으로 내부 JSX 를 props 로 받아와서 렌더링해줌

import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title"> 소윤's 일정관리 </div>
      <div className="content"> {children}</div>
    </div>
  );
};

export default TodoTemplate;
