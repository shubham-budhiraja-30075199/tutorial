import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import LearnJSX from "./components/LearnJSX";
import NoJSX from "./components/NoJSX";
import Propsintro from "./components/Propsintro";
import Message from "./components/Message";
import DestructuringPropsandState from "./components/DestructuringPropsandState";
import Functionclick from "./components/Functionclick";

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
        <Message />
        <DestructuringPropsandState name="Shubham Budhiraja" company="ADL"  />
        <Functionclick />
      </div>
    </>
  );
}

export default App;
