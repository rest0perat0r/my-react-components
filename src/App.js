import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Shams" age={30}>
        Scientist
      </Greet>
      <Greet name="Akash" age={10}>
        Teacher
      </Greet>
      <Greet name="Bipul" age={20}>
        Businessman
      </Greet>
    </div>
  );
}

export default App;
