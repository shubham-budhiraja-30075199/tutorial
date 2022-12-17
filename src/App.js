import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import LearnJSX from "./components/LearnJSX";
import NoJSX from "./components/NoJSX";
import Propsintro from "./components/Propsintro";

function App() {
  return (
    <>
      <div className="container">
        <h1>Tutorial Notes</h1>
        <Hello />
        <Welcome />
        <LearnJSX />
        <NoJSX />
        <Propsintro name="Shubham Budhiraja" company="ADL">
          This text is the child of Propsintro (check App.js) and is called in JSX using <strong>props.children</strong>.
        </Propsintro>
      </div>
    </>
  );
}

export default App;
