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
  const [image, setImage] = useState(null);

  const onSearchClick = async (event) => {
    const { value } = event.target.parentElement.children[0];
    console.log(value);
    let {
      src,
    } = event.target.parentElement.parentElement.children[2].children[1];
    const pokeData = await axios.get(
      `http://localhost:3001/api/pokemon/${value}`
    );
    src = pokeData.data.sprites.front;
    setImage(src);
    setList([]);
    setDetails(pokeData.data);
  };

  const onTypeClick = async (event) => {
    const type = event.target.textContent;
    console.log(type);
    const pokeList = await axios.get(`http://localhost:3001/api/type/${type}`);
    const updateList = pokeList.data.pokemons;
    setList(updateList);
  };

  const clickOnNewPokemon = async (event) => {
    const name = event.target.innerText;
    console.log(name);
    const pokeData = await axios.get(
      `http://localhost:3001/api/pokemon/${name}`
    );
    const src = pokeData.data.sprites.front;
    setImage(src);
    setList([]);
    setDetails(pokeData.data);
  };
  const onOver = (event) => {
    let src = event.target.src;
    src = detailsState.sprites.back;
    event.target.src = src;
    setDetails(detailsState);
  };
  const onLeave = (event) => {
    let src = event.target.src;
    src = detailsState.sprites.front;
    event.target.src = src;
    setDetails(detailsState);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchArea onClick={onSearchClick} />
      <Details
        details={detailsState}
        renderImage={image}
        onOver={onOver}
        onLeave={onLeave}
        onClick={onTypeClick}
      />
      <List list={listState} onClick={clickOnNewPokemon} />
    </div>
  );
}

export default App;
