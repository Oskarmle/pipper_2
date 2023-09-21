// Importere CSS filer
import "./css/nav.css";
import "./css/header.css";

// Importeret komponenter
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
