import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Map from "./pages/KaKaoMap";
import KakaoMap from "./pages/KaKaoMap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          베포서버 테스트
        </a>

        <KakaoMap />
      </header>
    </div>
  );
}

export default App;
