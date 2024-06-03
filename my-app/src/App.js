import logo from './logo.svg';
import './App.css';
import Info from './07.Hooks/info';
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(false);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr/>
      {visible && <Info />}
      {/* visible이 true 이면 Info 출력 */}
      {/* visible이 false 이면 Info 미출력 */}
      {/* -> if문으로 사용함 */}
    </div>
  );
}

export default App;
