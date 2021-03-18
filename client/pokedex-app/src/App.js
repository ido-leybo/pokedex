import "./App.css";
import SearchArea from "./components/SearchArea";
import Details from "./components/Details";
import List from "./components/List";
import { useState } from "react";
import axios from "axios";

const initialDetails = [
  {
    name: "",
    height: "",
    weight: "",
    types: "",
  },
];

function App() {
  const [detailsState, setDetails] = useState(initialDetails);
  const [listState, setList] = useState([]);

  const onClick = async (event) => {
    const { value } = event.target.parentElement.children[0];
    console.log(value);
    const pokeData = await axios.get(
      `http://localhost:3001/api/pokemon/${value}`
    );
    setDetails(pokeData.data);
    console.log(detailsState);
  };
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchArea onClick={onClick} />
      <Details details={detailsState} />
      <List list={listState} />
    </div>
  );
}

export default App;
