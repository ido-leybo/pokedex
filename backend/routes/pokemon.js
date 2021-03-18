const { Router } = require("express");

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  res.send("Pokemon route");
});

module.exports = pokemon;
