const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  pokeId: {
    type: Number,
    require: true,
  },
  types: {
    type: Array,
    require: true,
  },
  height: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  sprites: {
    type: Object,
  },
});

pokemonSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
