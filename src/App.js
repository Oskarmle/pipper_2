// Importere CSS filer
import "./css/nav.css";
import "./css/header.css";
import "./css/pip.css";
import "./css/pipform.css";

// Importeret komponenter
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PipForm from "./components/PipForm";
import { useState } from "react";
import { Pip } from "./entities/pip";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const pipsDummyData = [
    new Pip("Et flot pip", new Date(), "Oskar"),
    new Pip("Et flot pip til", new Date(), "Emilie"),
    new Pip("Et flot pip til til", new Date(), "Ida"),
  ];

  const [pips, setPips] = useState(pipsDummyData);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Nav setIsModalOpen={setIsOpen} />
        <Feed pips={pips} />
      </div>
      <div>
        <PipForm
          isModalOpen={isOpen}
          setIsModalOpen={setIsOpen}
          setPips={setPips}
          pips={pips}
        />
      </div>
    </div>
  );
}

export default App;
