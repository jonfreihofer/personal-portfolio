import "./App.css";
import IconContainer from "../src/containers/IconContainer";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">Front End Engineer</p>
      </div>
      <IconContainer>
        <FaBeer />
      </IconContainer>
    </>
  );
}

export default App;
