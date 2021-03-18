const { Router } = require("express");
const axios = require('axios').default;

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const pokeName = req.params.name
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    const pokeTypes = data.types.map((pokeType) => pokeType.type.name);
    const details = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: pokeTypes,
      sprites: {
        front: data.sprites.front_default,
        back: data.sprites.back_default
      }
    }
    res.send(details);
});

module.exports = pokemon;
