const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
  {
    creator_name: {
      type: String,
      required: true,
      default: ""
    },

    name: {
      type: String,
      required: [true, "Pune un nume"],
      default: "Prenume Nume"
    },

    description: {
      type: String,
      required: [true, "Pune o descriere"],
      default: "Oferita cu dragoste"
    },

    rating: {
      type: Number,
      required: true,
      default: 5
    },

    image: {
      type: String,
      required: false,
      default: "" //TODO: ADD DEFAULT PATH
    }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
