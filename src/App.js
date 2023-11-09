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
import { useState, useEffect } from "react";
// import { Pip } from "./entities/pip";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const pipsDummyData = [
  //   new Pip("Et flot pip", new Date(), "Oskar"),
  //   new Pip("Et flot pip til", new Date(), "Emilie"),
  //   new Pip("Et flot pip til til", new Date(), "Ida"),
  // ];

  const fetchPips = async () => {
    const tableName = "pipper";
    const projectUrl = "https://gkavjglqqnalhjhbegaw.supabase.co";
    const data = await fetch(projectUrl + "/rest/v1/" + tableName, {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYXZqZ2xxcW5hbGhqaGJlZ2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MjM5MDgsImV4cCI6MjAxNTA5OTkwOH0.Qb5Cqe6_ix37I0wlOWVTHraCCc-ln6OJ57P8iL0wiQw",
      },
    }).then((result) => result.json());

    console.log(data);
    setPips(data);
  };

  useEffect(() => {
    fetchPips();
  }, []);

  const [pips, setPips] = useState([]);

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
