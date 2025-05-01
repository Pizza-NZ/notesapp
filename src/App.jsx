import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />

        <h1>
          Hello from <span className="text-red-600 font-semibold">Amplify</span>
        </h1>
      </header>
    </div>
  );
}

export default App;
