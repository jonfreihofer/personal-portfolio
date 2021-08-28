import "./App.css";
import IconContainer from "../src/containers/IconContainer";
import { FaEye, FaCode, FaClipboard } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">Front End Engineer</p>
        <IconContainer>
          <FaEye />
          <FaCode />
          <FaClipboard />
        </IconContainer>
      </div>
    </>
  );
}

export default App;
