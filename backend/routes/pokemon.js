require("dotenv").config();
const { Router } = require("express");
const axios = require("axios").default;
const Pokemon = require("../models/details");
const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const pokeName = req.params.name;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeName}`
  );
  Pokemon.find({ name: pokeName }).then((result) => {
    console.log(result);
    const pokeTypes = data.types.map((pokeType) => pokeType.type.name);
    if (result.length !== 0) {
      const details = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: pokeTypes,
        sprites: {
          front: data.sprites.front_default,
          back: data.sprites.back_default,
        },
        captured: true,
      };
      return res.send(details);
    }
    const details = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: pokeTypes,
      sprites: {
        front: data.sprites.front_default,
        back: data.sprites.back_default,
      },
      captured: false,
    };
    res.send(details);
  });
});

module.exports = pokemon;
