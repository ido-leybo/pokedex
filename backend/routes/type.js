const { Router } = require("express");
const axios = require('axios').default;

const type = Router();

type.get("/:name", async (req, res) => {
  const typeName = req.params.name;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}/`);
  const pokeArray = data.pokemon.map(obj => obj.pokemon);
  const details = {
    type: data.name,
    pokemons: pokeArray,
    id: data.id,
  }
  res.json(details);
});

module.exports = type;
