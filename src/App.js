import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/*       <Greet name="shams" age={30}>
        <button>Office</button>
      </Greet>
      <Greet name="akash" age={20}>
        <button>Teacher</button>
      </Greet>
      <Greet name="bipul" age={10}>
        <button>BCS</button>
      </Greet> */}
      {/* <Welcome name="Shams"></Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
