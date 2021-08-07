const { Router } = require("express");
const axios = require("axios").default;

const type = Router();

type.get("/:name", async (req, res) => {
  const typeName = req.params.name;
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${typeName}/`
    );
    const urlArray = [];
    let index = 0;
    const pokeArray = data.pokemon.map((obj) => obj.pokemon);
    let img = new Promise((resolve, reject) => {
      pokeArray.forEach(async (pokemon) => {
        let urlImage = await axios.get(pokemon.url);
        urlArray.push({
          name: urlImage.data.name,
          image: urlImage.data.sprites.front_default,
        });
        index++;
        if (index === pokeArray.length - 1) {
          resolve();
        }
      });
    });
    img.then(() => {
      res.status(200).json({
        id: data.id,
        type: data.name,
        pokemons: urlArray,
      });
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = type;
