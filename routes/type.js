const { Router } = require("express");
const axios = require("axios").default;

const type = Router();

type.get("/:name", async (req, res) => {
  const typeName = req.params.name;
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${typeName}/`
    );
    const pokeArray = data.pokemon.map((obj) => obj.pokemon);
    const details = {
      id: data.id,
      type: data.name,
      pokemons: pokeArray,
    };
    res.json(details);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = type;