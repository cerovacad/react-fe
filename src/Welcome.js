import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("loading");

  const fetchData = () => {
    axios
      .get("http://localhost:5000/welcome", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{data}</div>
      </header>
    </div>
  );
}

export default App;
