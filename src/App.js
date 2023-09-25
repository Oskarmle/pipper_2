// Importere CSS filer
import "./css/nav.css";
import "./css/header.css";
import "./css/pip.css";

// Importeret komponenter
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PipForm from "./components/PipForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Nav />
        <Feed />
      </div>
      <div>
        <PipForm/>
      </div>
      

    </div>
  );
}

export default App;
