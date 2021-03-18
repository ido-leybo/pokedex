const { Router } = require("express");
const axios = require('axios').default;

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const pokeName = req.params.name
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    const pokeTypes = [];
    data.types.forEach((pokeType) => {
      pokeTypes.push(pokeType.type.name);
    })
    const details = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: pokeTypes,
    }
    res.send(details);
});

module.exports = pokemon;
