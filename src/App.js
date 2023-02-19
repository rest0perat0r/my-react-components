import "./App.css";

import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/*       <Greet name="Shams" age={30}>
        Scientist
      </Greet>
      <Greet name="Akash" age={10}>
        Teacher
      </Greet>
      <Greet name="Bipul" age={20}>
        Businessman
      </Greet> */}
      <Welcome name="Shams" age={30}>
        Scientist
      </Welcome>
    </div>
  );
}

export default App;
