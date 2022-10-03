import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <>
      <div className="App">
        <Homepage></Homepage>
        {/* <Login></Login> */}
        {/* <Register></Register> */}
      </div>
      <div className="App">
        {/* <Homepage></Homepage> */}
        {/* <Login></Login> */}
        <Register></Register>
      </div>
      <div className="App">
        {/* <Homepage></Homepage> */}
        <Login></Login>
        {/* <Register></Register> */}
      </div>
    </>
  );
}

export default App;
