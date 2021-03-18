const { Router } = require("express");
require("dotenv").config();
const Pokemon = require("../models/details");
const collection = Router();

collection.get("/", async (req, res) => {
  Pokemon.find()
    .then((pokeCollection) => {
      if (pokeCollection.length === 0)
        return res.json({ message: "You have no Pokemons" });
      res.json(pokeCollection);
    })
    .catch((error) => {
      return res.status(404).json({ message: error.message });
    });
});

collection.post("/catch", async (req, res) => {
  const { body } = req;
  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  }
  console.log(body);
  const pokemon = new Pokemon({
    name: body.name,
    pokeId: body.pokeId,
    types: body.types,
    height: body.height,
    weight: body.weight,
    sprites: body.sprites,
  });
  pokemon
    .save()
    .then((savedPokemon) => {
      res.json(savedPokemon);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
});
module.exports = collection;
