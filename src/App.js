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
// import pipsDummyData from "./components/Feed";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Nav setIsModalOpen={setIsOpen} />
        <Feed />
      </div>
      <div>
        <PipForm isModalOpen={isOpen} setIsModalOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default App;
