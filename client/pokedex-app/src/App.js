require('dotenv').config()
import "./App.css";
import SearchArea from "./components/SearchArea";
import Details from "./components/Details";
import List from "./components/List";
import Collection from "./components/Collection";
import { useEffect, useState } from "react";
import axios from "axios";

const initialDetails = [
  {
    name: "",
    height: "",
    weight: "",
    types: "",
    sprites: "",
    captured: "",
  },
];

function App() {
  const [detailsState, setDetails] = useState(initialDetails);
  const [listState, setList] = useState([]);
  const [image, setImage] = useState(null);
  const [button, setButton] = useState("catch");
  const [collection, setCollection] = useState([]);

  const onSearchClick = async (event) => {
    let value;
    if(event.target.tagName === "SPAN"){ // when clicking on the pokemon name in the collection, is details will be displayed
      value = event.target.innerText;
    } else if(event.target.tagName === "IMG") {
    value = event.target.previousElementSibling.innerText; 
    } else { // searching in the search field
      value = event.target.parentElement.children[0].value;
    }
    const pokeData = await axios.get(
      `/api/pokemon/${value}`
    );
    const data = pokeData.data;
    let src = pokeData.data.sprites.front;
    setImage(src);
    setList([]);
    setDetails({
      name: data.name,
      pokeId: data.id,
      types: data.types,
      height: data.height,
      weight: data.weight,
      sprites: data.sprites,
      captured: data.captured,
    });
    if (data.captured) {
      setButton("release");
    } else {
      setButton("catch");
    }
  };

  const onTypeClick = async (event) => {
    const type = event.target.textContent;
    const pokeList = await axios.get(`/api/type/${type}`);
    const updateList = pokeList.data.pokemons;
    setList(updateList);
  };

  const clickOnNewPokemon = async (event) => {
    const name = event.target.innerText;
    const pokeData = await axios.get(
      `/api/pokemon/${name}`
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
    detailsState.captured = true;
    setDetails(detailsState);
    await axios.post(
      `/api/collection/catch`,
      detailsState
    );
    console.log("saved");
    setButton("release");
    getCollection();
  };

  const onRelease = async () => {
    const id = detailsState.pokeId;
    await axios.delete(`/api/collection/release/${id}`);
    console.log("delete pokemon");
    setButton("catch");
    detailsState.captured = false;
    setDetails(detailsState);
    getCollection();
  };

  const getCollection = async () => {
    const res = await axios.get('/api/collection');
    setCollection(res.data);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="App">
      <div className = "container">
        <h1 className = "title">Pokedex</h1>
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
        <Collection pokemons = {collection} onClick = {onSearchClick}/>
      </div>
      <List list={listState} onClick={clickOnNewPokemon} />
    </div>
  );
}

export default App;
