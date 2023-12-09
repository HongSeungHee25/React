import './App.css';
import { useState } from 'react';

function App() {

  let post = 'React Study';    
  let [글제목, a] = useState(['React Study','코딩','개발']);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);
  let [따봉3, 따봉변경3] = useState(0);

  return (
    <div className="App">
        <div className="black_nav">
          <h4>승희 블로그</h4>
        </div>
        <div className="list">
          <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경1(따봉1+1) } }> [좋아요 ❤️ </span> { 따봉1 }] </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[1] } <span onClick={ ()=>{ 따봉변경2(따봉2+1) } }> [좋아요 ❤️ </span> { 따봉2 }] </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[2] } <span onClick={ ()=>{ 따봉변경3(따봉3+1) } }> [좋아요 ❤️ </span> { 따봉3 }] </h4>
          <p>2월 17일 발행</p>
        </div>
        <Modal></Modal>
    </div>
  );
}
function Modal(){
  return(
        <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}

export default App;
