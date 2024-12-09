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

    // Use these 2 to calculate the rating
    total_stars: {
      type: Number,
      required: true,
      default: 0
    },

    people_rated: {
      type: Number,
      required: true,
      default: 0
    },

    image: {
      type: String,
      required: false,
      default: "../assets/defaultRecipeImg.png"
    }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
