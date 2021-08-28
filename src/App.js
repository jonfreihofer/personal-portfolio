import "./App.css";
import IconContainer from "../src/containers/IconContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">Front End Engineer</p>
      </div>
      <IconContainer>
        <FontAwesomeIcon icon="fa-regular fa-coffee" />
      </IconContainer>
    </>
  );
}

export default App;
