import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'React Study';    
  let [글제목, b] = useState('React Study');

  return (
    <div className="App">
        <div className="black_nav">
          <h4>승희 블로그</h4>
        </div>
        <div className="list">
          <h4>{글제목}</h4>
          <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;
