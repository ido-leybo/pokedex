import "./App.css";
import SearchArea from "./components/SearchArea";
import Details from "./components/Details";
import List from "./components/List";
import { useState } from "react";

const initialDetails = {
  name: "",
  height: "",
  weight: "",
  types: "",
};

function App() {
  const [listState, setList] = useState([]);
  const [detailsState, setDetails] = useState(initialDetails);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchArea onClick={console.log("click")} />
      <Details details={detailsState} />
      <List list={listState} />
    </div>
  );
}

export default App;
