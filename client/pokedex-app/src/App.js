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
  const [button, setButton] = useState("catch");

  const onSearchClick = async (event) => {
    const { value } = event.target.parentElement.children[0];
    let {
      src,
    } = event.target.parentElement.parentElement.children[2].children[1];
    const pokeData = await axios.get(
      `http://localhost:3001/api/pokemon/${value}`
    );
    const data = pokeData.data;
    src = pokeData.data.sprites.front;
    setImage(src);
    setButton("catch");
    setList([]);
    setDetails({
      name: data.name,
      pokeId: data.id,
      types: data.types,
      height: data.height,
      weight: data.weight,
      sprites: data.sprites,
    });
  };

  const onTypeClick = async (event) => {
    const type = event.target.textContent;
    const pokeList = await axios.get(`http://localhost:3001/api/type/${type}`);
    const updateList = pokeList.data.pokemons;
    setList(updateList);
  };

  const clickOnNewPokemon = async (event) => {
    const name = event.target.innerText;
    const pokeData = await axios.get(
      `http://localhost:3001/api/pokemon/${name}`
    );
    const src = pokeData.data.sprites.front;
    const data = pokeData.data;
    setImage(src);
    setButton("catch");
    setList([]);
    setDetails({
      name: data.name,
      pokeId: data.id,
      types: data.types,
      height: data.height,
      weight: data.weight,
      sprites: data.sprites,
    });
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

  const onCatch = async () => {
    await axios.post(
      `http://localhost:3001/api/collection/catch`,
      detailsState
    );
    console.log("saved");
    setButton("release");
  };

  const onRelease = async () => {
    const id = detailsState.pokeId;
    await axios.delete(`http://localhost:3001/api/collection/release/${id}`);
    console.log("delete pokemon");
    setButton("catch");
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
        onTypeClick={onTypeClick}
        buttonCatchClick={onCatch}
        buttonReleaseClick={onRelease}
        buttonText={button}
      />
      <List list={listState} onClick={clickOnNewPokemon} />
    </div>
  );
}

export default App;
