import "./App.css";
import SearchArea from "./components/SearchArea";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchArea />
      <Details />
      <List />
    </div>
  );
}

export default App;
